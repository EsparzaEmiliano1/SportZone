const express = require('express');
const router = express.Router();
const db = require('../db'); // Conexion MySQL

router.get('/', (req, res) => {
  console.log('He recibido una peticion GET en /api/productos'); // Solo revisando
  
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    
    console.log('Datos obtenidos de la DB:', results.length, 'productos');
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM productos WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { nombre, categoria, marca, precio, stock, imagen, descripcion, disponible } = req.body;
  db.query('INSERT INTO productos SET ?',
    { nombre, categoria, marca, precio, stock, imagen, descripcion, disponible },
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId });
    }
  );
});

module.exports = router;