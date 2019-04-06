import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import SaveContentsBtn from './SaveContentsBtn/SaveContentsBtn.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

const styles = theme => ({
  buttonContainer: {
    display: 'inline-block',
    marginLeft: theme.spacing.unit * 2,
    '& > button': {
      marginLeft: theme.spacing.unit,
    },
  },
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div>
          <IconButton color="secondary">
            <ImportContactsRoundedIcon />
          </IconButton>
          <Typography inline>故事書</Typography>

          <div className={classes.buttonContainer}>
            <Button variant="outlined" size="small" color="secondary">
              <PlaylistAddCheckRoundedIcon />
              目錄管理
            </Button>
            <SaveContentsBtn />
          </div>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
