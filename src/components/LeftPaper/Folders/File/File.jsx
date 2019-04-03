import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const styles = theme => ({
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  listItemText: {
    paddingLeft: 0,
  },
});

const contents = [
  {
    id: 'file-7ab1cab8-f3a3-4fc1-a10d-6e0312c046c2',
    content: '{"ops":[{"insert":"測試內容\n"}]}',
  },
  {
    id: 'file-7ab1cab8-f3a3-4fc1-a10d-6e03',
    content: '{"ops":[{"attributes":{"bold":true},"insert":"測試標題"},{"attributes":{"align":"center"},"insert":"\n"},{"insert":"測試內容\n"}]}',
  },
];

class File extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const content = contents.find(data => data.id === this.props.file.id);
    if (content) {
      this.props.editor.setContents(JSON.parse(content.content.replace(/\n/g, '\\n')));
    } else {
      this.props.editor.setContents('');
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem button onClick={this.handleClick} className={classes.listItem}>
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
};

// connect
const mapStateToProps = state => ({
  editor: state.scrivenerReducer.editor,
});

const ConnectFile = connect(
  mapStateToProps,
)(File);

export default withStyles(styles)(ConnectFile);
