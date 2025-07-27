import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const certificados = [
  {
    nombre: "Scrum esencial",
    autor: "Carlos Solís",
    duracion: "2 h 6 min",
    completado: "2/12/2023",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Windows Server 2016: Instalación y configuración",
    autor: "Santi Rofes",
    duracion: "3 h 1 min",
    completado: "11/4/2025",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Primeros pasos con Python",
    autor: "LinkedIn Learning",
    duracion: "11 h",
    completado: "23/1/2024",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Desafío de programación: Python",
    autor: "Ana María Pinto",
    duracion: "1 h 3 min",
    completado: "23/1/2024",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Python avanzado",
    autor: "Ana María Pinto",
    duracion: "3 h 1 min",
    completado: "23/1/2024",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Python esencial",
    autor: "Ana María Pinto",
    duracion: "2 h 28 min",
    completado: "23/1/2024",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Fundamentos de la programación: Más allá de lo básico",
    autor: "Sasha Vodnik y Natalia Corea",
    duracion: "2 h 42 min",
    completado: "23/1/2024",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Fundamentos esenciales de la programación",
    autor: "Gabriela García",
    duracion: "2 h 11 min",
    completado: "23/1/2024",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Cisco ICND1 Prep. Cert. 2",
    autor: "Andreu Adrover Llinás",
    duracion: "3 h",
    completado: "10/12/2023",
    plataforma: "LinkedIn",
  },
  {
    nombre: "Excel 2016 VBA esencial",
    autor: "José Manuel Pomares",
    duracion: "2 h 28 min",
    completado: "9/12/2023",
    plataforma: "LinkedIn",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Certificados() {
  const containerRef = useRef(null);
  const titulo = "Mis Certificados";
  const letras = titulo.split("");
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (visibleLetters < letras.length) {
      const timeout = setTimeout(() => {
        setVisibleLetters(visibleLetters + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters, letras.length]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen pt-20 md:pt-24 px-4 bg-transparent relative"
    >
      <div className="w-full max-w-6xl">
        <motion.h2
          className="text-center mb-12 font-extrabold text-transparent text-5xl md:text-6xl bg-clip-text from-blue-600 via-purple-600 to-pink-500 bg-gradient-to-r select-none cursor-pointer"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.12em" }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          whileHover="hover"
        >
          {letras.map((letra, idx) => {
            if (letra === " ") {
              return (
                <motion.span
                  key={idx}
                  style={{ display: "inline-block", width: "0.6em" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx < visibleLetters ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                >
                  &nbsp;
                </motion.span>
              );
            }
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: idx < visibleLetters ? 1 : 0, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                variants={{
                  hover: {
                    scale: 1.3,
                    rotateY: 15,
                    transition: { duration: 0.3, yoyo: Infinity, ease: "easeInOut" },
                    backgroundImage:
                      "linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80, #facc15, #f472b6, #3b82f6)",
                    backgroundSize: "600% 600%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradientMove 3s ease infinite",
                  },
                }}
                style={{ display: "inline-block" }}
              >
                {letra}
              </motion.span>
            );
          })}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in-delayed"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certificados.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-start justify-start text-left cursor-pointer hover:scale-105 hover:bg-white/90 transition-transform duration-300"
              variants={itemVariants}
            >
              <h3 className="text-blue-900 font-bold text-lg mb-1">{cert.nombre}</h3>
              <p className="text-sm text-gray-700 mb-1">Autor: {cert.autor}</p>
              <p className="text-sm text-gray-700 mb-1">Duración: {cert.duracion}</p>
              <p className="text-sm text-gray-700 mb-1">Completado: {cert.completado}</p>
              <p className="text-sm text-gray-500 italic">{cert.plataforma}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1.5s ease forwards;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
