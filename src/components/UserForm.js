import React from 'react';
import { connect } from 'react-redux';
import { Container, Paper, TextField, Button } from '@material-ui/core';

import { addUser } from '../actions/userActions';

class UserForm extends Component {

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    // For Oauth buttons
    responseGoogle = (response) => {
        console.log(response);
    }
    responseFacebook = (response) => {
        console.log(response);
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
            <Container>
                <Paper elevation={1} >
                    <div className={classes.login}>
                    <form name="login" onSubmit={handleSubmit}>
                        <TextField 
                            fullWidth 
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            required onChange={handleEmailChange}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            required
                            onChange={handlePasswordChange}
                            style={{ marginTop: 10 }}
                        />
                        <Button type="submit" color="primary" variant="outlined">
                            Submit
                        </Button>
                    </form>
                    </div>
                </Paper>
            </Container>
        )
    }
}

export default connect(null, { addUser })(UserForm);