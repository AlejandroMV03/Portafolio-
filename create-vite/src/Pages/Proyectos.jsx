import { motion } from "framer-motion";

const proyectos = [
  {
    titulo: "Park Amigo",
    descripcion:
      "Sistema completo de estacionamiento con aplicaciones móvil y de escritorio. Incluye versiones, ramas y actualizaciones frecuentes.",
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
    deploy: "https://alejandromex2.netlify.app/",
  },
  {
    titulo: "Todo con estilo",
    descripcion:
      "Tienda en línea de bolsos, perfumes y más. Proyecto creado para una persona que deseaba una tienda web.",
    repositorio: "https://github.com/AlejandroMV03/Todoconestilo2.git",
    tipo: "Proyecto personal",
    imagen: "/Image/todo.png",
    deploy: "https://todoconestilo.netlify.app/",
  },
  {
    titulo: "DAM",
    descripcion:
      "Sitio web en progreso para una clienta enfocada en estética, cuidado de piel, maquillaje y uñas.",
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
  {
    titulo: "Chatbot",
    descripcion:
      "Chatbot creado para la empresa Top Mexico Real Estate, encargada de bienes raíces. Implementa IA para ayudar a encontrar una casa según tu presupuesto, lugar y necesidades.",
    repositorio: null,
    tipo: "Proyecto personal",
    imagen: "/Image/topreal.png", // pon la imagen que quieras aquí
    deploy: "https://topmexicorealestate.netlify.app/",
  },
];

export default function Proyectos() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16 px-4 bg-transparent">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Mis Proyectos
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {proyectos.map((proyecto, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 w-full h-[520px] flex flex-col"
          >
            <div className="h-[58%] w-full">
              <img
                src={proyecto.imagen}
                alt={`Vista previa de ${proyecto.titulo}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-[42%] text-white overflow-y-auto">
              <div>
                <h3 className="text-lg font-bold mb-1">{proyecto.titulo}</h3>
                <p className="text-sm text-gray-300 mb-2">{proyecto.descripcion}</p>
                <p className="text-sm text-yellow-300 mb-2">{proyecto.tipo}</p>
              </div>

              <div className="space-y-1 text-sm mt-2">
                {proyecto.repositorio && (
                  <a
                    href={proyecto.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline block"
                  >
                    Ver repositorio →
                  </a>
                )}
                {proyecto.deploy && (
                  <a
                    href={proyecto.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline block"
                  >
                    Ver sitio web →
                  </a>
                )}
                {proyecto.titulo === "RRHH" && (
                  <span className="text-xs text-gray-300 font-semibold">AUTH</span>
                )}
                {proyecto.titulo === "Todo con estilo" && (
                  <span className="text-xs text-gray-300 font-semibold">CRUD</span>
                )}
                {proyecto.titulo === "Chatbot" && (
                  <span className="text-xs text-gray-300 font-semibold">RETO</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
