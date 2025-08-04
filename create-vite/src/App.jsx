import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParticlesBackground from "./Components/ParticlesBackground";
import Header from "./Components/Header";
import Bienvenida from "./Pages/Bienvenida";
import Empresa from "./Pages/Certificados";
import Habilidades from "./Pages/Habilidades";
import Proyectos from "./Pages/Proyectos";
import SplashScreen from "./Pages/SplashScreen";
import Videoblogs from "./Pages/Videoblogs";


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
      <div className="relative min-h-screen overflow-hidden pb-24">
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
            <Route path="/Videoblogs" element={<Videoblogs />} />
          </Routes>
        </div>

        {/* Footer fijo con contactos */}
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-center items-center gap-8 z-50">
          {/* Correo */}
          <a
            href="mailto:alejandromexvillacisigs@gmail.com"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
            aria-label="Enviar correo a alejandromexvillacisigs@gmail.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8z"
              />
            </svg>
            alejandromexvillacisigs@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/cristian-alejandro-mex-villacis-547840294"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
            aria-label="Perfil LinkedIn de Cristian Alejandro Mex Villacis"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.79-1.75-1.75S5.03 6.2 6 6.2s1.75.79 1.75 1.75S6.97 8.7 6 8.7zm13 10.3h-3v-4.8c0-1.14-.02-2.6-1.59-2.6-1.6 0-1.84 1.25-1.84 2.53v4.87h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z" />
            </svg>
            Cristian Alejandro Mex Villacis
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
