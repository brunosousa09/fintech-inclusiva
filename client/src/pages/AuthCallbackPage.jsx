import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import StatusSpinner from '../components/StatusSpinner';

function AuthCallbackPage() {
  const { handleSocialLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const error = params.get('error');

    if (error) {
      console.error("Erro no login social:", error);
      alert("Houve um erro ao tentar fazer o login com a conta social.");
      navigate('/login');
    } else if (token) {
      handleSocialLogin(token);
    } else {
      navigate('/login');
    }
  }, [location, navigate, handleSocialLogin]);
  return (
    <StatusSpinner status="loading" message="Finalizando autenticação..." />
  );
}

export default AuthCallbackPage;