import { motion } from "framer-motion";

const videos = [
  {
    titulo: "Explicación de Código sobre proyecto personal",
    descripcion:
      "Video donde explico paso a paso cómo desarrollé funcionalidades de Todo con Estilo. Esta es la parte del inicio del sitio web.",
    imagen: "/Image/video1.png",
    link: "https://drive.google.com/file/d/13yZ8-v6hkL3C-XBpl3Yetwr8psD5Cd1Y/view?usp=drive_link",
  },
  {
    titulo: "Explicación de Código (Avanzado)",
    descripcion:
      "Parte más avanzada de Todo con Estilo, explicando integración, animaciones y funcionalidades extra.",
    imagen: "/Image/video1.png",
    link: "https://drive.google.com/file/d/1uR6HvJ_scsQwydjZ2O8RFHFvyKUuzdbv/view?usp=drive_link",
  },
];

export default function Videoblogs() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16 px-4 bg-transparent">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Videoblogs Explicativos
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 w-full h-[480px] flex flex-col"
          >
            <div className="h-2/3 w-full">
              <img
                src={video.imagen}
                alt={`Vista previa de ${video.titulo}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-1/3 text-white overflow-y-auto">
              <h3 className="text-lg font-bold mb-2">{video.titulo}</h3>
              <p className="text-sm text-gray-300 mb-4">{video.descripcion}</p>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-cyan-400 hover:underline"
              >
                Ver video →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
