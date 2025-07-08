import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function DashboardPage() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-900 text-white">
            <h1 className="text-4xl mb-4">Bem-vindo, {user?.name || user?.email}!</h1>
            <p className="text-lg text-slate-300">Este é o seu dashboard. Em breve, muitas funcionalidades aqui.</p>
            <button onClick={logout} className="mt-8 px-6 py-2 bg-red-500 rounded-lg font-bold hover:bg-red-600 transition-colors">
                Sair
            </button>
        </div>
    );
}

export default DashboardPage;