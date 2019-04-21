import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';

class SaveContentsBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleClickSubmit() {
    alert(JSON.stringify({
      fileId: this.props.fileId ? this.props.fileId : '',
      content: this.props.editor.getContents(),
    }));
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
