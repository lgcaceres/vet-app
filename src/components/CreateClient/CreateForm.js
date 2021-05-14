import React from 'react'

const CreateForm = ({data, handleChange, addClient})=> {



    return(
        <form onSubmit={addClient}>
            <label>Nombre
                <input type='text' value={data.nameClient} onChange={handleChange} name='nameClient'/>
            </label>
            <label>DNI
                <input type='text' value={data.dni} onChange={handleChange} name='dni'/>
            </label>
            <label>Telefono
                <input type='text' value={data.phone} onChange={handleChange} name='phone'/>
            </label>
            <label>Nombre de Mascota
                <input type='text' value={data.namePet} onChange={handleChange} name='namePet'/>
            </label>
            <label>Edad de Mascota
                <input type='text' value={data.agePet} onChange={handleChange} name='agePet'/>
            </label>
            <label>Sexo
                <input type='text' value={data.sexPet} onChange={handleChange} name='sexPet'/>
            </label>
            <label>Especie
                <input type='text' value={data.species} onChange={handleChange} name='species'/>
            </label>
            <label>Raza
                <input type='text' value={data.breed} onChange={handleChange} name='breed'/>
            </label>
            <input type='submit' value='Guardar'/>

        </form>
    )
}

export default CreateForm;