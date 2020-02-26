import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavBar from './components/NavBar'
import WishCardGrid from './components/wishcard/WishCardGrid';

import DonateForm from './components/DonateForm';
import DonationList from './components/DonationList';
import AnimalGrid from './components/animal/AnimalGrid';

import animals from './data/Animals';
import wishes from './data/Wishes';

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
export default function App(props) {
  return (
    // <Container >
    //     <NavBar/>
    //     {/* <DonateForm/> */}
    //     <WishCardGrid wishes={wishes} />
    //     {/* <DonationList donations={donations} /> */}
    //     <AnimalGrid animals={animals}/>
    // </Container>

    <Router>
      <div>
        <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/animals" component={Animals}/>
          <Route path="/login" component={Login}/>
      </div>
    </Router>
  );
}
