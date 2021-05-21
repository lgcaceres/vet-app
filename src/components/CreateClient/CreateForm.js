import React from 'react'
import './CreateForm.css'

const CreateForm = ({data, handleChange, addClient})=> {



    return(
        <form onSubmit={addClient}>
            <div className="client-data">
                <label for="nameClient">Nombre </label>
                <input id="nameClient" type='text' value={data.nameClient} onChange={handleChange} name='nameClient'/>
                <label for="dni">DNI</label>
                <input id="dni"type='text' value={data.dni} onChange={handleChange} name='dni'/>
                <label for="phone">Telefono</label>
                <input id="phone"type='text' value={data.phone} onChange={handleChange} name='phone'/>
                <label for="namePet">Nombre de Mascota</label>
                <input id="namePet" type='text' value={data.namePet} onChange={handleChange} name='namePet'/>

            </div>
            <div className="pet-data">
                <label for="agePet">Edad de Mascota</label>
                <input id="agePet" type='text' value={data.agePet} onChange={handleChange} name='agePet'/>
                
                <label for="sexPet">Sexo</label>
                <input id="sexPet"list="sex" value={data.sexPet} onChange={handleChange} name='sexPet' id="sexPet"/>
                
                <label for="species">Especie</label>
                <input id="species" type='text' value={data.species} onChange={handleChange} name='species'/>
                
                <label for="breed">Raza</label>
                <input id="breed" type='text' value={data.breed} onChange={handleChange} name='breed'/>
                


            </div>
                
           
            
                
                            
            <input className="btn" type='submit' value='Guardar'/>

        </form>
    )
}

export default CreateForm;