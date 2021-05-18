import React from 'react'
import './CreateForm.css'

const CreateForm = ({data, handleChange, addClient})=> {



    return(
        <form onSubmit={addClient}>
            <div className="client-data">
                <label>Nombre </label>
                <input type='text' value={data.nameClient} onChange={handleChange} name='nameClient'/>
                <label>DNI</label>
                <input type='text' value={data.dni} onChange={handleChange} name='dni'/>
                <label>Telefono</label>
                <input type='text' value={data.phone} onChange={handleChange} name='phone'/>
                <label>Nombre de Mascota</label>
                <input type='text' value={data.namePet} onChange={handleChange} name='namePet'/>

            </div>
            <div className="pet-data">
                <label>Edad de Mascota</label>
                <input type='text' value={data.agePet} onChange={handleChange} name='agePet'/>
                
                <label>Sexo</label>
                <input list="sex" value={data.sexPet} onChange={handleChange} name='sexPet' id="sexPet"/>
                
                <label>Especie</label>
                <input type='text' value={data.species} onChange={handleChange} name='species'/>
                
                <label>Raza</label>
                <input type='text' value={data.breed} onChange={handleChange} name='breed'/>
                


            </div>
                
           
            
                
                            
            <input className="btn" type='submit' value='Guardar'/>

        </form>
    )
}

export default CreateForm;