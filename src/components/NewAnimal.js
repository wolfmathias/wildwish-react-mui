import React, { Component } from 'react';
import { connect } from 'react-redux';

// addAnimal action
import { addAnimal } from '../actions/animals';

class NewAnimal extends Component {
   
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    // Submit handler is throwing warning in console for taking too long
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addAnimal(this.state)
        // Above addAnimal() is same as below when using connect:
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

export default connect(null, { addAnimal })(NewAnimal);

// Above is doing same as:
// const mapDispatchToProps = dispatch => {
//     return {
//       addAnimal: (animal) => {
//         dispatch(addAnimal(animal))
//       }
//     };
// };
// export default connect(null, mapDispatchToProps)(NewAnimal);