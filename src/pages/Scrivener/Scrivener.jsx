import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RightPaper from '../../components/RightPaper/RightPaper.jsx';

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
  },
  leftPaper: {
    flexGrow: 1,
  },
  rightPaper: {
    flexGrow: 5,
  },
};

class Scrivener extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <div className={classes.leftPaper}>dasd</div>
          <div className={classes.rightPaper}>
            <RightPaper />
          </div>
        </div>
      </>
    );
  }
}

Scrivener.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Scrivener);
