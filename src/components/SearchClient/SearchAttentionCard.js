import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import firebaseDb from '../../firebase'
import EditCard from './EditCard'

import './SearchAttentionCard.css'
import EditImg from'../../images/edit.png'
import DeleteImg from'../../images/edit.png'

const SearchAttentionCard= ()=> {

    const {id} = useParams();
    const {path, url} = useRouteMatch();

    const [cards, setCards] = useState ({});
    const [cardDeleted, setCardDeleted] = useState('');


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

    useEffect(()=> {
        if(cardDeleted !== ''){
            firebaseDb.child(`cards/${id}/${cardDeleted}`).remove();
        }
    },[cardDeleted])

    return (
        <div className="container">
            <div className="search">
                {Object.keys(cards).map( key => ( 
                <div className="card">
                    <div>
                        {cards[key].nameClient}
                    </div>
                    <div>
                        {cards[key].namePet}
                    </div>
                    <div>
                        {cards[key].date}
                    </div>
                        
                        <Link to={{pathname:`${url}/${key}`,state:{client:id}}}><img src={EditImg}/></Link>
                        <button className="delete-btn"  onClick={(e) => setCardDeleted(key)}><img src={DeleteImg}/></button>
                </div> ))}    
            </div>  
          

            <div className="result">
                <Switch>
                <Route path={`${path}/:idCard`} component={EditCard}/>
                </Switch>
            </div>
          
        </div>
    );
}

export default SearchAttentionCard