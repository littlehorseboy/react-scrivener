import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { fetchFile } from '../../../../../actions/file';

const styles = theme => ({
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  listItemText: {
    paddingLeft: 0,
  },
});

class File extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchFile(this.props.file.id);
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem
        button
        onClick={this.handleClick}
        className={classes.listItem}
        component={Link}
        to={`/book/${this.props.file.id}`}
      >
        <ListItemIcon>
          <InsertDriveFileIcon />
        </ListItemIcon>
        <ListItemText inset primary={this.props.file.title} className={classes.listItemText} />
      </ListItem>
    );
  }
}

File.propTypes = {
  classes: PropTypes.object.isRequired,
  editor: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
  fetchFile: PropTypes.func.isRequired,
};

// connect
const mapStateToProps = state => ({
  editor: state.scrivenerReducer.editor,
});

const mapDispatchToProps = dispatch => ({
  fetchFile(fileId) {
    dispatch(fetchFile(fileId));
  },
});

const ConnectFile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(File);

export default withStyles(styles)(ConnectFile);
