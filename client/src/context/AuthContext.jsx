import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import StatusSpinner from '../components/StatusSpinner'; 

export const AuthContext = createContext();

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState({ status: 'idle', message: '' });
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
    navigate('/login');
  };

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        logout();
      } else {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }
    setLoading(false);
  }, [token]);

  const fetchAndSetUser = async (authToken) => {
    try {
      const response = await api.get('/users/me/', {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      setUser({ id: response.data.id, username: response.data.username });
    } catch (error) {
      console.error("Falha ao buscar dados do usuário", error);
      logout(); 
    }
  };

  const login = async (username, password) => {
    setAuthStatus({ status: 'loading', message: 'Verificando credenciais...' });
    try {
      const response = await api.post('/token/', { username, password });
      const { access: token } = response.data;
      
      await fetchAndSetUser(token); 

      setAuthStatus({ status: 'success', message: 'Login bem-sucedido!' });
      
      setTimeout(() => {
        localStorage.setItem('token', token);
        setToken(token); 
        navigate('/dashboard');
        setAuthStatus({ status: 'idle', message: '' });
      }, 1500);
    } catch (error) {
      console.error("Erro no login:", error);
      setAuthStatus({ status: 'error', message: 'Falha no login.' });
      setTimeout(() => setAuthStatus({ status: 'idle', message: '' }), 2000);
      throw error;
    }
  };
  
  const handleSocialLogin = (token) => {
    setAuthStatus({ status: 'loading', message: 'Finalizando autenticação...'});
    fetchAndSetUser(token).then(() => {
        setAuthStatus({ status: 'success', message: 'Autenticado com sucesso!' });
        setTimeout(() => {
            localStorage.setItem('token', token);
            setToken(token);
            navigate('/dashboard');
            setAuthStatus({ status: 'idle', message: '' });
        }, 1500);
    });
  };
  const register = async (username, email, password) => {
    setAuthStatus({ status: 'loading', message: 'Criando sua conta...' });
    try {
      await api.post('/register/', { username, email, password });
      await login(username, password);

    } catch (error) {
      console.error("Erro no cadastro:", error);
      setAuthStatus({ status: 'error', message: 'Falha no cadastro.' });
      setTimeout(() => setAuthStatus({ status: 'idle', message: '' }), 2000);
      throw error;
    }
  };

  const value = { user, token, login, register, logout, loading, handleSocialLogin, authStatus };

  return (
    <AuthContext.Provider value={value}>
      {authStatus.status !== 'idle' && <StatusSpinner status={authStatus.status} message={authStatus.message} />}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { api };