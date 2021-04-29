import React,{useState, useEffect} from 'react';
import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

const SearchClient = () => {
    
    const [idClients,setIdClients] = useState({});

    useEffect(()=> {
        firebaseDb.child('clients').on('value',snapshot=> {
            if(snapshot.val()!= null)
            setIdClients({...snapshot.val()})
        })
    },[]);



    return(
        <div>
            {Object.keys(idClients).map( id => (
                <p>{idClients[id].nameClient}</p>
            ))}
        </div>
    )
}


export default SearchClient ;