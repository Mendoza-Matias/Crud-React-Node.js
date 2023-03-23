## Node.js 
---
### Detalles a tener en cuenta: 

* No cerrar nada escrito en el archivo .env con (;).
* El archivo .env debe ir en la raiz de mi proyecto (Fuera de src)
* Configuración del package.json

```js

 "start": "src / app.js",
 "dev":"nodemon src/app.js"

```
* Dato: Pasar siempre los middleware antes de las rutas 

```js
    //Middleware
    //Convierte cualquier petición a formato Json.
    app.use(express.json())
    //Analiza el cuerpo de la petición a travez de la url.
    app.use(express.urlencoded({extended:false}))

    //Rutas
    app.use(see);
    app.use(create);

```
### Vistas que tengo que hacer 
* Vista para mostrar ✅
* Crear un articulo  ✅
* Buscar todos los productos ✅     
* Buscar uno producto ✅  
* Editar un producto ✅   
* Eliminar ✅