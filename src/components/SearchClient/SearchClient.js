import React,{useState, useEffect} from 'react';
import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

import {Link} from 'react-router-dom';
import './SearchClient.css'
import addCard from'/home/luis/Desktop/evelin/vet-app/src/images/add.png'
import searchCard from'/home/luis/Desktop/evelin/vet-app/src/images/search.png'


const SearchClient = () => {
    
    const [idClients,setIdClients] = useState({});
    const [searchWord, setSearchWord] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);

    let selected=[]; // has the ids of the clients that match the search

    useEffect(()=> {
        firebaseDb.child('clients').on('value',snapshot=> {
            if(snapshot.val()!= null)
            setIdClients({...snapshot.val()})
        })
    },[]);

    const handleChange= (e) => {
        const {value} = e.target;
        setSearchWord(value);

    }

    const search = (e) => {
        e.preventDefault();
        selected = Object.keys(idClients).filter( id => {
            let nameSearched = searchWord.toLowerCase();
            let name = idClients[id].nameClient.toLowerCase(); 
            if(name.includes(nameSearched)){
                return id;
            }
            
        })
        setSelectedIds(selected);

        console.log(selected);
    }

    return(
        <div>
            <div className="search-section">
                <p className="search-section-title">Buscar por el nombre</p>
                <input type='text' value={searchWord} onChange={handleChange} />
                <button onClick={search}>Search</button>
            </div>
            <div className="result-section">
                {selectedIds.map( id => (
                <div className="result-item">
                    <Link className="result-item-name" to={`/searchForm/${id}`}>
                    {idClients[id].nameClient}
                    </Link>
                    <Link to={`/createCard/${id}`}>
                    <img src={addCard}/>
                    </Link>
                    <Link to={`/searchCard/${id}`}>
                    <img src={searchCard}/>
                    </Link>
                </div> ))}
            </div>
        </div>
    )
}


export default SearchClient ;