import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState((localStorage.getItem("token")));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser({id: decodedToken.id, email: decodedToken.email});
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        setLoading(false);
    }, [token]);

    const login = async (email, password) => {
        const response = await api.post("/auth/login", { email, password });
        const { token: newToken } = response.data;
        localStorage.setItem("token", newToken);
        setToken(newToken);
        setUser(user)
        api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        };
        const logout = () => {
            localStorage.removeItem("token");
            setToken(null);
            setUser(null);
            delete api.defaults.headers.common["Authorization"];
        }
        return (
            <AuthContext.Provider value={{ user, token, loading, login, logout }}>
                {!loading && children}
            </AuthContext.Provider>
        );
    }