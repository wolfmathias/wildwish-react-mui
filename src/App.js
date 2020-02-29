// React imports
import React from 'react';

// Material UI components
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Local components
import NavBar from './components/NavBar'
import AnimalsIndex from './components/AnimalsIndex';
import Home from './components/Home';
import Login from './components/Login';
import NewAnimal from './components/NewAnimal';

// Data
import animals from './data/Animals';
import wishes from './data/Wishes';

// For router and redux
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAnimal } from './actions/animals';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Matt Plichta
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const donations = [
  {
    id: 1,
    donor_id: 1,
    wish_id: 1,
    created_at: "Time Created"
  },
  {
    id: 2,
    donor_id: 2,
    wish_id: 2,
    created_at: "Time Created"
  },
  {
    id: 3,
    donor_id: 3,
    wish_id: 3,
    created_at: "Time Created"
  }
]

// App renders navigation bar
// If user is logged out landing page will be displayed
class App extends React.Component {
  state = {
    animals: animals,
    donations: donations
  }
  

  render() {
   
    return (
      <>
      {/* <div className="App">
      <button onClick={this.handleOnClick}>BUTTON FOR PLAYING WITH REDUX STORE</button>
      <p>{this.props.animalList.length}</p>
      </div> */}
      <Router>
        <NavBar/>
        <Container>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/about" component={About}/> */}
            <Route path="/animals" render={routerProps => <AnimalsIndex {...routerProps} animals={this.state.animals}/>} addAnimal={this.props.addAnimal}/>
            <Route path="/newanimal" render={routerProps => <NewAnimal {...routerProps} animals={this.state.animals}/>} />
            {/* <Route path="/donations" render={routerProps => <DonationsIndex {...routerProps} donations={this.state.donations}/>} /> */}
            <Route path="/login" component={Login}/>
        </Container>
      </Router>
      <Copyright/>
      </>
    )
  }
}

// Take the state from the store and map them to props
// export default connect(state => ({ animals: state.animals }), { addAnimal: addAnimal })(App);

// Above line is composed of the following:
const mapStateToProps = state => {
  return {
    animals: state.animals
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addAnimal: () => dispatch({ type: 'ADD_ANIMAL' })
//   };
// };
//
// OR:
// Below, addAnimal() can accept a payload of an animal as `addAnimal(animal)`, where `animal` is an object {name: "", species: "", etc}
const mapDispatchToProps = dispatch => {
  return {
    addAnimal: () => {
      dispatch(addAnimal())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

 // For Redux store:
  // createStore(reducer) {
  //   let state;
  
  //   function dispatch(action) {
  //     state = reducer(state, action);
  //     render();
  //   }
  
  //   function getState() {
  //     return state;
  //   };
  
  //   return {
  //     dispatch,
  //     getState
  //   };
  // };
  //
  // let store = createStore()

  // Redux dispatch method is the following:
  // dispatch(action){
  //   this.state = this.changeState(this.state, action)
  //   this.render()
  // }

  // For playing with redux
  // handleOnClick = event => {
  //   this.props.increaseCount();
  // };