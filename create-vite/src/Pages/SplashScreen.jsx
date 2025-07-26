import { useEffect, useState } from "react";
import ParticlesBackground from "../Components/ParticlesBackground";

export default function SplashScreen({ onFinish }) {
  const [step, setStep] = useState("waiting");
  const [count, setCount] = useState(3);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter" && step === "waiting") {
        setStep("countdown");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step]);

  useEffect(() => {
    let timer;
    if (step === "countdown" && count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    }
    if (step === "countdown" && count === 0) {
      setStep("done");
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [count, step, onFinish]);

  return (
    <div className="relative w-full h-screen text-white flex flex-col items-center justify-center font-aesthetic">
      <ParticlesBackground />
      {step === "waiting" && (
        <div className="z-10 text-center p-6 bg-black/70 rounded-lg shadow-lg max-w-lg">
          <h1 className="text-4xl mb-4 font-bold animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer">
            <span className="inline-block animate-pulse">¡Estás entrando a mi portafolio!</span>
          </h1>
          <p className="text-lg animate-pulse">
            Presiona <span className="font-bold text-yellow-300">Enter</span> para iniciar la carga
          </p>
        </div>
      )}
      {step === "countdown" && (
        <div className="z-10 flex flex-col items-center justify-center text-center p-8 bg-black/80 rounded-lg shadow-lg max-w-xs">
          <span className="text-6xl md:text-9xl font-bold animate-bounce">
            {count > 0 ? count : (
              <span className="text-3xl md:text-5xl font-extrabold animate-pulse text-yellow-300">
                ¡Comenzamos!
              </span>
            )}
          </span>
        </div>
      )}
    </div>
  );
}