import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const EyeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeSlashIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.758 9.758" />
  </svg>
);

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,34.556,44,29.865,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);


export default function AuthCard() {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); 


    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);


    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);

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

    // A função de registro será reativada quando o backend estiver pronto
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        alert('Funcionalidade de registro em desenvolvimento!');
        // try {
        //     await register(registerName, registerEmail, registerPassword);
        //     alert('Cadastro realizado com sucesso! Vire o cartão para fazer login.');
        //     setIsFlipped(false);
        // } catch (error) {
        //     console.error("Erro no cadastro:", error);
        //     alert("Falha no cadastro. O e-mail já pode estar em uso.");
        // }
    };

    const cardContainerClass = "absolute w-full h-full bg-slate-800/60 backdrop-blur-md rounded-xl p-8 shadow-2xl [backface-visibility:hidden] flex flex-col";
    const inputClass = "p-2 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-purple-400 text-white placeholder-slate-400 transition-colors w-full";
    const linkClass = "font-semibold hover:underline transition-colors";
    
    return (
        <div className="w-[340px] h-[520px] [perspective:1200px]"> 
            <div
                className={`relative w-full h-full text-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
            >
                {/* ===== (LOGIN) ===== */}
                <div className={cardContainerClass}>
                    <h2 className="text-3xl font-bold text-white mb-6">Login</h2>
                    <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5 flex-grow">
                        <input value={loginEmail} onChange={e => setLoginEmail(e.target.value)} type="email" placeholder="Email" className={inputClass} required />
                        <div className="relative w-full">
                            <input value={loginPassword} onChange={e => setLoginPassword(e.target.value)} type={showLoginPassword ? 'text' : 'password'} placeholder="Senha" className={inputClass} required />
                            <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute top-1/2 right-2 -translate-y-1/2 text-slate-400 hover:text-white">
                                {showLoginPassword ? <EyeSlashIcon className="w-5 h-5"/> : <EyeIcon className="w-5 h-5"/>}
                            </button>
                        </div>
                        <button type="submit" className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                            Entrar
                        </button>
                    </form>
                    

                    <div className="flex items-center gap-4 my-4">
                        <hr className="w-full border-slate-600"/>
                        <span className="text-slate-400 text-sm">OU</span>
                        <hr className="w-full border-slate-600"/>
                    </div>
                    <a href="http://localhost:3001/api/auth/google" className="w-full p-3 flex items-center justify-center gap-3 bg-slate-700 rounded-lg text-white font-semibold hover:bg-slate-600 transition-colors">
                        <GoogleIcon />
                        Entrar com o Google
                    </a>

                    <p className="text-slate-400 text-sm mt-6">
                        Não tem uma conta?{' '}
                        <a href="#" onClick={handleFlip} className={`text-purple-400 ${linkClass}`}>
                            Cadastre-se
                        </a>
                    </p>
                </div>

                {/* ===== (CADASTRO) ===== */}
                <div className={`${cardContainerClass} [transform:rotateY(180deg)]`}>
                    <h2 className="text-3xl font-bold text-white mb-6">Cadastro</h2>
                    <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-5 flex-grow">
                        <input value={registerName} onChange={e => setRegisterName(e.target.value)} type="text" placeholder="Nome" className={inputClass} required />
                        <input value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} type="email" placeholder="Email" className={inputClass} required />
                        <div className="relative w-full">
                            <input value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} type={showRegisterPassword ? 'text' : 'password'} placeholder="Senha" className={inputClass} required />
                            <button type="button" onClick={() => setShowRegisterPassword(!showRegisterPassword)} className="absolute top-1/2 right-2 -translate-y-1/2 text-slate-400 hover:text-white">
                                {showRegisterPassword ? <EyeSlashIcon className="w-5 h-5"/> : <EyeIcon className="w-5 h-5"/>}
                            </button>
                        </div>
                        <button type="submit" className="w-full p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg text-white font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                            Criar Conta
                        </button>
                    </form>

                    <div className="flex items-center gap-4 my-2">
                        <hr className="w-full border-slate-600"/>
                        <span className="text-slate-400 text-sm">OU</span>
                        <hr className="w-full border-slate-600"/>
                    </div>
                    
                    <a href="http://localhost:3001/api/auth/google" className="w-full p-3 flex items-center justify-center gap-3 bg-slate-700 rounded-lg text-white font-semibold hover:bg-slate-600 transition-colors">
                        <GoogleIcon />
                        Cadastrar com o Google
                    </a>

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