import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import lightGreen from '@material-ui/core/colors/lightGreen';
import './root.scss';
import 'core-js/features/promise';
import 'core-js/features/array/find';
import 'core-js/features/object/assign';
import 'core-js/features/weak-map';
import Router from './router/Router.jsx';
import store from './reducers/configureStore';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: teal[400],
    },
    lightGreen,
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
  },
  zIndex: {
    loading: 1600,
  },
});

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Root;
