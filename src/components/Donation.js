import React from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'


export default function Donation(props) {
    
    return (
        <Grid item xs={12}>
            <Paper variant="outlined" elevation={0}>
                <Typography variant="h5" component="h2">
                    {props.donation.id}
                </Typography>
            </Paper>
        </Grid>
    )
}

