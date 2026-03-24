import express from 'express';
import productRouter from './routes/productRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 4334;

app.use(cors());

app.use(express.json());
app.use("/products", productRouter);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});