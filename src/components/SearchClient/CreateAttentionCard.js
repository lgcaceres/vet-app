import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AttentionCard from './AttentionCard'

import firebaseDb from '../../firebase'

function CreateAttentionCard() {

    const getDateTime = () => {
        let tempDate = new Date();
        let year = tempDate.getFullYear();
        let month= (tempDate.getMonth()+1) > 10 ?  (tempDate.getMonth()+1) : `0${(tempDate.getMonth()+1)}`
        let day =tempDate.getDate()> 10 ?  tempDate.getDate() : `0${tempDate.getDate()}`; 
        let date = `${year}-${month}-${day}`;
        return date;
     }

    const [cardInfo, setCardInfo] = useState ({
        date : getDateTime(),
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
         
            setCardInfo(prevState => ({
                ...prevState,
                nameClient:data.nameClient,
                namePet:data.namePet,
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
        
        

    }

    return (
        <AttentionCard cardInfo={cardInfo} handleChange={handleChange} saveCard={saveCard}/>
    );
}

export default CreateAttentionCard;