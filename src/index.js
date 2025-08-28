import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import authRouter from './routes/auth.route.js';
import taskRouter from './routes/task.route.js';
import teamRouter from './routes/team.route.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.get('/', (_, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/teams', teamRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});