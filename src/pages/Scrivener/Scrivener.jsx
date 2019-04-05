import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Scrivener/Header/Header.jsx';
import LeftPaper from '../../components/Scrivener/LeftPaper/LeftPaper.jsx';
import RightPaper from '../../components/Scrivener/RightPaper/RightPaper.jsx';

const styles = {
  header: {
    height: '7%',
  },
  paperContainer: {
    height: '93%',
    display: 'flex',
  },
  leftPaper: {
    flexGrow: 1,
    overflowY: 'auto',
    maxWidth: 300,
  },
  rightPaper: {
    flexGrow: 3,
    overflowY: 'auto',
  },
};

class Scrivener extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.paperContainer}>
          <div className={classes.leftPaper}>
            <LeftPaper />
          </div>
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
