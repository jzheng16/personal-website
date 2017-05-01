'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';


import Home from './components/Home';
import store from './store';
import Jokes from './components/Jokes';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import NotFound from './components/NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
