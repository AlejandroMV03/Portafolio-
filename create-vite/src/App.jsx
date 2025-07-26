import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParticlesBackground from "./Components/ParticlesBackground";
import Header from "./Components/Header";
import Bienvenida from "./Pages/Bienvenida";
import Empresa from "./Pages/Certificados";
import Habilidades from "./Pages/Habilidades";
import Proyectos from "./Pages/Proyectos";
import SplashScreen from "./Pages/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSplashFinish = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 1800); // transición muy suave (1.8s)
  };

  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden">
        {/* Fondo de partículas SIEMPRE presente y fijo */}
        <div className="fixed inset-0 -z-10">
          <ParticlesBackground />
        </div>

        {/* SplashScreen cubre todo, pero solo cambia opacidad */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-[1800ms] bg-transparent ${
            showSplash && !fadeOut ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
        </div>

        {/* Contenido principal, fade-in después del splash */}
        <div
          className={`relative z-10 transition-opacity duration-[1800ms] ${
            showSplash && !fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/Bienvenida" element={<Bienvenida />} />
            <Route path="/Habilidades" element={<Habilidades />} />
            <Route path="/Certificados" element={<Empresa />} />
            <Route path="/Proyectos" element={<Proyectos />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;