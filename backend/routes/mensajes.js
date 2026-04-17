const express = require('express');
const router = express.Router();
const db = require('../db'); 

const validarMensaje = (req, res, next) => {
    const { nombre, correo, mensaje } = req.body;
    if (!nombre || !correo || !mensaje) {
        return res.status(400).json({ error: 'Faltan campos obligatorios para el contacto' });
    }
    next();
};

// RUTA POST: Guardar el mensaje
router.post('/', validarMensaje, (req, res) => {
    const { nombre, correo, asunto, mensaje } = req.body;
    const query = 'INSERT INTO mensajes (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)';
    
db.query(query, [nombre, correo, asunto, mensaje], (err, result) => {
    if (err) {
        console.error('Error al guardar mensaje:', err);
        return res.status(500).json({ error: 'Error en la base de datos' });
    }
    // Cambiamos el status a 201 (Created)
    res.status(201).json({ 
        ok: true, 
        id: result.insertId, 
        message: 'Mensaje recibido en SportZone' 
    });
});
});

module.exports = router;