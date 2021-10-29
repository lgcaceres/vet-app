import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import firebaseDb from '../../firebase'
import CreateForm from '../CreateClient/CreateForm'

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
        firebaseDb.child(`clients/${id}`).set(clientInfo,
        err => {
            if(err)
                console.log(err)
        })
        
    }


    return (
        <div>
              <CreateForm data={clientInfo} handleChange ={handleChange} save={update}/>    
            
        </div> 
    );
}

export default SearchForm;