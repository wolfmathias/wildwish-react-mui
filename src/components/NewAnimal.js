import React, { Component } from 'react';

// formik hook for form
import { useFormik } from 'formik';

// yup for validation
import * as Yup from 'yup';

// connects component's state to redux store
import { connect } from 'react-redux';

// addAnimal action for redux store
import { addAnimal } from '../actions/animalActions';
import { TextField, Button } from '@material-ui/core';

class NewAnimal extends Component {
   
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    // TODO: have Submit redirect to either animal index or animal show page
    // Handle by making this form a modal window and closing it when submitting
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addAnimal({...this.state})
    }
    
    // TODO: Separate form into componenents with styles
    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
            <h1>Form to create new animal.</h1>
            <p>It doesn't redirect after submitting yet. Will be handled by using form modal and closing after getting a success response from the server.</p>
            
            {/* <input
            type="text"
            id="name"
            onChange={this.handleInputChange}
            placeholder="name"
            fullWidth
            />
        
            <input
            type="text"
            id="species"
            onChange={this.handleInputChange}
            placeholder="species"
            /> */}
            
            <TextField id="name" label="Name" fullWidth onChange={this.handleInputChange}/>
            <TextField id="species" label="Species" fullWidth onChange={this.handleInputChange}/>
            <TextField 
                id="bio" 
                label="Bio" 
                multiline 
                rows="3"
                placeholder="Who is their favorite keeper and why is is you?"
                // variant="outlined"
                fullWidth
                onChange={this.handleInputChange}
            />
            <Button type="submit" variant="contained">Submit</Button>
            </form>
        )
    }
}

// written using formik
function FormikNewAnimalForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

// export default FormikNewAnimalForm
export default connect(null, { addAnimal })(NewAnimal);

// connect() is provided by redux library
// First arg is to map state, second arg is to map dispatch actions
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
