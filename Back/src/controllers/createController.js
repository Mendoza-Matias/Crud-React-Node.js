const express = require('express');
const articulo = require('../models/article');
const controllerCreate = {};

//Controlador para crear un articulo


controllerCreate.article =  async (req,res)=>{
    //almaceno en una constante el metodo para crear un nuevo elemento en mi modelo.
    const article = new articulo(req.body)
    
    
    try {
        //Metodo para guardar mi información
        const newArticle = await article.save()
        
        console.log(newArticle)

        res.status(201).json(newArticle)

    } catch (err) {
        res.status(400).json(err)
    }
    
};

//RELACIONADA CON create.js


module.exports = controllerCreate;