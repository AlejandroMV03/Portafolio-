import { useState, useEffect, useRef } from "react";
import { auth, db, provider } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  serverTimestamp,
  getCountFromServer,
} from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { FaStar } from "react-icons/fa";

const Estrellita = ({ compact = false, onClose, onVoted }) => {
  const [user, setUser] = useState(null);
  const [hasRated, setHasRated] = useState(false);
  const [stars, setStars] = useState(0);

  // Estados para animación
  const [animating, setAnimating] = useState(false);
  const [starStyle, setStarStyle] = useState({});
  const starRef = useRef(null);
  const buttonRef = useRef(null);

  const checkIfUserRated = async (uid) => {
    const docRef = doc(db, "estrellitas", uid);
    const docSnap = await getDoc(docRef);
    setHasRated(docSnap.exists());
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (u) {
        checkIfUserRated(u.uid);
      } else {
        setHasRated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchStarsCount = async () => {
    try {
      const coll = collection(db, "estrellitas");
      const snapshot = await getCountFromServer(coll);
      setStars(snapshot.data().count);
    } catch (error) {
      console.error("Error al obtener el conteo de estrellitas:", error);
    }
  };

  useEffect(() => {
    fetchStarsCount();
  }, []);

  const loginAndRate = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;
      setUser(loggedUser);
      await handleStar(loggedUser);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleStar = async (loggedUser) => {
    if (hasRated) {
      alert("¡Ya diste tu estrellita! ⭐");
      return;
    }

    try {
      // Iniciar animación estrella
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        // Suponemos que el contador está en el header con id "header-star-count"
        const target = document.getElementById("header-star-count");
        if (!target) {
          console.warn("No se encontró el contador para animación");
        }

        const targetRect = target?.getBoundingClientRect();

        if (targetRect) {
          setStarStyle({
            position: "fixed",
            left: buttonRect.left + buttonRect.width / 2,
            top: buttonRect.top + buttonRect.height / 2,
            fontSize: "2rem",
            color: "#facc15", // amarillo
            pointerEvents: "none",
            transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
            transform: "translate(0, 0) scale(1)",
            opacity: 1,
            zIndex: 9999,
          });
          setAnimating(true);

          // Después de un frame, ejecutamos la animación
          requestAnimationFrame(() => {
            const translateX = targetRect.left + targetRect.width / 2 - (buttonRect.left + buttonRect.width / 2);
            const translateY = targetRect.top + targetRect.height / 2 - (buttonRect.top + buttonRect.height / 2);
            setStarStyle((prev) => ({
              ...prev,
              transform: `translate(${translateX}px, ${translateY}px) scale(0.3)`,
              opacity: 0,
            }));
          });

          // Esperar a que termine animación para guardar en BD y actualizar UI
          setTimeout(async () => {
            await setDoc(doc(db, "estrellitas", loggedUser.uid), {
              name: loggedUser.displayName,
              voted: true,
              timestamp: serverTimestamp(),
            });
            setHasRated(true);
            setStars((prev) => prev + 1);

            setAnimating(false);
            setStarStyle({});

            if (onVoted) onVoted();
          }, 1000); // duración 1s para coincidir con la transición
          return;
        }
      }

      // Si no hay botón o contador para animar, solo guardamos directo:
      await setDoc(doc(db, "estrellitas", loggedUser.uid), {
        name: loggedUser.displayName,
        voted: true,
        timestamp: serverTimestamp(),
      });
      setHasRated(true);
      setStars((prev) => prev + 1);

      if (onVoted) {
        onVoted();
      }
    } catch (error) {
      console.error("Error al guardar la estrellita:", error);
    }
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1 select-none text-yellow-400 font-semibold cursor-pointer">
        <FaStar />
        <span>{stars}</span>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto relative">
        <h2 className="text-xl font-bold mb-4 text-center">¿Te gustó mi portafolio?</h2>
        <div className="flex items-center justify-center mb-4 gap-2">
          <FaStar className="text-yellow-400 text-3xl" />
          <span className="text-2xl font-semibold">{stars}</span>
        </div>

        {!user ? (
          <button
            onClick={loginAndRate}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Iniciar sesión con Google para dar estrellita
          </button>
        ) : hasRated ? (
          <p className="text-green-600 font-medium text-center">¡Gracias por tu estrella! 🌟</p>
        ) : (
          <button
            ref={buttonRef}
            onClick={() => handleStar(user)}
            className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition relative overflow-visible"
          >
            Dar estrellita ⭐
          </button>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full border border-gray-400 rounded py-2 hover:bg-gray-100 transition"
        >
          Cerrar
        </button>

        {/* Estrella animada */}
        {animating && (
          <FaStar style={starStyle} ref={starRef} />
        )}
      </div>
    </>
  );
};

export default Estrellita;
