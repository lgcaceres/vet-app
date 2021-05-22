import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AttentionCard from './AttentionCard'

import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

function CreateAttentionCard() {

    const [cardInfo, setCardInfo] = useState ({
        date : "",
        nameClient:"",
        namePet:"",
        temperature:"",
        weight:"",
        fc:"",//frecuencia cardiaca
        fr:"",//frecuencia respiratoria
        pulse:"",
        nextDate:"",
        anamnesis:"",
        diagnostico:"",
        tratamiento:"",
        vacunas:""
    })

    const {id} = useParams();

    useEffect(()=>{
        let data;
        firebaseDb.child(`clients/${id}`).on('value',snapshot => {
            if(snapshot.val()!=null){
                data= snapshot.val();
            }
            else {
                alert("something is wrong")
            }
            console.log(data.nameClient);
            setCardInfo(prevState => ({
                ...prevState,
                nameClient:data.nameClient,
                namePet:data.namePet
            }));
        })
    },[])


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
        
        // setCardInfo(prevState => ({
        //     ...prevState,
        //     namePet:"",
        //     action:""
        // }))

    }

    return (
        <AttentionCard cardInfo={cardInfo} handleChange={handleChange} saveCard={saveCard}/>
    );
}

export default CreateAttentionCard;