import React from 'react';

import Grid from '@material-ui/core/Grid';
import Donation from './Donation'

export default function DonationList(props) {
    const donationCards = props.donations.map(donation => {
        return (
            <Donation donation={donation} key={donation.id}/>
        )
    })
    

    return (
        <Grid container>
            {donationCards}
        </Grid>
    )
}