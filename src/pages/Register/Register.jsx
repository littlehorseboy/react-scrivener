import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlined from '@material-ui/icons/LockOutlined';
import RegisterSubmitButton from '../../components/Register/RegisterSubmitButton/RegisterSubmitButton.jsx';
import { login } from '../../actions/login';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4ecdc4',
  },
  paperContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: 'calc(100% - 24px)',
    padding: '24px 8px 0 8px',
    position: 'relative',
  },
  '@media (min-width: 1024px)': {
    paper: {
      width: 400,
    },
  },
  textFieldRow: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  icon: {
    color: '#4ecdc4',
    fontSize: 35,
  },
  buttonRow: {
    margin: theme.spacing.unit * 2,
  },
  loadingOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    '&.hide': {
      display: 'none',
    },
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,

      account: 'littlehorseboy',
      password: 'test',
      email: 'littlehorseboy@gmail.com',

      loading: false,
    };
    this.loadingOverlayShow = this.loadingOverlayShow.bind(this);
    this.loginSuccessful = this.loginSuccessful.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  loadingOverlayShow(bool) {
    this.setState({
      loading: bool,
    });
  }

  loginSuccessful(userInfo) {
    this.props.login(userInfo);
    this.setState({
      redirectToReferrer: true,
    });
  }

  render() {
    const { classes } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className={classes.root}>
        <div className={classes.paperContainer}>
          <Paper className={classes.paper}>
            <Typography variant="h5" align="center">
              Sign Up
            </Typography>
            <div className={classes.textFieldRow}>
              <AccountCircleOutlinedIcon className={classes.icon} color="secondary" />
              <TextField
                fullWidth
                label="帳號"
                className={classes.textField}
                value={this.state.account}
                onChange={this.handleChange('account')}
                margin="normal"
              />
            </div>

            <div className={classes.textFieldRow}>
              <LockOutlined className={classes.icon} color="secondary" />
              <TextField
                type="password"
                fullWidth
                label="密碼"
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
              />
            </div>

            <div className={classes.textFieldRow}>
              <EmailOutlinedIcon className={classes.icon} color="secondary" />
              <TextField
                fullWidth
                label="電子信箱"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
            </div>

            <div className={classes.buttonRow}>
              <RegisterSubmitButton
                account={this.state.account}
                password={this.state.password}
                email={this.state.email}
                loadingOverlayShow={this.loadingOverlayShow}
                loginSuccessful={this.loginSuccessful}
              />
            </div>

            <div className={classNames(classes.loadingOverlay, { hide: !this.state.loading })}>
              <CircularProgress />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

// connect
const mapDispatchToProps = dispatch => ({
  login(isAuthenticated) {
    dispatch(login(isAuthenticated));
  },
});

const ConnectLogin = connect(
  null,
  mapDispatchToProps,
)(Login);

export default withStyles(styles)(ConnectLogin);
