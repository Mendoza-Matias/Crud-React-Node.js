const express = require('express');
const create = express.Router();

//CONTROLADOR
const controllerCreate = require('../controllers/createController');

//RUTA CON METODO POST PARA CREAR UN ARTICULO


//Crear producto 
create.post('/create',controllerCreate.article)


module.exports = create;