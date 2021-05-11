import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

function CreateAttentionCard() {

    const [cardInfo, setCardInfo] = useState ({
        namePet : "",
        action:""

    })

    /*useEffect(() => {
        firebaseDb.child('')
    })*/

    const {id} = useParams();


    const handleChange = (e)=> {
        const {name , value} = e.target;
        setCardInfo(prevState => ({
            ...prevState,
            [name]:value
        }));

    }

    const saveCard = (e)=> {
        e.preventDefault();

        firebaseDb.child(`cards/${id}`).push().set(cardInfo,
            err => {
                if(err){
                alert("Data could not be saved"+err);
            } else {
                alert("Data saved successfully")
            }})
        
        setCardInfo(prevState => ({
            ...prevState,
            namePet:"",
            action:""
        }))

    }

    return (
        <div>
            <input type="text" name="namePet" value={cardInfo.namePet} onChange={handleChange}/>
            <textarea name="action" value={cardInfo.action} onChange={handleChange} />
            <button onClick={saveCard}>Save</button>
        </div>
    );
}

export default CreateAttentionCard;