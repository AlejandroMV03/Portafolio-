import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const habilidades = [
  { nombre: "HTML", icono: "https://cdn-icons-png.flaticon.com/512/732/732212.png", descripcion: "Lenguaje básico para estructurar contenido en la web.", nivel: 65 },
  { nombre: "CSS", icono: "https://cdn-icons-png.flaticon.com/512/732/732190.png", descripcion: "Lenguajes para diseñar visualmente páginas web.", nivel: 70 },
  { nombre: "TailwindCSS", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png", descripcion: "Framework CSS para estilos utilitarios y rápidos.", nivel: 80 },
  { nombre: "JavaScript", icono: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", descripcion: "Lenguaje de programación para hacer webs dinámicas.", nivel: 50 },
  { nombre: "React", icono: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", descripcion: "Librería JS para construir interfaces de usuario.", nivel: 65 },
  { nombre: "Node.js", icono: "https://cdn-icons-png.flaticon.com/512/919/919825.png", descripcion: "Entorno para ejecutar JavaScript en el servidor.", nivel: 40 },
  { nombre: "Python", icono: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", descripcion: "Lenguaje de programación multipropósito.", nivel: 60 },
  { nombre: "C#", icono: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", descripcion: "Lenguaje orientado a objetos usado en .NET.", nivel: 70 },
  { nombre: "C++", icono: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png", descripcion: "Lenguaje de programación potente y rápido.", nivel: 70 },
  { nombre: "Git", icono: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png", descripcion: "Sistema de control de versiones distribuido.", nivel: 70 },
  { nombre: "GitHub", icono: "https://cdn-icons-png.flaticon.com/512/733/733609.png", descripcion: "Plataforma para alojar repositorios Git.", nivel: 75 },
  { nombre: "Netlify", icono: "https://cdn.worldvectorlogo.com/logos/netlify.svg", descripcion: "Plataforma para desplegar sitios web modernos.", nivel: 80 },
  { nombre: "Firebase", icono: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg", descripcion: "Plataforma para backend y servicios en la nube.", nivel: 75 },
  { nombre: "Firestore", icono: "https://images.icon-icons.com/2107/PNG/512/file_type_firestore_icon_130604.png", descripcion: "Base de datos NoSQL en tiempo real de Firebase.", nivel: 70 },
  { nombre: "MongoDB", icono: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", descripcion: "Base de datos NoSQL orientada a documentos.", nivel: 60 },
  { nombre: "MySQL", icono: "https://cdn-icons-png.flaticon.com/512/919/919836.png", descripcion: "Base de datos relacional muy popular.", nivel: 60 },
  { nombre: "SQL Server", icono: "https://cdn-icons-png.flaticon.com/512/5968/5968364.png", descripcion: "Sistema de gestión de bases de datos de Microsoft.", nivel: 65 },
  { nombre: "Visual Studio Code", icono: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", descripcion: "Editor de código fuente liviano y potente.", nivel: 90 },
  { nombre: "Visual Studio", icono: "https://c0.klipartz.com/pngpicture/190/711/gratis-png-microsoft-visual-studio-visual-framework-framework-microsoft-developer-network-asp-net-microsoft.png", descripcion: "IDE completo para desarrollo en múltiples lenguajes.", nivel: 80 },
  { nombre: "Vite", icono: "https://vitejs.dev/logo.svg", descripcion: "Herramienta de build rápido para proyectos web modernos.", nivel: 70 },
  { nombre: "Android Studio", icono: "https://cdn-icons-png.flaticon.com/512/226/226770.png", descripcion: "IDE oficial para desarrollo Android.", nivel: 75 },
  { nombre: "Kotlin", icono: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png", descripcion: "Lenguaje moderno para desarrollo Android y más.", nivel: 70 },
  { nombre: "VirtualBox", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/VirtualBox_2024_Logo.svg/1200px-VirtualBox_2024_Logo.svg.png", descripcion: "Software para virtualización de sistemas operativos.", nivel: 45 },
  { nombre: "Windows Server", icono: "https://cdn-icons-png.flaticon.com/512/732/732221.png", descripcion: "Sistema operativo servidor de Microsoft.", nivel: 45 },
  { nombre: "Diseños Responsivos", icono: "https://images.icon-icons.com/928/PNG/512/responsive-design_icon-icons.com_72187.png", descripcion: "Diseño que adapta contenido a diferentes pantallas.", nivel: 80 },
  { nombre: "Control de versiones", icono: "https://cdn-icons-png.flaticon.com/512/6214/6214162.png", descripcion: "Manejo de cambios en proyectos y código.", nivel: 80 },
  { nombre: "Kanban", icono: "https://cdn-icons-png.flaticon.com/512/4990/4990760.png", descripcion: "Método ágil para gestión visual de tareas.", nivel: 85 },
  { nombre: "SharePoint", icono: "https://w7.pngwing.com/pngs/799/395/png-transparent-microsoft-sharepoint-logo-thumbnail.png", descripcion: "Plataforma para colaboración y gestión documental.", nivel: 70 },
  { nombre: "Figma", icono: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", descripcion: "Herramienta de diseño y prototipado UI/UX.", nivel: 80 },
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

export default function Habilidades() {
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });

  const titulo = "Mis Habilidades";
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

  function mostrarTooltip(e, texto) {
    if (!containerRef.current) return;

    const contRect = containerRef.current.getBoundingClientRect();
    const elemRect = e.currentTarget.getBoundingClientRect();

    const x = elemRect.left - contRect.left + elemRect.width / 2;
    const y = elemRect.top - contRect.top - 10;

    setTooltip({
      visible: true,
      text: texto,
      x,
      y,
    });
  }

  function ocultarTooltip() {
    setTooltip((t) => ({ ...t, visible: false }));
  }

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
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
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
                initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
                animate={{ opacity: idx < visibleLetters ? 1 : 0, scale: 1, rotateY: 0 }}
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
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 animate-fade-in-delayed"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {habilidades.map((hab, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer relative
                         hover:scale-105 hover:bg-white/90 transition-transform duration-300"
              variants={itemVariants}
              onMouseEnter={(e) => mostrarTooltip(e, hab.descripcion)}
              onMouseLeave={ocultarTooltip}
            >
              <img
                src={hab.icono}
                alt={hab.nombre}
                className="w-16 h-16 mb-2 object-contain"
                loading="lazy"
              />
              <p className="text-blue-900 font-semibold text-lg mb-2">{hab.nombre}</p>

              <div className="w-full bg-gray-300 rounded-full h-2">
                <motion.div
                  className="bg-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${hab.nivel}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {tooltip.visible && (
          <div
            className="absolute z-50 max-w-xs p-2 bg-gray-800 text-white text-sm rounded shadow-lg pointer-events-none"
            style={{
              top: tooltip.y,
              left: tooltip.x,
              transform: "translate(-50%, -100%)",
              whiteSpace: "normal",
            }}
          >
            {tooltip.text}
          </div>
        )}
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

        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
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
