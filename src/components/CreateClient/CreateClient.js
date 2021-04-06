import React  from 'react';

import CreateForm from './CreateForm'

class CreateClient extends React.Component{

    constructor(props){
        super();
        this.state = {
            nameClient:'',
            ageClient:0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {value , name} = e.target;

        this.setState ({[name]:value});

        console.log(this.state)


    }


    render() {
        return(
            <CreateForm data={this.state} handleChange ={this.handleChange}/>
        )
    }
    
}

export default CreateClient;