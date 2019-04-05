import React from 'react';
import ScrivenerWidget from './ScrivenerWidget/ScrivenerWidget.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class RightPaper extends React.Component {
  render() {
    return (
      <>
        <ScrivenerWidget />
      </>
    );
  }
}

export default RightPaper;
