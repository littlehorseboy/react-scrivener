import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';
import { addScrivener } from '../../../actions/scrivener';

const styles = {
  editor: {
    height: 'calc(100% - 42px)',
    overflowY: 'auto',
  },
};

class ScrivenerWidget extends React.Component {
  constructor(props) {
    super(props);
    this.toolbarRef = React.createRef();
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    const editor = new Quill(this.editorRef.current, {
      bounds: this.editorRef.current,
      modules: {
        toolbar: [
          [{ font: [] }, { size: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ script: 'super' }, { script: 'sub' }],
          [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['direction', { align: [] }],
          ['link', 'image', 'video', 'formula'],
          ['clean'],
        ],
      },
      placeholder: 'Compose...',
      theme: 'snow',
      // debug: 'info',
    });

    this.props.addScrivener(editor);
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div ref={this.editorRef} className={classes.editor}></div>
      </>
    );
  }
}

ScrivenerWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  addScrivener: PropTypes.func.isRequired,
};

// connect
const mapDispatchToProps = dispatch => ({
  addScrivener(editor) {
    dispatch(addScrivener(editor));
  },
});

const ConnectScrivenerWidget = connect(
  null,
  mapDispatchToProps,
)(ScrivenerWidget);

export default withStyles(styles)(ConnectScrivenerWidget);
