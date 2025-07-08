import { useState } from 'react';
import AuthCard from '../components/AuthCard';

function AuthPage() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    const { innerWidth: width, innerHeight: height } = window;

    // Fator de movimento - quão intenso será o efeito
    const factorX = 0.02;
    const factorY = 0.02;

    const moveX = (x - width / 2) * factorX;
    const moveY = (y - height / 2) * factorY;

    setStyle({ transform: `translate(${moveX}px, ${moveY}px)` });
  };

  return (
    <div
      className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-slate-900"
      onMouseMove={handleMouseMove}
    >
      {/* Camada de gradiente que se move */}
      <div
        style={style}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 transition-transform duration-500 ease-out"
      ></div>

      {/* Camada de "ruído" ou "estrelas" para dar profundidade (opcional) */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/noise.svg')] opacity-5"
        style={{
          transform: `translate(${-style.transform?.split('(')[1]?.split('px')[0] / 2 || 0}px, ${-style.transform?.split(',')[1]?.split('px')[0] / 2 || 0}px)`
        }}
      ></div>

      {/* O Cartão de Login fica em uma camada superior (z-index) */}
      <div className="z-10">
        <AuthCard />
      </div>
    </div>
  );
}

export default AuthPage;