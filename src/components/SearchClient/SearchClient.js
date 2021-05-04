import React,{useState, useEffect} from 'react';
import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

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
        console.log(value);
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

    /*.toLowerCase();
            
            if()
            return id
        }*/



    return(
        <div>
            <div>
                <input type='text' value={searchWord} onChange={handleChange} />
                <button onClick={search}>Search</button>
            </div>
            <div>
                {selectedIds.map( id => (<p>{idClients[id].nameClient}</p>))}
            </div>
        </div>
    )
}


export default SearchClient ;