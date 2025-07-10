import express from 'express';
import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();
const router = express.Router();
router.post('/', async (req, res) => {
  const { title, amount, type, category } = req.body;
  const userId = req.user.userId;

  try {
    const newTransaction = await prisma.transaction.create({
      data: {
        title,
        amount: parseFloat(amount), 
        type,
        category,
        authorId: userId,
      },
    });
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível criar a transação.' });
  }
});
router.get('/', async (req, res) => {
  const userId = req.user.userId;

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        authorId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível buscar as transações.' });
  }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const userId = req.user.userId;

    if (dataToUpdate.amount) {
        dataToUpdate.amount = parseFloat(dataToUpdate.amount);
    }

    try {
        const transaction = await prisma.transaction.findFirst({
            where: { id: id, authorId: userId }
        });

        if (!transaction) {
            return res.status(403).json({ error: 'Acesso negado ou transação não encontrada.' });
        }

        const updatedTransaction = await prisma.transaction.update({
            where: { id: id },
            data: dataToUpdate,
        });
        res.json(updatedTransaction);
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível atualizar a transação.' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;

    try {
        const transaction = await prisma.transaction.findFirst({
            where: { id: id, authorId: userId }
        });

        if (!transaction) {
            return res.status(403).json({ error: 'Acesso negado ou transação não encontrada.' });
        }

        await prisma.transaction.delete({ where: { id: id } });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível deletar a transação.' });
    }
});

export default router;