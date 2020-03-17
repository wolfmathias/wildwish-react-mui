import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid';
import CardFront from './CardFront';
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function WishCardGrid(props) {
  const classes = useStyles();
  
  // set initial state
  const [state, setState] = React.useState({
    species: "all"
  })
  
  // function that updates state
  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  // list of species grabbed from wishes endpoint for option values
  const speciesOptions = () => {
    let uniqueSpecies 
    
    return props.wishes.map(wish => {
      return (<option key={wish.id} value={wish.animal.species}>{wish.animal.species}</option>)
    })
  }
  
  // get filtered list of animals
  const filteredWishes = () => {
    return state.species === "all" ? props.wishes : props.wishes.filter(wish => wish.animal.species === state.species)
  }
  
  // To render list of animals passed in as props
  const renderWishes =
  filteredWishes().map(wish => {
    return <CardFront wish={wish} key={wish.id}/>
  })
  return (
    <div>
      <InputLabel htmlFor="age-native-simple">Species</InputLabel>
      <Select
          native
          value={state.species}
          onChange={handleChange}
          inputProps={{
            name: 'species',
            id: 'species',
          }}
        >
          <option value="all">All</option>
          {speciesOptions()}
          {/* <option value="Mouse">Mouse</option>
          <option value="Seal">Seal</option>
          <option value="Porcupine">Porcupine</option> */}
      
        </Select>

    <div className={classes.root}>
      
      <Grid container spacing={4}>
        {renderWishes}
      </Grid>
    </div>
    </div>
  );
}

/*

state
  props: wishes: [{}, {}, {}]
  state: visibilityFilter
  
action
  select dropdown changed by user => set state depending on value of select option when

display logic
  wish.animal.species
  filteredWishes('species: Tiger').map
  select dropdown above grid

*/