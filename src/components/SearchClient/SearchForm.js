import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

const SearchForm = () => {

    const [idClients,setIdClients] = useState({});
    const [clientInfo,setClientInfo] = useState({
        name : "",
        age: 0,
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
        console.log(idClients[id].nameClient);
    }

    const onChange = () => {

    }




    return (
        <div>
            <input type="text" value="name" onChange={onChange}/>
            <button  onClick= {onClick}>Click </button>
        </div> 
    );
}

export default SearchForm;