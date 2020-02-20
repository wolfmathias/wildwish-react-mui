import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import NavBar from './components/NavBar'
import CardFront from './components/CardFront'
import WishCardGrid from './components/WishCardGrid';

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

// App renders navigation bar
// If user is logged out landing page will be displayed
export default function App() {
  return (
   
    <Container >
        <NavBar/>
        <WishCardGrid />
    </Container>
  );
}
