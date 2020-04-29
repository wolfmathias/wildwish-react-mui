import React from 'react';
// import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { Typography, Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import DefaultImage from './default_img.jpg'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function ShowAnimal(props) {
    const classes = useStyles();

    // The <Route> that rendered this component has a path of `/topics/:animalId`
    // The `:animalId` portion of the URL indicates a placeholder that we can get from `useParams()`
    // This is an alternative to props.match.params.animalId (props.match provided by <Route> parent component)
    let { animalId } = useParams()

    // Use animalId to filter the list of animals provided by the store
    let animal = props.animals.filter(animal => animal.id === parseInt(animalId))[0]
    
    // Put content in a constant so it can be rendered based on a conditional
    const renderAnimal = (animal) => {
        return (
            <div className={classes.root}>
            {/* <img src={animal.img || DefaultImage} alt={animal.name}/> */}
            <Container>
            <Paper elevation={0}>
            <Typography variant="h4" >
                {animal.name}
            </Typography>
            <Typography variant="subtitle2" >
                {animal.species}
            </Typography>
            <Typography variant="body1">
                {animal.bio}
            </Typography>
            <Typography variant="body1" >
                This is the animal's show page. This page will include the picture, bio, and a list of active and fulfilled wishes.
            </Typography>
            <Typography variant="body2" >
                Actions on this page are avaiable by user type. If a user is logged in and this animal belongs to the user, UI for CRUD actions will be displayed.
            </Typography>
            </Paper>
            </Container>
            </div>
        )
    }

    return ( animal ? renderAnimal(animal) : null )
}

// Use redux to connect state from store to current props
// const mapStateToProps = (state) => {
//     return {
//       animals: state.animalStore.animals,
//     };
// };

// Connect component to redux store
// export default connect(mapStateToProps)(ShowAnimal)