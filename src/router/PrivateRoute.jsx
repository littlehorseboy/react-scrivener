import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => (
        rest.isAuthenticated
          ? <Component {...routeProps} />
          : <Redirect to={{ pathname: '/login', state: { from: routeProps.location } }} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

// connect
const mapStateToProps = state => ({
  isAuthenticated: state.loginReducer.isAuthenticated,
});

const ConnectPrivateRoute = connect(
  mapStateToProps,
)(PrivateRoute);

export default ConnectPrivateRoute;
