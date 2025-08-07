import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Estrellita from "./Estrellita";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "./firebase";
import { FaStar } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const menuRef = useRef();

  const links = ["Bienvenida", "Habilidades", "Certificados", "Proyectos", "Videoblogs"];

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

  const fetchStarsCount = async () => {
    try {
      const coll = collection(db, "estrellitas");
      const snapshot = await getCountFromServer(coll);
      setStarsCount(snapshot.data().count);
    } catch (error) {
      console.error("Error al obtener el conteo de estrellitas:", error);
    }
  };

  useEffect(() => {
    fetchStarsCount();
  }, [modalOpen]);

  const recargarPagina = () => {
    window.location.reload();
  };

  return (
    <>
      <header className="bg-gray-800 md:bg-white/10 md:backdrop-blur-md p-4 text-white fixed w-full top-0 left-0 z-50 h-16 md:h-20">
        <nav className="flex justify-between items-center h-full max-w-6xl mx-auto px-4">
          <button
            onClick={recargarPagina}
            className="text-xl font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Recargar página"
          >
            MY PORTAFOLIO
          </button>

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

          <ul className="hidden md:flex md:space-x-6 items-center">
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

            <li>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300 ease-in-out"
              >
                Dar estrellita <FaStar className="text-yellow-600" />
              </button>
            </li>

            <li
              id="header-star-count"
              className="flex items-center gap-1 ml-4 text-yellow-400 font-semibold text-lg select-none"
            >
              <FaStar />
              <span>{starsCount}</span>
            </li>
          </ul>
        </nav>

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

            <li>
              <button
                onClick={() => {
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300 ease-in-out"
              >
                Dar estrellita <FaStar className="text-yellow-600" />
              </button>
            </li>

            <li className="flex items-center gap-1 text-yellow-400 font-semibold text-lg select-none">
              <FaStar />
              <span>{starsCount}</span>
            </li>
          </ul>
        </div>
      </header>

      <div className="h-16 md:h-20" />

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Estrellita onClose={() => setModalOpen(false)} onVoted={fetchStarsCount} />
        </div>
      )}
    </>
  );
}
