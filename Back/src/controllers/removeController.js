const eliminar = {};
const articulo = require('../models/article');

//CONTROLADOR PARA ELIMINAR UN ARTICULO-----------

eliminar.primary = async(req,res)=>{
    const id = req.params['id']
    try {
        
        await articulo.findByIdAndRemove(id)//
        
        res.status(201).json({msg:'Articulo eliminado correctamente'})

    } catch (err) {
        res.status(400).json({msg:'Articulo no encontrado para eliminarlo'})
        console.log(err)
    }
}

//RELACIONADA CON remove.js

module.exports = eliminar;