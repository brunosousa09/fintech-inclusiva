import React from 'react';

export default function StatusSpinner({ status, message }) {
  const getStatusClasses = () => {
    switch (status) {
      case 'success':
        return 'stroke-green-400';
      case 'error':
        return 'stroke-red-500';
      default: // loading
        return 'stroke-url(#gradient)';
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            {/* --- ANIMAÇÃO CORRIGIDA AQUI --- */}
            <linearGradient id="gradient" gradientTransform="rotate(0)">
              <stop offset="0%" stopColor="#A78BFA" />   {/* Roxo */}
              <stop offset="50%" stopColor="#60A5FA" />  {/* Azul */}
              <stop offset="100%" stopColor="#A78BFA" /> {/* Roxo novamente para um loop suave */}
              
              {/* Esta tag anima a ROTAÇÃO do gradiente ao redor do centro do SVG */}
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="2s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          
          {/* Círculo de fundo (trilha) */}
          <circle
            className="stroke-slate-700"
            cx="50" cy="50" r="45"
            strokeWidth="5" fill="transparent"
          />
          
          {/* Círculo de progresso que será preenchido */}
          <circle
            className={`progress-circle ${getStatusClasses()}`}
            cx="50" cy="50" r="45"
            strokeWidth="5" fill="transparent"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />

          {/* Ícones de sucesso ou erro */}
          {status === 'success' && (
            <path
              className="status-icon stroke-green-400"
              d="M30 50 l15 15 l30 -30"
              strokeWidth="6" fill="transparent" strokeLinecap="round" strokeLinejoin="round"
            />
          )}
          {status === 'error' && (
            <g className="status-icon stroke-red-500" strokeWidth="6" strokeLinecap="round">
              <line x1="35" y1="35" x2="65" y2="65" />
              <line x1="65" y1="35" x2="35" y2="65" />
            </g>
          )}
        </svg>

        {/* Texto central */}
        {status === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-sm text-center">
              FinanTech<br/>Inclusiva
            </span>
          </div>
        )}
      </div>
      {message && <p className="text-white text-lg mt-4 font-semibold">{message}</p>}
    </div>
  );
}