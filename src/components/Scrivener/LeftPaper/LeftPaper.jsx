import React from 'react';
import Folders from './Folders/Folders.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class LeftPaper extends React.Component {
  render() {
    return (
      <>
        <Folders />
      </>
    );
  }
}

export default LeftPaper;
