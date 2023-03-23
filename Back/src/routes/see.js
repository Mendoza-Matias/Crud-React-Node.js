const express = require('express');
const controller = require('../controllers/seeController');
const see = express.Router();

//VISTAS PARA VER EL CONTENIDO



//Mostrar vista principal-----
see.get('/', controller.index);


//Mostrar vista para crear----
see.get('/create', controller.create);

//Mostar todos los articulos-----

see.get('/see/article',controller.seeArticle);

//Mostar un articulo particular----

see.get('/article/:id',controller.seeArticleOne);

//Editar articulo----

see.get('/edit/:id',controller.edit);

//Eliminar un articulo

see.get('/delelete/article/:id',controller.delete)

module.exports = see;