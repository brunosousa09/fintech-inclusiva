// server/test-prisma.js
import prisma from './lib/prisma.js';

async function main() {
  console.log('--- Iniciando teste de conexão do Prisma ---');
  try {
    console.log('Tentando buscar o primeiro usuário na tabela...');
    
    // Tenta fazer a query mais simples possível
    const user = await prisma.user.findFirst();

    if (user) {
      console.log('✅ SUCESSO! Conexão bem-sucedida. Usuário encontrado:', user);
    } else {
      console.log('✅ SUCESSO! Conexão bem-sucedida, mas a tabela de usuários está vazia.');
    }
  } catch (error) {
    console.error('❌ FALHA! Erro ao tentar usar o Prisma Client:', error);
  } finally {
    // Garante que a conexão com o banco seja fechada
    await prisma.$disconnect();
    console.log('--- Teste finalizado. Desconectado do banco. ---');
  }
}

main();