import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Container, Paper, Typography, TextField, Grid, Link, Button } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { loginUser } from '../actions/userActions';

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

function CreateUser(props) {
    const classes = useStyles();

    // React hooks for state
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmailChange = (event) => {
        setEmail(
            event.target.value
        );
    }
    const handlePasswordChange = (event) => {
        setPassword(
            event.target.value
        );
    }
            
    // For Oauth buttons
    const responseGoogle = (response) => {
        console.log(response);
    }
    const responseFacebook = (response) => {
        console.log(response);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (email && password) {
            props.loginUser(email, password);
        }
    }

    return (
        <Container>
            <Paper elevation={1} >
                <div className={classes.login}>
                <GoogleLogin 
                    clientId={GOOGLE_OAUTH_ID}
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <br />
                <FacebookLogin
                    appId={FACEBOOK_APP_ID}
                    textButton="Continue with Facebook"
                    size="medium"
                    fields="name,email"
                    callback={responseFacebook} 
                />
                <br />
                <Typography>Or continue with email:</Typography>
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
                <br />
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Create an account
                        </Link>
                    </Grid>
                </Grid>
                </div>
            </Paper>
        </Container>
    )
}
export default connect(null, { loginUser })(CreateUser);