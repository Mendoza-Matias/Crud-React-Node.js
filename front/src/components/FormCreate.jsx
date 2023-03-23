import { useState } from "react";
import Navbar from "./Navbar";
import'../css/Formulario.css'

const FormCreate = () =>{

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

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const data = inputs;

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
                alert('Vehiculo Creado')
                console.log(json)
                //Llevar al usuario a la vista inicial al crear bien el producto
                window.location.href = '/';
            }
        
    }

    return(
        <div>
        <div>
        <Navbar/>           
        </div>
        <div className="contenedor">
        <form onSubmit={handleSubmit}>
        <h2>Crear Vehiculo</h2>
        <div className="input-grupo">
        <label>Marca</label>
        <input 
        required
        placeholder="Ingrese la marca del vehiculo"
        name="marca"
        type="text"
        onChange={handleInputChange}
        />
        <label >Modelo</label>
        <input
        required 
        placeholder="Ingresa el modelo del vehiculo"
        name="modelo"
        type="number"
        onChange={handleInputChange}
        />

        <label>Descripción</label>
        <textarea 
        cols={30}
        rows='5'
        required
        placeholder="Descripción del vehiculo"
        name="descripcion"
        type="text"
        onChange={handleInputChange}
        />
        
        <label>Propietario</label>
        <input
        required
        placeholder="Nombre del propietario"
        name="propietario"
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

export default FormCreate;