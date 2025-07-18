import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function AuthCallbackPage() {
  const { handleSocialLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Pega os parâmetros da URL
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const error = params.get('error');

    if (error) {
      console.error("Erro no login social:", error);
      alert("Houve um erro ao tentar fazer o login com a conta social.");
      navigate('/login');
    } else if (token) {
      // Se encontrou um token, chama a função do contexto para salvá-lo
      handleSocialLogin(token);
    } else {
      // Se não há token nem erro, volta para o login
      navigate('/login');
    }
  }, [location, navigate, handleSocialLogin]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-900 text-white">
      <p className="text-xl">Autenticando, por favor aguarde...</p>
    </div>
  );
}

export default AuthCallbackPage;