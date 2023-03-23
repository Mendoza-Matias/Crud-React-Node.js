const mongoose = require('mongoose');
const {Schema} = mongoose;

//Esquema que voy a almacenar en la base de datos
const ArticleSchema = new Schema(
    {
    marca: String,
    modelo : Date,
    descripcion : String,
    propietario:String
    }
);

module.exports = mongoose.model('articulo',ArticleSchema);