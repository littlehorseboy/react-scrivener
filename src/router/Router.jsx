import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute.jsx';
import Login from '../pages/Login/Login.jsx';
import Register from '../pages/Register/Register.jsx';
import Scrivener from '../pages/Scrivener/Scrivener.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Hello extends React.Component {
  render() {
    return <h1>Hello! {this.props.match.params.userName}</h1>;
  }
}

Hello.propTypes = {
  match: PropTypes.object,
};

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        {/* <ul>
          <li>
            <Link to="/">回到首頁</Link>
          </li>
          <li>
            <Link to="/about">關於我們</Link>
          </li>
          <li>
            <Link to="/hello/horse">用 Component 渲染組件</Link>
          </li>
          <li>
            <Link to="/hey/QQ">用 render 渲染組件</Link>
          </li>
        </ul>

        <hr /> */}

        <PrivateRoute exact path='/' component={Scrivener} />
        <Route path='/book/:file_id' component={Scrivener} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/hello/:userName' component={Hello} />
        <Route path='/hey/:userName' render={props => <h1>Hey! {props.match.params.userName}</h1>} />
      </HashRouter>
    );
  }
}

export default Router;
