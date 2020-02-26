import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavBar from './components/NavBar'
import WishCardGrid from './components/wishcard/WishCardGrid';

import DonateForm from './components/DonationsForm';
import DonationList from './components/DonationsIndex';
import AnimalGrid from './components/animal/AnimalGrid';

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

// TODO: Add routes and navbar links

// App renders navigation bar
// If user is logged out landing page will be displayed
export default class App extends React.Component {
  state = {
    animals: animals,
    donations: donations
  }
  
  render() {
    // <Container >
    //     <NavBar/>
    //     {/* <DonateForm/> */}
    //     <WishCardGrid wishes={wishes} />
    //     {/* <DonationList donations={donations} /> */}
    //     <AnimalGrid animals={animals}/>
    // </Container>
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
      </>
    )
  }
}
