import React from 'react';
import SaveContentsBtn from './SaveContentsBtn/SaveContentsBtn.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Header extends React.Component {
  render() {
    return (
      <>
        <div>
          Header
          <SaveContentsBtn />
        </div>
      </>
    );
  }
}

export default Header;
