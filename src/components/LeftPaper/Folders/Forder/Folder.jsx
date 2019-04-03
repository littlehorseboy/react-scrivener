import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';
import File from '../File/File.jsx';

const styles = theme => ({
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  listItemText: {
    paddingLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <React.Fragment key={this.props.folder.id}>
          <ListItem button onClick={this.handleClick} className={classes.listItem}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText
              inset
              primary={this.props.folder.title}
              className={classes.listItemText}
            />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" className={classes.nested} disablePadding>
              {this.props.folder.children.map(itemTwo => (
                itemTwo.type === 'file'
                  ? <File key={itemTwo.id} file={itemTwo} />
                  : <WithStylesFolder key={itemTwo.id} folder={itemTwo} />
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      </>
    );
  }
}

Folder.propTypes = {
  classes: PropTypes.object.isRequired,
  folder: PropTypes.object.isRequired,
};

const WithStylesFolder = withStyles(styles)(Folder);

export default WithStylesFolder;
