const express = require('express');
const remove = express.Router();
const eliminar = require('../controllers/removeController');




//REMOVER UN ARTICULO CON SU METODO. (CONTROLADOR)
remove.delete('/delete/:id',eliminar.primary);

module.exports = remove;