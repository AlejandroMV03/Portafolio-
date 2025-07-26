import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#111827", // fondo tipo consola (gray-900)
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 180, // aumenté a 180 partículas
          density: {
            enable: true,
            area: 900,
          },
        },
        color: {
          value: "#10b981", // verde neón tipo tailwind emerald-500
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.8,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: 1, // un poco más rápido
          direction: "none",
          outModes: {
            default: "bounce",
          },
        },
        links: {
          enable: true,
          distance: 180, // distancia aumentada para conectar más puntos
          color: "#22d3ee", // azul cian (cyan-400)
          opacity: 0.6, // líneas más visibles
          width: 1.2, // líneas un poco más gruesas
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.4,
          },
          push: {
            quantity: 6,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}
