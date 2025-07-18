import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        logout();
      } else {
        setUser({ id: decoded.user_id, username: decoded.username });
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }
    setLoading(false);
  }, [token]);

  const login = async (username, password) => {
    const response = await api.post('/token/', { username, password });
    const { access } = response.data;
    localStorage.setItem('token', access);
    setToken(access);
    const decodedUser = jwtDecode(access);
    setUser({ id: decodedUser.user_id, username: decodedUser.username });
    api.defaults.headers.common['Authorization'] = `Bearer ${access}`;
    navigate('/dashboard');
  };
      const handleSocialLogin = (token) => {
        localStorage.setItem('token', token);
        setToken(token); 

        const decodedUser = jwtDecode(token);
        setUser({ id: decodedUser.user_id, username: decodedUser.username });

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        navigate('/dashboard'); 
    };

  const register = async (username, email, password) => {
    await api.post('/register/', { username, email, password });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
    navigate('/login');
  };

   const value = { user, token, login, register, logout, loading, handleSocialLogin };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { api };