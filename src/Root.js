import React from 'react';
import PropTypes from 'prop-types'
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

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root