import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Cerrar menú al hacer clic fuera
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

  return (
    <>
      <header className="bg-white/10 backdrop-blur-md p-4 text-white fixed w-full top-0 left-0 z-50 h-16 md:h-20">
        <nav className="flex justify-between items-center h-full max-w-6xl mx-auto px-4">
          <h1 className="text-xl font-bold">MY PORTAFOLIO</h1>

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

          {/* Menú horizontal normal en pantallas grandes */}
          <ul className="hidden md:flex md:space-x-6">
            {["Bienvenida", "Habilidades", "Certificados", "Proyectos"].map(
              (item) => (
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
              )
            )}
          </ul>
        </nav>

        {/* Sidebar para móviles */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white/10 backdrop-blur-md p-6 transform transition-transform duration-300 z-40 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
          ref={menuRef}
        >
          <ul className="flex flex-col space-y-6 mt-20">
            {["Bienvenida", "Habilidades", "Certificados", "Proyectos"].map(
              (item) => (
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
              )
            )}
          </ul>
        </div>
      </header>

      {/* Espaciador para evitar que el header cubra contenido */}
      <div className="h-16 md:h-20" />
    </>
  );
}
