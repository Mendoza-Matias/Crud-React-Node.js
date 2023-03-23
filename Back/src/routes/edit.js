const express = require('express');
const editController = require('../controllers/edit.controller');
const edit = express.Router()


//Editar un articulo
edit.put('/edit/:id',editController.primary);


module.exports = edit;