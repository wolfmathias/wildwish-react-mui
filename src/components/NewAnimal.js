import React, { Component } from 'react';
import { connect } from 'react-redux';

// Unique id generator
import uuid from 'uuid'

// addAnimal action for redux store
import { addAnimal } from '../actions/animals';

class NewAnimal extends Component {
   
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    // TODO: have Submit redirect to either animal index or animal show page
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addAnimal({...this.state, id: uuid()})
    }
    
    // TODO: Separate form into componenents with styles
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

// connect() is provided by redux library
// First arg is to map state, second arg is to map dispatch actions
export default connect(null, { addAnimal })(NewAnimal);
// { addAnimal } is ES6 shorthand for { addAnimal: addAnimal }

// Above is doing same as:
// const mapDispatchToProps = dispatch => {
//     return {
//       addAnimal: (animal) => {
//         dispatch(addAnimal(animal))  // dispatch() provided by redux library
//       }
//     };
// };
// export default connect(null, mapDispatchToProps)(NewAnimal);
