import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavBar from './components/NavBar'

import AnimalsIndex from './components/AnimalsIndex';
import Home from './components/Home';
import Login from './components/Login';

import animals from './data/Animals';
import wishes from './data/Wishes';

import { BrowserRouter as Router, Route } from 'react-router-dom';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
export default class App extends React.Component {
  state = {
    animals: animals,
    donations: donations
  }
  
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

  changeState(state = state, action) {
    switch (action.type) {

      case 'INCREASE_COUNT':
        return { count: state.count + 1 }

      default:
        return state;
    }
  }

  dispatch(action){
    this.state = this.changeState(this.state, action)
    this.render()
  }

  
  
  render() {
   
    return (
      <>
      <Router>
        <NavBar/>
        <Container>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/about" component={About}/> */}
            <Route path="/animals" render={routerProps => <AnimalsIndex {...routerProps} animals={this.state.animals}/>} />
            {/* <Route path="/donations" render={routerProps => <DonationsIndex {...routerProps} donations={this.state.donations}/>} /> */}
            <Route path="/login" component={Login}/>
        </Container>
      </Router>
      <Copyright/>
      </>
    )
  }

  // Initialize state?
  // let store = createStore(reducer) 
  // store.dispatch({ type: '@@INIT' });
}

// const mapStateToProps = state => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);