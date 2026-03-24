const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4334;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello from the backend!');
});