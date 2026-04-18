const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importación de rutas
const productosRouter = require('./routes/productos');
const mensajesRouter = require('./routes/mensajes');
const db = require('./db');

const app = express();

// Configuración de Middlewares
app.use(cors()); 
app.use(express.json());

// Definición de Rutas
app.use('/api/productos', productosRouter);
app.use('/api/mensajes', mensajesRouter);

app.get('/api/health', (req, res) => {
  db.query('SELECT 1', (err) => {
    if (err) {
      console.error('Error en Health Check:', err.message);
      return res.status(500).json({ status: 'Error en BD', error: err.message });
    }
    res.json({ status: 'OK', database: 'Conectado y listo' });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor SportZone corriendo en el puerto ${PORT}`);
});