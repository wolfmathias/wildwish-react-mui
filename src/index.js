import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import Root from './Root';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

ReactDOM.render(<Root store={store} />, document.getElementById('root'))