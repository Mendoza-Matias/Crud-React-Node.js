const controller = {}
const articulo = require('../models/article');

//CONTROLADOR PRINCIPAL DE LA VISTA INDEX -----------------
controller.index = async(req,res) =>{
    try {
        res.status(200).json({msg:'Pagina funcionando bien'})
    
    } catch (err) {

        res.status(400).json(err)
    }
};

//CONTROLADOR DE LA VISTA PARA CREAR UN PRODUCTO -----------------
controller.create = async(req,res)=>{
    try {
        res.status(201).json({msg:'Articulo creado vista'})
    } catch (err) {
        res.status(400).json(err)
    }
};

//CONTROLADOR DE LA VISTA PARA MOSTRAR TODOS LOS PRODUCTOS----------
controller.seeArticle = async(req,res)=>{

    try {
        const article = await
        articulo.find({})
        res.status(200).json(article)

    } catch (err) {
        res.status(404).json(err)
        console.log(err)
    }
};

//CONTROLADOR DE LA VISTA PARA MOSTRAR UN ARTICULO PARTICULAR-------

controller.seeArticleOne = async(req,res)=>{
    //capturo el id de mi petición
    const id = req.params['id']
    try {
        //Busco en mi modelo el articulo almacenado por su id con el metodo .findById.
        const article = await
        articulo
        .findById(id)//Le paso mi constante id como parametro para buscar
        res.status(201).json(article)

    } catch (err) {
        res.status(404).send('Articulo no encontrado vista')
        console.log(err)
    }
};


//CONTROLADOR DE LA VISTA PARA EDITAR UN ARTICULO---------------
controller.edit = async(req,res)=>{
    try {
        res.status(200).json({msg:'Articulo editado vista'})
    } catch (err) {
        res.status(400).json(err)
    }
    
};

//CONTROLADOR DE LA VISTA PARA ELIMINAR UN ARTICULO--------------

controller.delete = async(req,res)=>{
    try {
        res.status(200).json({msg:'Articulo eliminado vista'})
    } catch (err) {
        res.status(400).json(err)
    }
}

//VISTAS RELACIONADAS CON see.js



module.exports = controller;