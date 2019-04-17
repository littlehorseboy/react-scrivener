import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Scrivener/Header/Header.jsx';
import LeftPaper from '../../components/Scrivener/LeftPaper/LeftPaper.jsx';
import RightPaper from '../../components/Scrivener/RightPaper/RightPaper.jsx';

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
  header: {
    boxShadow: theme.shadows[1],
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  paperContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    display: 'flex',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
    },
  },
  leftPaper: {
    flexGrow: 1,
    overflowY: 'auto',
  },
  rightPaper: {
    flexGrow: 5,
    overflowY: 'auto',
    minHeight: 600,
  },
});

class Scrivener extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.paperContainer}>
          <div className={classes.leftPaper}>
            <LeftPaper />
          </div>
          <div className={classes.rightPaper}>
            <RightPaper fileId={this.props.match.params.file_id} />
          </div>
        </div>
      </div>
    );
  }
}

Scrivener.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Scrivener);
