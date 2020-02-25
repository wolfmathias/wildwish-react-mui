import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavBar from './components/NavBar'
import WishCardGrid from './components/wishcard/WishCardGrid';

import DonateForm from './components/DonateForm'
import DonationList from './components/DonationList';

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
export default function App() {
  return (
   
    <Container >
        <NavBar/>
        {/* <DonateForm/> */}
        {/* <WishCardGrid /> */}
        <DonationList donations={donations} />
    </Container>
  );
}
