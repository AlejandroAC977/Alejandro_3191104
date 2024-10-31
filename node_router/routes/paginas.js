const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'inicio.html'));
});

router.get('/formulario', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'formulario.html'));
});

router.get('/informacion', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'informacion.html'));
});

module.exports = router;