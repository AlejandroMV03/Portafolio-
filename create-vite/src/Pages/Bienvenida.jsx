export default function Bienvenida() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
        {/* Columna izquierda: Bienvenida y Sobre mí */}
        <div className="flex flex-col flex-1 gap-6">
          {/* Card 1: Bienvenida */}
          <div className="bg-white/80 rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-900 cursor-pointer 
              animate-fade-in
              hover:text-yellow-500 hover:scale-105 transition duration-300 ease-in-out"
            >
              ¡Bienvenido a mi portafolio!
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed animate-fade-in delay-200">
              En este espacio podrás conocer parte de mi trayectoria estudiantil, donde comparto mis habilidades técnicas, los certificados que he obtenido, 
              así como los proyectos que he desarrollado tanto en la escuela como de forma personal. 
              Mi objetivo es mostrarte mi crecimiento profesional y las competencias que he adquirido a lo largo de mi carrera.
            </p>
          </div>

          {/* Card 2: Sobre mí */}
          <div className="bg-white/80 rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3 text-blue-900 cursor-pointer 
              animate-fade-in delay-400
              hover:text-yellow-500 hover:scale-105 transition duration-300 ease-in-out"
            >
              Sobre mí
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed animate-fade-in delay-600">
              Mi nombre es <span className="font-semibold">Cristian Alejandro Mex Villacis</span>. 
              Actualmente estudio Ingeniería en Software y Sistemas Computacionales en la <span className="font-semibold">UNID</span>, 
              y estoy cursando el sexto cuatrimestre. 
              Me apasiona el desarrollo de software y siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades para crecer profesionalmente.
            </p>
          </div>
        </div>

        {/* Columna derecha: Foto */}
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-center">
            <img
              src="Image/IMG_4733.jpg"
              alt="Foto de Cristian Alejandro Mex Villacis"
              className="w-36 h-36 rounded-full mb-4 border-4 border-blue-900 object-cover animate-fade-in delay-800"
            />
            <p className="text-blue-900 font-semibold text-lg animate-fade-in delay-1000">
              Cristian Alejandro Mex Villacis
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
