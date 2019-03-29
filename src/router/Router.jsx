import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        <>
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

          <Route exact path='/' component={Scrivener} />
          <Route path='/about' component={Scrivener} />
          <Route path='/hello/:userName' component={Hello} />
          <Route path='/hey/:userName' render={props => <h1>Hey! {props.match.params.userName}</h1>} />
        </>
      </HashRouter>
    );
  }
}

export default Router;
