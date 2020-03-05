import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';

const About = () => {
    return (
        <Container>
            <Paper elevation={0}>
                <Typography variant="h2">
                    About WildWish
                </Typography>
                <Typography variant="body1">
                    The idea that made me decide to start learning programming, WildWish is the culmination of years of experience in donating toys to zoo animals.
                </Typography>
                <br/>
                <Typography variant="body1">
                    After creating an account, zookeepers (or their zoo) can add their animals. Each animal has a list of wishes. These 
                    wishes are featured on the landing page, where users can donate to each one. 
                </Typography>
                <br/>
                <Typography variant="body2">
                    Major TODOs:
                <ul> 
                    <li><Typography variant="body2">ADD STYLING TO PAGES</Typography></li>
                    <li><Typography variant="body2">ADD FULL CRUD ACTIONS</Typography></li>
                    <li><Typography variant="body2">ADD IMAGE UPLOAD CAPABILITIES (NEED TO CONFIGURE ACTIVESTORAGE WITH RAILS</Typography></li>
                    <li><Typography variant="body2">CREATE LANDING PAGE</Typography></li>
                    <li><Typography variant="body2">ACCOUNT PAGE FOR USERS</Typography></li>
                    <li><Typography variant="body2">DONATION CAPABILITIES</Typography></li>
                    <li><Typography variant="body2">SO MUCH MORE OMG</Typography></li>
                </ul>
                </Typography>
                
            </Paper>
        </Container>
    )
}

export default About