const habilidades = [
  { nombre: "HTML", icono: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { nombre: "CSS", icono: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { nombre: "TailwindCSS", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
  { nombre: "JavaScript", icono: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { nombre: "React", icono: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { nombre: "Node.js", icono: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { nombre: "Python", icono: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { nombre: "C#", icono: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
  { nombre: "C++", icono: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
  { nombre: "Git", icono: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
  { nombre: "GitHub", icono: "https://cdn-icons-png.flaticon.com/512/733/733609.png" },
  { nombre: "Netlify", icono: "https://cdn.worldvectorlogo.com/logos/netlify.svg" },
  { nombre: "Firebase", icono: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
  { nombre: "Firestore", icono: "https://images.icon-icons.com/2107/PNG/512/file_type_firestore_icon_130604.png" },
  { nombre: "MongoDB", icono: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { nombre: "MySQL", icono: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
  { nombre: "SQL Server", icono: "https://cdn-icons-png.flaticon.com/512/5968/5968364.png" },
  { nombre: "Visual Studio Code", icono: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { nombre: "Visual Studio", icono: "https://c0.klipartz.com/pngpicture/190/711/gratis-png-microsoft-visual-studio-visual-framework-framework-microsoft-developer-network-asp-net-microsoft.png" },
  { nombre: "Vite", icono: "https://vitejs.dev/logo.svg" },
  { nombre: "Android Studio", icono: "https://cdn-icons-png.flaticon.com/512/226/226770.png" },
  { nombre: "Kotlin", icono: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
  { nombre: "VirtualBox", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/VirtualBox_2024_Logo.svg/1200px-VirtualBox_2024_Logo.svg.png" },
  { nombre: "Windows Server", icono: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  { nombre: "Diseños Responsivos", icono: "https://images.icon-icons.com/928/PNG/512/responsive-design_icon-icons.com_72187.png" },
  { nombre: "Control de versiones", icono: "https://cdn-icons-png.flaticon.com/512/6214/6214162.png" },
  { nombre: "Kanban", icono: "https://cdn-icons-png.flaticon.com/512/4990/4990760.png" },
  { nombre: "SharePoint", icono: "https://w7.pngwing.com/pngs/799/395/png-transparent-microsoft-sharepoint-logo-thumbnail.png" },
  { nombre: "Figma", icono: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
];

export default function Habilidades() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 md:pt-24 px-4 bg-transparent">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12 animate-fade-in">
          Mis Habilidades
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 animate-fade-in-delayed">
          {habilidades.map((hab, idx) => (
            <div
              key={idx}
              className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 hover:bg-white/90 cursor-pointer"
            >
              <img
                src={hab.icono}
                alt={hab.nombre}
                className="w-16 h-16 mb-4 object-contain"
                loading="lazy"
              />
              <p className="text-blue-900 font-semibold text-lg">{hab.nombre}</p>
            </div>
          ))}
        </div>
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
      `}</style>
    </div>
  );
}
