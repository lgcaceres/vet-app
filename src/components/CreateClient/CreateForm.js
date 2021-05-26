import React from 'react'
import './CreateForm.css'

const CreateForm = ({data, handleChange, save})=> {



    return(
        <form onSubmit={save}>
            <div className="client-data">
                <label for="nameClient">Nombre </label>
                <input id="nameClient" type='text' value={data.nameClient} onChange={handleChange} name='nameClient' required/>
                <label for="dni">DNI</label>
                <input id="dni"type='text' value={data.dni} onChange={handleChange} name='dni' required/>
                <label for="phone">Telefono</label>
                <input id="phone"type='text' value={data.phone} onChange={handleChange} name='phone' required/>
                <label for="namePet">Nombre de Mascota</label>
                <input id="namePet" type='text' value={data.namePet} onChange={handleChange} name='namePet' required/>

            </div>
            <div className="pet-data">
                <label for="agePet">Edad de Mascota</label>
                <input id="agePet" type='text' value={data.agePet} onChange={handleChange} name='agePet' required/>
                
                {/* <input id="sexPet"list="sex" value={data.sexPet} onChange={handleChange} name='sexPet' id="sexPet" required/> */}
                
                <label for="species">Especie</label>
                <input id="species" type='text' value={data.species} onChange={handleChange} name='species' required/>
                
                <label for="breed">Raza</label>
                <input id="breed" type='text' value={data.breed} onChange={handleChange} name='breed' re/>

                <label for="sexPet">Sexo</label>
                <select value={data.sexPet} onChange={handleChange} name="sexPet">
                        <option>Macho</option>
                        <option>Hembra</option>    
                </select>
            </div>
            <input className="btn" type='submit' value='Guardar'/>

        </form>
    )
}

export default CreateForm;