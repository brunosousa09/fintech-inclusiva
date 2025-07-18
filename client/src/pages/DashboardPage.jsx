import React, { useState, useEffect, useContext } from 'react';
import { AuthContext, api } from '../context/AuthContext'; 

const DashboardHeader = ({ user, logout }) => (
    <header className="bg-slate-800/50 p-4 flex justify-between items-center shadow-md sticky top-0 backdrop-blur-md">
        <div>
            <h1 className="text-xl font-bold text-white">FinanTech</h1>
            <p className="text-sm text-slate-400">Bem-vindo, {user.username}!</p>
        </div>
        <button onClick={logout} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
            Sair
        </button>
    </header>
);

function DashboardPage() {
    const { user, logout } = useContext(AuthContext);
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error("Token não encontrado.");
                }
                const response = await api.get('/transactions/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                setTransactions(response.data); 
            } catch (err) {
                console.error("Erro ao buscar transações:", err);
                setError("Não foi possível carregar as transações. Tente novamente mais tarde.");
            } finally {
                setIsLoading(false); 
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="w-full min-h-screen bg-slate-900 font-sans text-white">
            <DashboardHeader user={user} logout={logout} />
            
            <main className="p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Suas Transações</h2>
                
                <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
                    {isLoading && <p>Carregando transações...</p>}
                    
                    {!isLoading && error && <p className="text-red-400">{error}</p>}

                    {!isLoading && !error && transactions.length === 0 && (
                        <p className="text-slate-400 text-center py-8">Nenhuma transação encontrada. Adicione uma para começar!</p>
                    )}
                    {!isLoading && !error && transactions.length > 0 && (
                        <ul className="space-y-4">
                            {transactions.map(t => (
                                <li key={t.id} className="flex justify-between items-center bg-slate-700/50 p-4 rounded-md">
                                    <div>
                                        <p className="font-bold text-lg">{t.title}</p>
                                        <p className="text-sm text-slate-400">{t.category}</p>
                                    </div>
                                    <p className={`text-lg font-bold ${t.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                                        {t.type === 'income' ? '+ ' : '- '}
                                        R$ {parseFloat(t.amount).toFixed(2)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export default DashboardPage;