import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SaveContentsBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleClickSubmit() {
    alert(JSON.stringify(this.props.editor.getContents()));
  }

  render() {
    return (
      <>
          <button onClick={this.handleClickSubmit}>儲存</button>
      </>
    );
  }
}

SaveContentsBtn.propTypes = {
  editor: PropTypes.object.isRequired,
};

// connect
const mapStateToProps = state => ({
  editor: state.scrivenerReducer.editor,
});

const ConnectSaveContentsBtn = connect(
  mapStateToProps,
)(SaveContentsBtn);

export default ConnectSaveContentsBtn;
