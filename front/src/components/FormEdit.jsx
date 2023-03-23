import { useEffect,useState } from "react";
import {useParams } from "react-router-dom";
import Navbar from "./Navbar";
import '../css/Formulario.css'

const FormEdit = () =>{

    //Metodo de react router para extraer un parametro y enviarlo a mi url , En este caso el id
    const params = useParams()

    const [inputs,setInputs] = useState({
        marca:'',
        modelo:'',
        descripcion:'',
        propietario:''
    });

    //Funcion pendiente de mi evento 
    const handleInputChange = (e) =>{   
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    //Hago un fetch para traer la información de un articulo en especial por su id
    useEffect(()=>{
       fetch(`http://localhost:8082/article/${params.id}`)
       .then((res) =>  res.json())
       .then((data) => {setInputs({
        marca:data.marca,
        modelo:data.modelo,
        descripcion:data.descripcion,
        propietario:data.propietario,
       })
    })
        
    },[])

    //Metodo para editar
    const handleSubmit = async(e) =>{
        //Prevengo el evento submit
        e.preventDefault()
        
        const info = inputs

        const response = 
        //Ruta en mi back
        await fetch(`http://localhost:8082/edit/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(info),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(response.ok){
            alert('Vehiculo Editado')
            console.log(json)
            window.location.href = '/';
        }
    }

    return(
        <div>
        <Navbar/>
        <div className="contenedor">
        <form onSubmit={handleSubmit}>
        <h2>Editar Auto</h2>
        <div className="input-grupo">
        <label>Marca</label>
        <input 
        required
        placeholder="Ingrese la marca del vehiculo"
        name="marca"
        value={inputs.marca}
        type="text"
        onChange={handleInputChange}
        />

        <label>Modelo</label>
        <input
        required 
        placeholder="Ingresa el modelo del vehiculo"
        name="modelo"
        value={new Date(inputs.modelo).getFullYear()}
        type="number"
        onChange={handleInputChange}
        />

        <label>Descripción</label>
        <textarea 
        rows='3'
        required
        placeholder="Descripción del vehiculo"
        name="descripcion"
        value={inputs.descripcion}
        type="text"
        onChange={handleInputChange}
        />
        
        <label>Propietario</label>
        <input 
        required
        placeholder="Nombre del propietario"
        name="propietario"
        value={inputs.propietario}
        type="text"
        onChange={handleInputChange}
        />

        <button className="btn" type="submit">Enviar</button>
        </div>
        </form>
        </div>
        </div>
    )
}

export default FormEdit;