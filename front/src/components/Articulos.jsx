import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Navbar from "./Navbar";

import '../css/Articulos.css'


const Articulos = () =>{
    const [info,setInfo] = useState(null)
    
    useEffect(()=>{
        fetch('http://localhost:8082/see/article')
        .then((res) => res.json())
        .then((data) => setInfo(data))
    },[])


    const eliminar = async(id) =>{
        const articulo = info
        const response =

        await fetch(`http://localhost:8082/delete/${id}`,{
            method:'DELETE',
            body:JSON.stringify(articulo),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(response.ok){
            console.log(json)
            window.location.href = '/';
        }
    }

    return(
        <div>
        <Navbar/>
        <div>
            <h2 className="titulo">Vehiculos Disponibles</h2>
            <div className="container">
            {info?.map((articulos)=>{
                return(
                    <div className="articulo" key={articulos._id}>
                    <div>
                    <h2 className="texto marca">{articulos.marca}</h2>
                    <h3 className="texto">Año<br/>{new Date (articulos.modelo).getFullYear()}</h3>
                    <p className="texto descripcion">Descripcion<br/>{articulos.descripcion}</p>
                    <p className="texto propietario">Propietario<br/>{articulos.propietario}</p>
                    <div className="botones">
                    <button className="eliminar boton" onClick={(e)=>{eliminar(articulos._id)}}>Eliminar</button>
                    <Link to={`/edit/${articulos._id}`}>
                    <button className="editar boton">Editar</button>
                    </Link>
                    </div>
                    </div>
                     </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}

export default Articulos;