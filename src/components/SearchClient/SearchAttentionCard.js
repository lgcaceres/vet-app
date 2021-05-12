import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

function SearchAttentionCard() {

    const {id} = useParams();

    const [cards, setCards] = useState ({});

    let result = [];

    useEffect(()=> {
        firebaseDb.child(`cards/${id}`).on('value',snapshot => {
            if(snapshot.val()!= null){
                setCards({...snapshot.val()})
            }
            else {
                alert("There is no cardsInfo")
            }
        })
    },[]);

    const actionButton = ()=> {

        result= Object.keys(cards);
        console.log(result);

    }

    return (
        <div>
          <button onClick={actionButton} >Clikc</button>  
          {Object.keys(cards).map( key => ( <div>
                {cards[key].namePet}
          </div> ))}
        </div>
    );
}

export default SearchAttentionCard