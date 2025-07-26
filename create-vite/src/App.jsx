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
  const [showContent, setShowContent] = useState(false);

  const handleSplashFinish = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowSplash(false);
      setShowContent(true);
    }, 700); // 700ms para la transición
  };

  return (
    <BrowserRouter>
      {showSplash ? (
        <div
          className={`transition-opacity duration-700 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <SplashScreen onFinish={handleSplashFinish} />
        </div>
      ) : (
        <div
          className={`transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <ParticlesBackground />
          <Header />
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/Bienvenida" element={<Bienvenida />} />
            <Route path="/Habilidades" element={<Habilidades />} />
            <Route path="/Certificados" element={<Empresa />} />
            <Route path="/Proyectos" element={<Proyectos />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;