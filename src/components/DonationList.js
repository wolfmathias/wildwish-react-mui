import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Donation from './Donation'

export default function DonationList(props) {
    const donationCards = props.donations.map(donation => {
        <Grid item>
            <Paper>
                <Donation donation={donation} key={donation.id}/>
            </Paper>
        </Grid>
    })
    
    return (
        <Grid container>
            {donationCards}
        </Grid>
    )
}