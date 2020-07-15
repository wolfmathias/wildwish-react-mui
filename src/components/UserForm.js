import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { addUser } from '../actions/userActions';

class UserForm extends Component {

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // action is currently not defined anywhere and not used, define in parent component?
    // will be used to determine if POST route should be '/sign_up' or '/sign_in'
    handleSubmit = (event, action) => {
        event.preventDefault()
        
        if (email && password) {
            this.props.addUser(email, password, action);
        }
    }

    render() {
        return (
            <form name="login" onSubmit={handleSubmit}>
                <TextField 
                    fullWidth 
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    required onChange={this.handleInputChange}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    required
                    onChange={this.handleInputChange}
                    style={{ marginTop: 10 }}
                />
                <Button type="submit" color="primary" variant="outlined">
                    Submit
                </Button>
            </form>
        )
    }
}

export default connect(null, { addUser })(UserForm);