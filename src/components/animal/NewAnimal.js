import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewAnimal extends Component {
   
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_ANIMAL', user: this.state})
    }
    
    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
            <h1>Form to create new animal.</h1>
            <p>
                <input
                type="text"
                id="name"
                onChange={this.handleInputChange}
                placeholder="name"
                />
            </p>
            <p>
                <input
                type="text"
                id="species"
                onChange={this.handleInputChange}
                placeholder="species"
                />
            </p>
            <input type="submit" />
            </form>
        )
    }
}

export default connect()(NewAnimal);