import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnimal } from '../actions/animals';

class NewAnimal extends Component {
   
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    // Submit handler is throwing warning in console for taking too long
    handleOnSubmit = (event) => {
        debugger
        event.preventDefault();
        this.props.addAnimal(this.state)
        // this.props.dispatch({type: 'ADD_ANIMAL', animal: this.state})
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

// const mapDispatchToProps = dispatch => {
//     return {
//       addAnimal: (animal) => {
//         dispatch(addAnimal(animal))
//       }
//     };
// };


// export default connect(null, mapDispatchToProps)(NewAnimal);

// Alternative connect:
export default connect(null, { addAnimal })(NewAnimal);