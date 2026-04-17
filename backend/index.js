const express = require('express');
const cors = require('cors');
const productosRouter = require('./routes/productos');
require('dotenv').config();
const mensajesRouter = require('./routes/mensajes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRouter);
app.use('/api/mensajes', mensajesRouter);


app.listen(3000, () => console.log('Backend en puerto 3000'));