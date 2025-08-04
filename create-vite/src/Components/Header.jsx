import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const links = ["Bienvenida", "Habilidades", "Certificados", "Proyectos", "Videoblogs"];

  // Función para recargar la página
  const recargarPagina = () => {
    window.location.reload();
  };

  return (
    <>
      <header className="bg-gray-800 md:bg-white/10 md:backdrop-blur-md p-4 text-white fixed w-full top-0 left-0 z-50 h-16 md:h-20">
        <nav className="flex justify-between items-center h-full max-w-6xl mx-auto px-4">
          {/* Aquí el título convertido en botón para recargar */}
          <button
            onClick={recargarPagina}
            className="text-xl font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Recargar página"
          >
            MY PORTAFOLIO
          </button>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1 z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

          {/* Menú horizontal (pantallas grandes) */}
          <ul className="hidden md:flex md:space-x-6">
            {links.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300" : "text-white"
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar (pantallas pequeñas) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-6 transform transition-transform duration-300 z-40 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
          ref={menuRef}
        >
          <ul className="flex flex-col space-y-6 mt-20">
            {links.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300" : "text-white"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Espaciador para que el contenido no quede debajo del header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
