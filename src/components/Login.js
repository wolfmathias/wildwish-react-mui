import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
   
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_USER', user: this.state})
    }
    
    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
            <h1>This is the login page.</h1>
            <p>
                <input
                type="text"
                id="username"
                onChange={this.handleInputChange}
                placeholder="username"
                />
            </p>
            <p>
                <input
                type="text"
                id="hometown"
                onChange={this.handleInputChange}
                placeholder="hometown"
                />
            </p>
            <input type="submit" />
            </form>
        )
    }
}

export default connect()(Login);