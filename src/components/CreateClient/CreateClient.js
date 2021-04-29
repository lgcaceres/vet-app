import React  from 'react';
import firebaseDb from '/home/luis/Desktop/evelin/vet-app/src/firebase.js'

import CreateForm from './CreateForm'

class CreateClient extends React.Component{

    constructor(props){
        super();
        this.state = {
            idClients:[],
            nameClient:'',
            ageClient:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.addClient = this.addClient.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount(){
        firebaseDb.child('clients').on('value',querySnapShot => {
                 let data = querySnapShot.val() ? querySnapShot.val() : {};
                 let keys = {...data};
                 this.setState({idClients:keys,});   
            
        })

    }

    clear() {
        firebaseDb.child('clients').remove();
    }

    handleChange(e) {
        const {value , name} = e.target;

        this.setState ({[name]:value});
    }

    addClient(e) {
        e.preventDefault();
        
        
        firebaseDb.child('clients').push({
            nameClient : this.state.nameClient,
            ageClient : this.state.ageClient,
        },
            
            err => {
                console.log(err);
            })
        this.setState({nameClient:'',
                        ageClient:0});
    }


    render() {
        let keys = Object.keys(this.state.idClients);
        return(
            <div>
                <CreateForm data={this.state} handleChange ={this.handleChange} addClient={this.addClient}/>
                {keys.map(id => (<p>{this.state.idClients[id].nameClient}</p>))}
                <button onClick={this.clear}>Erase</button>
            </div>
            
            
        )
    }
    
}

export default CreateClient;