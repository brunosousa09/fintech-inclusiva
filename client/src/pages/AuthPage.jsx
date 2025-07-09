import { useState } from 'react';
import AuthCard from '../components/AuthCard';
import BrandInfo from '../components/BrandInfo';

function AuthPage() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) {
      setStyle({});
      return;
    }
    const { clientX: x, clientY: y } = e;
    const { innerWidth: width, innerHeight: height } = window;
    const factorX = 0.05;
    const factorY = 0.05;
    const moveX = (x - width / 2) * factorX;
    const moveY = (y - height / 2) * factorY;
    setStyle({ transform: `translate(${moveX}px, ${moveY}px)` });
  };

  return (
    <main
      className="relative w-full min-h-screen overflow-hidden bg-slate-900 font-sans p-4"
      onMouseMove={handleMouseMove}
    >
      
      <div style={style} className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 transition-transform duration-500 ease-out"></div>
      <div className="absolute inset-0 w-full h-full bg-[url('/noise.svg')] opacity-5" style={{ transform: `translate(${-style.transform?.split('(')[1]?.split('px')[0] / 2 || 0}px, ${-style.transform?.split(',')[1]?.split('px')[0] / 2 || 0}px)` }}></div>
      
      {/* --- ALTERAÇÕES DE RESPONSIVIDADE AQUI --- */}
      {/* - Por padrão (mobile), usamos 'flex-col'.
        - Em telas médias ('md:') ou maiores, mudamos para 'flex-row'.
        - Ajustamos os espaçamentos ('gap') para cada tamanho de tela.
      */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8 md:flex-row md:gap-16">
        <div className="w-full max-w-md md:w-1/2 flex justify-center md:justify-end">
            <BrandInfo />
        </div>
        <div className="w-full max-w-md md:w-1/2 flex justify-center md:justify-start">
            <AuthCard />
        </div>
      </div>
    </main>
  );
}

export default AuthPage;