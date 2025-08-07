import React, { useEffect, useState } from "react";

const SplashScreenB = ({ onFinish }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (onFinish) onFinish();
    }, 3000); // dura 3 segundos

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-3xl z-50">
      👋 Bienvenido de nuevo 👋
    </div>
  );
};

export default SplashScreenB;

