import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Container, Paper, Typography, TextField, Grid, Link, Button } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { addUser } from '../actions/userActions';

// Temp secret key while building login form
const GOOGLE_OAUTH_ID = process.env.REACT_APP_DEV_GOOGLE_OAUTH_ID;
const GOOGLE_OAUTH_KEY = process.env.REACT_APP_DEV_GOOGLE_OAUTH_KEY
const FACEBOOK_APP_ID = "554005682058138"

// styles copied from example form to play with
const useStyles = makeStyles((theme) => ({
    
    login: {
      marginTop: theme.spacing(5),
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
      alignItems: 'center',
    }
}));

class UserForm extends Component {
    // classes = useStyles();

    // React hooks for state
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

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