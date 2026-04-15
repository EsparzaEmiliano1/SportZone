const express = require('express');
const cors = require('cors');
const productosRouter = require('./routes/productos');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRouter);

app.listen(3000, () => console.log('Backend en puerto 3000'));