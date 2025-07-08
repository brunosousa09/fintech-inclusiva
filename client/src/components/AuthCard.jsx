import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function AuthCard() {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();
    const { login, register } = useContext(AuthContext);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleFlip = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(loginEmail, loginPassword);
            navigate('/dashboard');
        } catch (error) {
            console.error("Erro no login:", error);
            alert("Falha no login. Verifique suas credenciais.");
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(registerName, registerEmail, registerPassword);
            alert('Cadastro realizado com sucesso! Vire o cartão para fazer login.');
            setIsFlipped(false);
        } catch (error) {
            console.error("Erro no cadastro:", error);
            alert("Falha no cadastro. O e-mail já pode estar em uso.");
        }
    };

    const cardContainerClass = "absolute w-full h-full bg-slate-800/60 backdrop-blur-md rounded-xl p-8 shadow-2xl [backface-visibility:hidden] flex flex-col";
    const inputClass = "p-2 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-purple-400 text-white placeholder-slate-400 transition-colors";
    const linkClass = "font-semibold hover:underline transition-colors";
    
    return (
        <div className="w-[340px] h-[480px] [perspective:1200px]">
            <div
                className={`relative w-full h-full text-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
            >
                {/* ===== (LOGIN) ===== */}
                <div className={cardContainerClass}>
                    <h2 className="text-3xl font-bold text-white mb-8">Login</h2>
                    <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5 flex-grow">
                        <input value={loginEmail} onChange={e => setLoginEmail(e.target.value)} type="email" placeholder="Email" className={inputClass} required />
                        <input value={loginPassword} onChange={e => setLoginPassword(e.target.value)} type="password" placeholder="Senha" className={inputClass} required />
                        <button type="submit" className="w-full mt-auto p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                            Entrar
                        </button>
                    </form>
                    <p className="text-slate-400 text-sm mt-6">
                        Não tem uma conta?{' '}
                        <a href="#" onClick={handleFlip} className={`text-purple-400 ${linkClass}`}>
                            Cadastre-se
                        </a>
                    </p>
                </div>

                {/* ===== (CADASTRO) ===== */}
                <div className={`${cardContainerClass} [transform:rotateY(180deg)]`}>
                    <h2 className="text-3xl font-bold text-white mb-8">Cadastro</h2>
                    <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-5 flex-grow">
                        <input value={registerName} onChange={e => setRegisterName(e.target.value)} type="text" placeholder="Nome" className={inputClass} required />
                        <input value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} type="email" placeholder="Email" className={inputClass} required />
                        <input value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} type="password" placeholder="Senha" className={inputClass} required />
                        <button type="submit" className="w-full mt-auto p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg text-white font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                            Criar Conta
                        </button>
                    </form>
                    <p className="text-slate-400 text-sm mt-6">
                        Já tem uma conta?{' '}
                        <a href="#" onClick={handleFlip} className={`text-pink-400 ${linkClass}`}>
                            Faça Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}