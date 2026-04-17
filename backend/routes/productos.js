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
  const { id } = req.params;
  db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: "No encontrado" });
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

const validarProducto = (req, res, next) => {
    const { nombre, precio, stock } = req.body;
    
    if (!nombre || nombre.length < 3) {
        return res.status(400).json({ error: 'El nombre es obligatorio y debe tener al menos 3 caracteres' });
    } if (precio <= 0) {
        return res.status(400).json({ error: 'El precio debe ser mayor a 0' }); 
    } if (stock < 0) {
        return res.status(400).json({ error: 'El stock no puede ser negativo' });
    }
    next(); 
};

// Aplicar el middleware en el POST
router.post('/', validarProducto, (req, res) => {
    const { nombre, categoria, marca, precio, stock, imagen, descripcion } = req.body;
    const query = 'INSERT INTO productos (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible) VALUES (?, ?, ?, ?, ?, ?, ?, 1)';
    
    db.query(query, [nombre, categoria, marca, precio, stock, imagen, descripcion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, mensaje: 'Producto creado exitosamente' });
    });
});

module.exports = router;