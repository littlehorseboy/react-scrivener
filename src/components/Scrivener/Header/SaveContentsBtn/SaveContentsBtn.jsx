import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';

/* global FETCH_URL */

class SaveContentsBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleClickSubmit() {
    Axios({
      method: 'put',
      url: `${FETCH_URL}/api/file`,
      data: {
        fileId: this.props.fileId ? this.props.fileId : '',
        content: this.props.editor.getContents(),
      },
    }).then((response) => {
      if (response.data) {
        debugger;
      } else {
        debugger;
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <>
        <Button variant="outlined" size="small" color="secondary" onClick={this.handleClickSubmit}>
          <SaveOutlinedIcon />
          儲存
        </Button>
      </>
    );
  }
}

SaveContentsBtn.propTypes = {
  fileId: PropTypes.string,
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
