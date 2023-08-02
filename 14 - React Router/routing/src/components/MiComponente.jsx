import React from 'react'

// stateful class component
export default class MiComponente extends React.Component{
    
    render(){
        return <h1>Mi componente</h1>
    }

    constructor(props){
        this.state = state = {
            pokemon : [],
            email: ''
        }
    }

    updateEmail(){
        this.setState({
            pokemon : [],
            email: 'nuevoemail'
        })
    }
}