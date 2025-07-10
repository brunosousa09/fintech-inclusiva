import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });
        res.status(201).json({ message: 'Usuário criado com sucesso!', userId: user.id });
    } catch (e) {
        res.status(400).json({ error: 'Este e-mail já está em uso.' });
    }
});

// Rota de Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

router.get('/google', passport.authenticate('google'));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/login' }), (req, res) => {
    const token = jwt.sign({ userId: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.redirect(`http://localhost:5173/auth/callback?token=${token}`);
});

export default router;