import express from 'express';
import productRouter from './routes/productRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db/db.js'
import userRouter from './routes/user.route.js';
dotenv.config();

const app = express();
const PORT = 4334;

app.use(cors());

app.use(express.json());
app.use("/products", productRouter);
app.use('/users', userRouter)

app.listen(PORT, () => {
	pool
	console.log(`Server is running on http://localhost:${PORT}`);
});