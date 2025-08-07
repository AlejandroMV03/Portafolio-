import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-gray-900 text-white pt-24 pb-10">
      {/* Curva SVG arriba */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none"
        style={{ height: "80px" }}
      >
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="#1f2937"
            d="M0,80 C480,0 960,0 1440,80 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Contenido dentro del footer */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-12 px-6 text-sm sm:text-base relative z-10">
        {/* Izquierda: Contacto (vertical) */}
        <div className="flex flex-col gap-6 min-w-[240px]">
          <a
            href="mailto:alejandromexvillacisigs@gmail.com"
            className="flex items-center gap-3 hover:text-yellow-400 transition text-base"
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

          <a
            href="https://www.linkedin.com/in/cristian-alejandro-mex-villacis-547840294"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition text-base"
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

          <a
            href="https://github.com/AlejandroMV03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gray-400 transition text-base"
            aria-label="GitHub de Cristian"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.58 0-.287-.011-1.244-.017-2.255-3.338.726-4.042-1.613-4.042-1.613-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.809 1.303 3.495.996.107-.775.419-1.303.762-1.602-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.183 0 0 1.008-.322 3.3 1.23a11.513 11.513 0 013.006-.404c1.02.005 2.047.137 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.656.243 2.88.119 3.183.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.289 0 .321.192.694.8.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>

        {/* Centro: Navegación (vertical y centrada) */}
        <nav className="flex flex-col items-center gap-6 text-base font-serif font-semibold text-gray-200 tracking-wide">
          <Link
            to="/Bienvenida"
            className="hover:text-yellow-400 transition"
            aria-label="Ir a Bienvenida"
          >
            Bienvenida
          </Link>
          <Link
            to="/Habilidades"
            className="hover:text-yellow-400 transition"
            aria-label="Ir a Habilidades"
          >
            Habilidades
          </Link>
          <Link
            to="/Certificados"
            className="hover:text-yellow-400 transition"
            aria-label="Ir a Certificados"
          >
            Certificados
          </Link>
          <Link
            to="/Proyectos"
            className="hover:text-yellow-400 transition"
            aria-label="Ir a Proyectos"
          >
            Proyectos
          </Link>
          <Link
            to="/Videoblogs"
            className="hover:text-yellow-400 transition"
            aria-label="Ir a Videoblogs"
          >
            Videoblogs
          </Link>
        </nav>

        {/* Derecha: Frase y año */}
        <div className="flex flex-col items-center gap-3 text-center min-w-[280px] text-gray-400 text-sm sm:text-base">
          <p className="text-yellow-400 text-lg sm:text-xl font-semibold italic max-w-[320px] leading-snug">
            "Si puedes imaginarlo, <br /> puedes programarlo."
            <br />
            <span className="text-xs text-gray-300 mt-1 font-normal not-italic">
              — Alan Kay (Pionero en programación orientada a objetos)
            </span>
          </p>
          <div>© {year} Cristian Mex</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
