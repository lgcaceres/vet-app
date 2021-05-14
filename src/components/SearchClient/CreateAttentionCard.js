import React, { useState } from 'react';
import { useParams } from 'react-router';
import AttentionCard from './AttentionCard'

import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

function CreateAttentionCard() {

    const [cardInfo, setCardInfo] = useState ({
        namePet : "",
        action:""

    })

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
        <AttentionCard cardInfo={cardInfo} handleChange={handleChange} saveCard={saveCard}/>
    );
}

export default CreateAttentionCard;