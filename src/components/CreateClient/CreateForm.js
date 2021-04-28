import React from 'react'

const CreateForm = ({data, handleChange, addClient})=> {



    return(
        <form onSubmit={addClient}>
            <label>Nombre
                <input type='text' value={data.nameClient} onChange={handleChange} name='nameClient'/>
            </label>
            <label>Edad
                <input type='number' value={data.ageClient} onChange={handleChange} name='ageClient'/>
            </label>
            <input type='submit' value='Guardar'/>

        </form>
    )
}

export default CreateForm;