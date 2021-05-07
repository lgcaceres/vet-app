import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

const SearchForm = () => {

    const [idClients,setIdClients] = useState({});
    const [clientInfo,setClientInfo] = useState({
        name : "",
        age: "",
    });
    const {id} = useParams();

    //Load snapshot
    useEffect(()=> {
        firebaseDb.child('clients').on('value',snapshot=> {
            if(snapshot.val()!= null)
            setIdClients({...snapshot.val()})
        })

    },[]);

    const onClick = () => {
        setClientInfo( prevState => ({
            ...prevState,
            name:idClients[id].nameClient,
            age: idClients[id].ageClient,
        }))
    }



    const handleChange = (e) => {
        const { name, value } = e.target;
            setClientInfo(prevState => ({
                ...prevState,
                [name]: value
            }));
    }

    const update = ()=> {
        firebaseDb.child(`clients/${id}`).set({
            nameClient : clientInfo.name,
            ageClient : clientInfo.age,
        },
        err => {
            if(err)
                console.log(err)
        })
        prompt("Updated")
    }


    return (
        <div>
            <input type="text" value={clientInfo.name} onChange={handleChange} name="name"/>
            <input type="text" value={clientInfo.age} onChange={handleChange} name="age"/>
            <button  onClick= {onClick}>Click </button>
            <button onClick= {update}>Update</button>
        </div> 
    );
}

export default SearchForm;