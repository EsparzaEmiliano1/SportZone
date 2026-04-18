const express = require('express');
const cors = require('cors');
const productosRouter = require('./routes/productos');
require('dotenv').config();
const mensajesRouter = require('./routes/mensajes');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRouter);
app.use('/api/mensajes', mensajesRouter);

app.get('/api/health', (req, res) => {
  db.query('SELECT 1', (err) => {
    if (err) {
      return res.status(500).json({ status: 'Error en BD', error: err.message });
    }
    res.json({ status: 'OK', database: 'Conectado' });
  });
});

app.listen(3000, () => {
  console.log('Backend en puerto 3000');
  console.log(`Conectado a ${process.env.DB_HOST}:${process.env.DB_PORT}`);
});
