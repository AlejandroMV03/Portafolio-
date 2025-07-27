import { motion } from "framer-motion";
import { useState } from "react";

const proyectos = [
  {
    titulo: "Park Amigo",
    descripcion: "Sistema completo de estacionamiento con aplicaciones móvil y de escritorio. Incluye versiones, ramas y actualizaciones frecuentes.",
    repositorio: "https://github.com/AlejandroMV03/Park-Amigo-V2.0.git",
    tipo: "Proyecto escolar",
    imagen: "/Image/park.png",
    deploy: null,
  },
  {
    titulo: "RRHH",
    descripcion: "Sistema de recursos humanos desarrollado como proyecto escolar.",
    repositorio: "https://github.com/AlejandroMV03/RRHH.git",
    tipo: "Proyecto escolar",
    imagen: "/Image/rrhh.png",
    deploy: null,
  },
  {
    titulo: "Todo con estilo",
    descripcion: "Tienda en línea de bolsos, perfumes y más. Proyecto creado para una persona que deseaba una tienda web.",
    repositorio: "https://github.com/AlejandroMV03/Todoconestilo2.git",
    tipo: "Proyecto personal",
    imagen: "/Image/todo.png",
    deploy: null,
  },
  {
    titulo: "DAM",
    descripcion: "Sitio web en progreso para una clienta enfocada en estética, cuidado de piel, maquillaje y uñas.",
    repositorio: null,
    tipo: "Proyecto personal",
    imagen: "/Image/dam.png",
    deploy: null,
  },
  {
    titulo: "CREAVIX",
    descripcion: "Sitio web para ofrecer servicios de diseño de sitios, blogs y tarjetas de presentación.",
    repositorio: null,
    tipo: "Proyecto personal",
    imagen: "/Image/Creavix.png",
    deploy: null,
  },
];

export default function Proyectos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-[56px] md:pt-[64px] px-4 bg-transparent">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto, idx) => (
          <motion.div
            key={idx}
            className="relative group perspective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="relative w-full h-80 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg">
                <img
                  src={proyecto.imagen}
                  alt={`Vista previa de ${proyecto.titulo}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white/90 rounded-xl p-6 flex flex-col justify-center text-center shadow-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-700 text-sm mb-2">{proyecto.descripcion}</p>
                <p className="text-blue-700 text-sm font-semibold mb-3">{proyecto.tipo}</p>

                {proyecto.repositorio && (
                  <a
                    href={proyecto.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Ver repositorio
                  </a>
                )}
                {proyecto.deploy && (
                  <a
                    href={proyecto.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 text-sm hover:underline mt-1"
                  >
                    Ver sitio web
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
