import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'

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
        
        <form className={classes.root}>
            
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
        </form>
        </Paper>
    )

}