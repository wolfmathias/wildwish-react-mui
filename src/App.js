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
// import animals from './data/Animals';
// import wishes from './data/Wishes';
import { fetchAnimals } from './actions/animals';

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

// const donations = [
//   {
//     id: 1,
//     donor_id: 1,
//     wish_id: 1,
//     created_at: "Time Created"
//   },
//   {
//     id: 2,
//     donor_id: 2,
//     wish_id: 2,
//     created_at: "Time Created"
//   },
//   {
//     id: 3,
//     donor_id: 3,
//     wish_id: 3,
//     created_at: "Time Created"
//   }
// ]

// App renders navigation bar
// If user is logged out landing page will be displayed
class App extends React.Component {
  // state = {
  //   animals: [],
  //   // donations: donations,
  //   wishes: []
  // }
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchAnimals()
  }

  render() {
   console.log(this.props)
    return (
      <>
      <Router>
        <NavBar/>
        <Container>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/about" component={About}/> */}
            <Route path="/animals" render={routerProps => <AnimalsIndex {...routerProps} animals={this.props.animals}/>} addAnimal={this.props.addAnimal}/>
            {/* <Route path="/newanimal" render={routerProps => <NewAnimal {...routerProps} animals={this.state.animals}/>} /> */}
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
  console.log('inMapStateToProps:', state)
  return {
    animals: state.AnimalsReducer.animals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnimals: () => dispatch(fetchAnimals())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Below does same thing as above:
// export default connect(mapStateToProps, { fetchAnimals })(App);