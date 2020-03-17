# WildWish.org Frontend Example with React and Google Materials-UI

## Purpose and Action

The app allows zoos, zookeepers, and other care professionals to create profiles for their animals, where each animal has a wishlist. 

The individual wishes are available to view, and displayed publicly as a large image element of the animal it belongs to. 

Users are directed to a button to donate, and the amount suggested is programmatically set based on previous amount donated, amount funded, and the total to complete funding.

## Contributing

See planned features and mechanics for builds to contribute, PRs for other features are welcome as well. 

Feel free to change things for performance, security, or style reasons.

Please comment well :)

## Planned features and mechanics

Full CRUD actions for zookeepers to add animals and keep a wishlist for each one.

Users can view their previous donations and each animal associated with that donation.

Users can create a donation without an account, but default is to sigup/login at time of donation.

Users with accounts can view a list of all current wishes (grouped by animal), and donate to choice.

Main page displays featured wishes, sorted using various factors (funding remaining, last donation, physical proximity to user, etc.)

## Material UI 

The Material UI library provides us with styled components that we wrap inside of other components. These simply need to be imported, then they can be rendered inside the parent components.

# Breakdown of components

## Animals Index

Animals Index renders other presentational components. These children components are wrapped in `<Route>` and `<Switch>` components, which are imported from `react-router-dom`. 

As of writing this, `<AnimalsIndex>` can switch between three different components to render depending on the path to route to.

```js
import React from 'react';
import AnimalGrid from './AnimalGrid';
import ShowAnimal from './ShowAnimal';
import { Route, Switch } from 'react-router-dom';
import NewAnimal from './NewAnimal';
import { connect } from 'react-redux';

function AnimalsIndex({match, animals}) {

    return (
        <>
        <Switch>
            <Route exact path="/animals" render={routerProps => <AnimalGrid {...routerProps} animals={animals}/>} />
            <Route path={`${match.url}/new`} render={routerProps => <NewAnimal {...routerProps} animals={animals} /> }/>
            <Route path={`${match.url}/:animalId`} render={routerProps => <ShowAnimal {...routerProps} animals={animals.animals} /> }/>
        </Switch>
        </>
    )
}
```

## Animal Grid

Animal Grid is the index view for a user's list of animals that belong to them. Future features include a list style view on larger screens to make use of the extra space.

Here, we utilize MUI's GridList and GridListTile:

```js
import { GridList, GridListTile, GridListTileBar, ListSubheader } from '@material-ui/core';

function AnimalGrid {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2}>
                    <ListSubheader component="div">
                        User Animals
                    </ListSubheader>
                </GridListTile>
                {renderAnimals}
            </GridList> 
        </div>
    )
}

```

renderAnimals above would map over our 'animals' prop, wrapping each one in more GridListTile components.

Also note `classes.root` in the `<div>` wrapper, this is using `makeStyles()` from the Material UI library to set CSS styles.

`makesStyles` creates an object that sets CSS values for the HTML that our presentational components are rendering. 'theme' is grabbing a global theme, the values of which are configured elsewhere.

```js
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 380
      
    },

    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
```

## New Animal

This is a container component that renders a form to create a new animal, and holds the methods for what to do with the form data on submit.

```js
import React, { Component } from 'react';
// connects component's state to redux store
import { connect } from 'react-redux';
// addAnimal action for redux store
import { addAnimal } from '../actions/animals';

class NewAnimal extends Component {
   
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleOnSubmit = (event) => {
        // stop page from reloading and losing form data when clicking submit
        event.preventDefault();
        this.props.addAnimal({...this.state})
    }
    
    render() {
        return(
            <>
            {renderNewAnimalForm}
            </>
        )
    }
}

// connect() is provided by redux library
// First arg is to map state, second arg is to map dispatch actions
export default connect(null, { addAnimal })(NewAnimal);
```

Redux is handling the state of the app. The `connect()` function, provided by redux, is mapping `addAnimal` to `<NewAnimal>`'s props, which is a function that dispatches an action to `animalsReducer`.

# State, actions, and reducers

## addAnimal

```js
// '/actions/animals.js'

export const addAnimal = (animal) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ANIMALS'})
        fetch('http://localhost:3001/animals', {
           // method, headers and body here
        })
        .then(response => response.json())
        .then(responseJSON => {
            dispatch({ type: 'ADD_ANIMALS', payload: responseJSON })
        })
    }
}
```

Above, we dispatch an action with type `LOADING_ANIMALS` to the reducer. This action simply changes the state's `isFetching` property to true. This boolean can be used in conditional rendering to render a loading spinner if we are waiting for an async request to finish.

Once the request is done, we take the response from the server (this case, the saved 'animal' object we just sent) and push that into our state, while also setting `isFetching` to false.

## AnimalsReducer

```js
export default function AnimalsReducer(
    state = {
        animals: [],
        isFetching: false
    }, 
    action
) {
    console.log(state.animals)
    switch(action.type) { 
        case 'LOADING_ANIMALS':
            return {
                animals: [...state.animals],
                isFetching: true
            };
        
        case 'ADD_ANIMALS':
            return {
                ...state, 
                animals: state.animals.concat(action.payload),
                isFetching: false
            };
    }
}
```

Above we see two case statements on how to handle actions with different types and what to do with those actions' payloads.

Actions are dispatched to the reducer using `dispatch(action)`, where action resembles something like `{type: 'ADD_ANIMALS', payload: {animals}}`. The payload can be a single object, or an array of objects (`{animal}` or `[{animal}, {animal}, etc]`).

## Root Reducer

The reducers are bundled together using the `combine()` from Redux, and saved as `rootReducer`, which is then used to create our store and pass that store down to our app's components.

```js
import { combineReducers } from "redux";
import AnimalsReducer from './AnimalsReducer';
import WishesReducer from './WishesReducer';
 
const rootReducer = combineReducers({
  animalStore: AnimalsReducer,
  wishes: WishesReducer
});
 
export default rootReducer;
```

## Redux Store

The store is created in `index.js` and passed to the root component.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import Root from './Root';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
```

## Root

The `<Root>` component contains the store as a property, and passes this down to a `<Provider>`, which manages the store by listenting to changes in the state and rerendering connected components when a change happens.

```js
import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Router>
          <Route path="/:filter?" component={App} />
        </Router>
      </ThemeProvider>
    </Provider>
);

export default Root
```

## How to use

Clone the [repo](https://github.com/bigcatplichta/wildwish-react-mui):

```sh
git clone git@github.com:bigcatplichta/wildwish-react-mui.git
```

Install it and run:

```sh
npm install
npm start
```

or:

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/bigcatplichta/wildwish-react-mui)