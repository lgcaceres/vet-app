import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import AttentionCard from './AttentionCard';
import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

const EditCard =()=> {

    const location = useLocation();
    const idClient = location.state?.client;

    const{idCard} = useParams();

    const [cardInfo, setCardInfo] = useState({})

    useEffect(()=> {
        firebaseDb.child(`cards/${idClient}/${idCard}`).on('value',snapshot => {
            if(snapshot.val()!=null){
                setCardInfo({...snapshot.val()})
            }
            else {
                alert("something is wrong")
            }
        })
    },[]);


    const handleChange = (e)=> {
        const {value, name} = e.target;
        setCardInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveCard = (e) => {
        e.preventDefault();

        firebaseDb.child(`cards/${idClient}/${idCard}`).update(cardInfo,
            err=> {
                if(err){
                    alert("Data could not be saved")
                } else {
                    alert("Data saved succesfully")
                }
            }
        )
    };



    return (
        <div> 
            <AttentionCard cardInfo={cardInfo} handleChange={handleChange} saveCard={saveCard}/>
        </div>
    );
}

export default EditCard;