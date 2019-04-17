import React from 'react';
import PropTypes from 'prop-types';
import ScrivenerWidget from './ScrivenerWidget/ScrivenerWidget.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class RightPaper extends React.Component {
  render() {
    return (
      <>
        <ScrivenerWidget fileId={this.props.fileId} />
      </>
    );
  }
}

RightPaper.propTypes = {
  fileId: PropTypes.string,
};

export default RightPaper;
