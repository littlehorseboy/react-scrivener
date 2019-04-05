import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Folder from './Forder/Folder.jsx';
import File from './File/File.jsx';

const styles = theme => ({
  list: {
    width: '100%',
  },
  listSubheader: {
    lineHeight: '24px',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Folders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [
        { id: 'file-7ab1cab8-f3a3-4fc1-a10d-6e0312c046c2', type: 'file', title: '第1章 - 第1話' },
        {
          id: `folder-${uuidv4()}`,
          type: 'folder',
          title: '第2章',
          children: [
            { id: 'file-7ab1cab8-f3a3-4fc1-a10d-6e03', type: 'file', title: '第2章 - 第1話' },
            { id: `file-${uuidv4()}`, type: 'file', title: '第2章 - 第2話' },
          ],
        },
        { id: `file-${uuidv4()}`, type: 'file', title: '第3章 - 第1話' },
        { id: `file-${uuidv4()}`, type: 'file', title: '第4章 - 第1話' },
        {
          id: `folder-${uuidv4()}`,
          type: 'folder',
          title: '第5章',
          children: [
            { id: `file-${uuidv4()}`, type: 'file', title: '第5章 - 第1話' },
            {
              id: `folder-${uuidv4()}`,
              type: 'folder',
              title: '第5-1章',
              children: [
                { id: `file-${uuidv4()}`, type: 'file', title: '第5-1章 - 第1話' },
                { id: `file-${uuidv4()}`, type: 'file', title: '第5-1章 - 第2話' },
              ],
            },
          ],
        },
      ],
      open: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <List
          component="nav"
          subheader={<ListSubheader component="div" className={classes.listSubheader}>Binder</ListSubheader>}
          className={classes.list}
          disablePadding
        >
          {this.state.folders.map(itemOne => (
            itemOne.type === 'file'
              ? <File key={itemOne.id} file={itemOne} />
              : <Folder key={itemOne.id} folder={itemOne} />
          ))}
        </List>
      </>
    );
  }
}

Folders.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Folders);
