import { useEffect, useState } from "react";

const typingText = "¡Estás entrando a mi portafolio!";

export default function SplashScreen({ onFinish }) {
  const [step, setStep] = useState("waiting");
  const [count, setCount] = useState(3);
  const [typed, setTyped] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  // Máquina de escribir para el texto inicial
  useEffect(() => {
    if (step === "waiting" && typingIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setTyped((t) => t + typingText[typingIndex]);
        setTypingIndex((i) => i + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, step]);

  // Manejar tecla Enter y click en texto "Enter"
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter" && step === "waiting" && typingIndex === typingText.length) {
        setStep("transition");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step, typingIndex]);

  // Función para iniciar con click/tap en palabra "Enter"
  function handleStartClick() {
    if (step === "waiting" && typingIndex === typingText.length) {
      setStep("transition");
    }
  }

  // Transición con blur y fade
  useEffect(() => {
    if (step === "transition") {
      const timeout = setTimeout(() => setStep("countdown"), 600);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  // Cuenta regresiva con zoom + fade
  useEffect(() => {
    let timer;
    if (step === "countdown" && count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    }
    if (step === "countdown" && count === 0) {
      setStep("done");
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [count, step, onFinish]);

  return (
    <div className="relative w-full h-screen text-white flex flex-col items-center justify-center font-aesthetic bg-black/80">
      {/* Waiting */}
      {(step === "waiting" || step === "transition") && (
        <div
          className={`z-10 text-center p-6 rounded-lg shadow-lg max-w-lg bg-black/70 transition-all duration-500
            ${step === "transition" ? "blur-sm opacity-0 scale-90" : "opacity-100 scale-100"}`}
        >
          <h1 className="text-4xl mb-4 font-bold">
            <span className="border-r-2 border-yellow-300 pr-1 animate-cursorBlink">
              {typed}
            </span>
          </h1>
          {typingIndex === typingText.length && (
            <p className="text-lg mt-2">
              Presiona{" "}
              <span
                onClick={handleStartClick}
                className="font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradientX cursor-pointer"
              >
                Enter
              </span>{" "}
              para iniciar la carga
            </p>
          )}
        </div>
      )}

      {/* Countdown */}
      {step === "countdown" && (
        <div className="z-10 flex flex-col items-center justify-center text-center p-8 bg-black/80 rounded-lg shadow-lg max-w-xs">
          {count > 0 ? (
            <span
              key={count}
              className="text-6xl md:text-9xl font-bold"
              style={{ animation: "zoomFade 0.8s ease forwards" }}
            >
              {count}
            </span>
          ) : (
            <div className="relative">
              <span className="text-3xl md:text-5xl font-extrabold text-yellow-300 animate-pulse bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                ¡Comenzamos!
              </span>
              <ConfettiEffect />
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes zoomFade {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.3); }
          100% { opacity: 0; transform: scale(1); }
        }
        @keyframes cursorBlink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #facc15; }
        }
        .animate-cursorBlink {
          animation: cursorBlink 1s steps(2, start) infinite;
        }
        @keyframes gradientX {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-gradientX {
          background-size: 200% auto;
          animation: gradientX 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

// Confetti sencillo con emojis o partículas
function ConfettiEffect() {
  useEffect(() => {
    const confettiIds = [];
    for(let i=0; i<30; i++){
      const span = document.createElement("span");
      span.textContent = "🎉";
      span.style.position = "fixed";
      span.style.left = `${Math.random()*100}vw`;
      span.style.top = `${Math.random()*-10}vh`;
      span.style.fontSize = `${10 + Math.random()*20}px`;
      span.style.opacity = Math.random();
      span.style.animation = `fall 3s linear forwards`;
      document.body.appendChild(span);
      confettiIds.push(span);
    }
    return () => {
      confettiIds.forEach(s => s.remove());
    };
  }, []);
  return null;
}
