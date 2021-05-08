import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

const SearchForm = () => {

    const [clientInfo,setClientInfo] = useState({});
    const {id} = useParams();


    useEffect(()=> {
        firebaseDb.child(`clients/${id}`).on('value',snapshot=> {
            if(snapshot.val()!= null)
            setClientInfo({...snapshot.val()})  
        })

    },[]);


    const handleChange = (e) => {
        const { name, value } = e.target;
            setClientInfo(prevState => ({
                ...prevState,
                [name]: value
            }));
    }

    const update = ()=> {
        firebaseDb.child(`clients/${id}`).set({
            nameClient : clientInfo.nameClient,
            ageClient : clientInfo.ageClient,
        },
        err => {
            if(err)
                console.log(err)
        })
        
    }


    return (
        <div>
            <input type="text" value={clientInfo.nameClient} onChange={handleChange} name="nameClient"/>
            <input type="text" value={clientInfo.ageClient} onChange={handleChange} name="ageClient"/>
            <button onClick={update}>Save</button>
            
            
        </div> 
    );
}

export default SearchForm;