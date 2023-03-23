const editController = {}
const articulo = require('../models/article');

//CONTROLADOR PARA EDITAR UN ARTICULO

    editController.primary = async(req,res) =>{

    //capturo el id de mi petición

    const id = req.params['id']
    const datosArt = req.body;
    try {
        //Edito mi articulo por medio del id , cambiando el cuerpo.
        
        await articulo.findByIdAndUpdate(id,datosArt)//
        
        res.status(201).json({msg:'Articulo editado'})

    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
}

    


module.exports = editController;