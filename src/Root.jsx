import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';
import './root.scss';
import 'core-js/features/promise';
import 'core-js/features/array/find';
import 'core-js/features/object/assign';
import 'core-js/features/weak-map';
import Router from './router/Router.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
  zIndex: {
    loading: 1600,
  },
});

class Root extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </MuiThemeProvider>
    );
  }
}

export default Root;
