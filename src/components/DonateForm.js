import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';

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
    const [state, setState] = React.useState({
        checked: true
    });

    return (
        <Paper>
            <Typography variant="body1">Donate to Bolero</Typography>
            <form className={classes.root}>
                <RadioGroup color="primary" aria-label="outlined primary button group">
                    <Grid>
                        <FormControl value="10" control={<Radio />} label="$10" />
                        <FormControl value="15" control={<Radio />} label="$15" />
                        <FormControl value="20" control={<Radio />} label="$20" />
                    </Grid>
                </RadioGroup>
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
                <FormControlLabel
                    control={<Checkbox color="primary"/>}
                    label="Create account after donation"
                />
                <Button variant="contained" size="large" color="primary">Donate</Button>
            </form>
        </Paper>
    )

}