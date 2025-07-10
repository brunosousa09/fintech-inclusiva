import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import './config/passport-setup.js';
import authRoutes from './routes/authRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/transactions', authenticateToken, transactionRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));