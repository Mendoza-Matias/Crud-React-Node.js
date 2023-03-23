const express = require('express');
const dotenv = require('dotenv');
const database = require('./database/database');
const cors = require('cors');


//Ruta
const see = require('./routes/see');
const create = require('./routes/create');
const edit = require('./routes/edit');
const remove = require('./routes/remove');
//Config.
dotenv.config();

//App server.js.
const app = express();

//Conectar base de datos
database();

//Middleware

//Convierte cualquier petición a formato Json.
app.use(express.json());
//Analiza el cuerpo de la petición a travez de la url.
app.use(express.urlencoded({extended:false}));
//Cors
app.use(cors());

//Rutas
app.use(see);
app.use(create);
app.use(edit);
app.use(remove);

//Servidor
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server funcionando en puerto ${port}`)
})