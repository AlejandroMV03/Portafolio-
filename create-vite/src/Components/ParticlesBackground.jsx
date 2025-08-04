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

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#111827",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 180,
        density: {
          enable: true,
          area: 900,
        },
      },
      color: {
        value: "#10b981",
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
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      links: {
        enable: true,
        distance: 180,
        color: "#22d3ee",
        opacity: 0.6,
        width: 1.2,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",  // efecto al pasar cursor
        },
        onClick: {
          enable: false,    // deshabilitamos el click para no crear partículas
          mode: "none",
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
  }), []);

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}
