import express from 'express';
import productRouter from './routes/productRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db/db.js'
import userRouter from './routes/user.route.js';
import refreshRouter from './routes/refresh.route.js';
dotenv.config();

const app = express();
const PORT = 4334;

app.use(cors());

app.use(express.json());
app.use("/products", productRouter);
app.use('/auth', userRouter)
app.use('/refresh', refreshRouter)

app.listen(PORT, () => {
	pool
	console.log(`Server is running on http://localhost:${PORT}`);
});