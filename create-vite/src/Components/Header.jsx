import { NavLink } from "react-router-dom";

export default function Header() {
  return (
   <header className="bg-white/10 backdrop-glass p-4 text-white fixed w-full top-0 left-0 z-50">
      <nav className="flex flex-col md:flex-row justify-around items-center">
        <h1 className="text-xl font-bold mb-4 md:mb-0">MY PORTAFOLIO</h1>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li>
            <NavLink
              to="/Bienvenida"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "text-white"
              }
            >
              Bienvenida
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Habilidades"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "text-white"
              }
            >
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Certificados"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "text-white"
              }
            >
              Certificados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Proyectos"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "text-white"
              }
            >
              Proyectos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

