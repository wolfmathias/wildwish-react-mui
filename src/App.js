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
import About from './components/About';

// Static data
// import animals from './data/Animals';
// import wishes from './data/Wishes';

// Actions
import { fetchAnimals } from './actions/animalActions';
import { fetchWishes } from './actions/wishActions';

// For router and redux
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import { addAnimal } from './actions/animals';

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


// If user is logged out landing page will be displayed
class App extends React.Component {
  // state looks something like:
  // state = {
  //   animalStore: {animals: [], isFetching: false}
  //   donationStore: {donations: [], isFetching: false}
  //   wishStore: {wishes: [], isFetching: false}
  // }
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchAnimals()
    this.props.fetchWishes()
    // fetchWishes
  }

  render() {
  //  console.log(this.props)
    return (
      <>
      <Router>
        <NavBar/>
        <Container>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/animals" render={routerProps => <AnimalsIndex {...routerProps}/>} />
            {/* <Route path="/donations" render={routerProps => <DonationsIndex {...routerProps} donations={this.state.donations}/>} /> */}
            <Route path="/login" component={Login}/>
        </Container>
      </Router>
      <Copyright/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('inMapStateToProps:', state)
  return {
    animals: state.animals,
    wishes: state.wishes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnimals: () => dispatch(fetchAnimals()),
    fetchWishes: () => dispatch(fetchWishes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Below does same thing as above:
// export default connect(mapStateToProps, { fetchAnimals, fetchWishes })(App);