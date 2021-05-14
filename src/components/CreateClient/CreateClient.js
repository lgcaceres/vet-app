import React, { useState }  from 'react';
import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

import CreateForm from './CreateForm'

const CreateClient = ()=> {

    
    const [clientInfo, setClientInfo] = useState({
        nameClient:'',
        dni:'',
        phone:'',
        namePet:'',
        agePet:'',
        species:'',
        sexPet:'',
        breed:'',
    })
    
    const clear= ()=> {
        firebaseDb.child('clients').remove();
    }

    const handleChange = (e)=> {
        const {value , name} = e.target;
        setClientInfo(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const addClient= (e)=> {
        //e.preventDefault();
        
        firebaseDb.child('clients').push(clientInfo,
        err => {
            if(err){
                alert("Data could not be saved"+err);
            } else {
                alert("Data saved successfully")
            }})
        
    }


    return(
            <div>
                <CreateForm data={clientInfo} handleChange ={handleChange} addClient={addClient}/>
                <button onClick={clear}>Erase</button>
            </div>
    )
}

export default CreateClient;