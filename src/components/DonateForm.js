import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// TODO: style so form inputs look good on form
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 173,
  },
}));

export default function DonateForm() {
    const classes = useStyles();

    return (
        <Paper>
            <Typography variant="body1">Donate to Bolero</Typography>
            <form className={classes.root}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <TextField
                    id="email"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder=""
                    helperText=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    required
                />
                <TextField
                    id="firstName"
                    label="First Name"
                    style={{ margin: 8 }}
                    
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    style={{ margin: 8 }}
                    
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <Button variant="contained" size="large" color="primary">Donate</Button>
            </form>
        </Paper>
    )

}