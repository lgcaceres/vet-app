import React from 'react'

const CreateForm = (props)=> {



    return(
        <form >
            <label>Nombre
                <input type='text' value={props.data.nameClient} onChange={props.handleChange} name='nameClient'/>
            </label>
            <label>Edad
                <input type='number'value={props.data.ageClient} onChange={props.handleChange} name='ageClient'/>
            </label>
            <input type='submit' value='Guardar'/>

        </form>
    )
}

export default CreateForm;