import React  from 'react';
import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

import CreateForm from './CreateForm'

class CreateClient extends React.Component{

    constructor(props){
        super();
        this.state = {
            nameClient:'',
            ageClient:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.addClient = this.addClient.bind(this);
    }

    handleChange(e) {
        const {value , name} = e.target;

        this.setState ({[name]:value});
    }

    addClient(e) {
        e.preventDefault();
        
        
        firebaseDb.child('clients').push(this.state,
            
            err => {
                console.log(err);
            })
        
    }


    render() {
        return(
            <CreateForm data={this.state} handleChange ={this.handleChange} addClient={this.addClient}/>
        )
    }
    
}

export default CreateClient;