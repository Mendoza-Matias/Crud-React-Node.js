## Problemas que tuve

* El error que podrías encontrar en este código es que estás intentando aplicar el método map() en la variable info, que se inicializa con un valor de cadena vacía mediante el hook useState. Sin embargo, en el useEffect se asigna el resultado de la petición fetch a esta variable, lo que significa que info ahora es un objeto o un array que contiene los datos recibidos de la solicitud.

Por lo tanto, si intentas llamar al método map() en una cadena vacía, obtendrás un error que dice "Cannot read properties of undefined (reading 'map')". Para solucionar esto, puedes inicializar info como un array vacío en lugar de una cadena vacía.

```js
    useState([])
```
## Otra opción 

* Pasar null dentro del estado inicial y al realizar el map antes poner ?


```js
    const [info,setInfo] = useState(null);



    {info?.map((data)=>{
        return(
            <div key={data._id}>
            {//Cuando hay mar de un valor es conveniente colocar un div y a este darle el key}
            </div>
        )
    })}
```
---
### Enviando información a mi Backend

```js
     const response = 
            await fetch('http://localhost:8082/create',
            {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(response.ok){
            console.log(json)
        }
```
#### Importante no olvidar colocar el Headers
> El objeto headers con la propiedad Content-Type establecida en 'application/json' se utiliza para indicar al servidor que el cuerpo de la solicitud (request body) está en formato JSON.
Cuando se realiza una solicitud HTTP con un cuerpo, es importante que el servidor entienda el formato en el que se envía la información para poder procesarla correctamente. En este caso, al establecer el Content-Type en 'application/json', se indica que el cuerpo de la solicitud está en formato JSON, lo que permite al servidor procesar los datos de la solicitud de manera adecuada.
En resumen, la propiedad Content-Type del objeto headers se utiliza para indicar el tipo de datos que se están enviando en el cuerpo de una solicitud HTTP, lo que permite al servidor procesar los datos correctamente. En este caso, 'application/json' indica que el cuerpo de la solicitud está en formato JSON.