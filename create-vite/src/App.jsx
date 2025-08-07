import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParticlesBackground from "./Components/ParticlesBackground";
import Header from "./Components/Header";
import Bienvenida from "./Pages/Bienvenida";
import Empresa from "./Pages/Certificados";
import Habilidades from "./Pages/Habilidades";
import Proyectos from "./Pages/Proyectos";
import SplashScreen from "./Pages/SplashScreen";
import Videoblogs from "./Pages/Videoblogs";
import Footer from "./Components/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleSplashFinish = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 1800);
  };

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Fondo partículas */}
        <div className="fixed inset-0 -z-10">
          <ParticlesBackground />
        </div>

        {/* SplashScreen */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-[1800ms] bg-transparent ${
            showSplash && !fadeOut
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
        </div>

        {/* Contenido principal con flex-grow */}
        <main
          className={`relative z-10 transition-opacity duration-[1800ms] flex-grow ${
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
        </main>

        {/* Footer */}
        <Footer />

        {/* Botón subir fijo arriba del footer */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-opacity"
            style={{ bottom: "5.5rem" }} // Ajusta según footer
          >
            ↑
          </button>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
