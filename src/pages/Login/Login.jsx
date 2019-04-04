import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOutlined from '@material-ui/icons/LockOutlined';
import { login } from '../../actions/login';

const styles = theme => ({
  root: {
    width: '100vw',
    height: '100vh',
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
    padding: '8px 8px 0 8px',
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
    '& > label': {
      fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  icon: {
    color: '#4ecdc4',
    fontSize: 35,
  },
  checkboxRow: {
    margin: theme.spacing.unit * 2,
    '& > label > span': {
      fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  buttonRow: {
    margin: theme.spacing.unit * 2,
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit * 2,
    '& > button > span': {
      fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
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
      remenberMe: false,
      register: false,
      forgotPassword: false,
    };
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleForgotPasswordClick = this.handleForgotPasswordClick.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  handleCheckChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.checked,
      });
    };
  }

  handleSubmitClick() {
    this.props.login(true);
    this.setState({
      redirectToReferrer: true,
    });
  }

  handleRegisterClick() {
    this.setState({
      register: !this.state.register,
    });
  }

  handleForgotPasswordClick() {
    this.setState({
      forgotPassword: !this.state.forgotPassword,
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

            <div className={classes.checkboxRow}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.remenberMe}
                    onChange={this.handleCheckChange('remenberMe')}
                    color="secondary"
                  />
                }
                label={this.state.remenberMe ? '但我其實記不住' : '記住我'}
              />
            </div>

            <div className={classes.bottomRow}>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                onClick={this.handleSubmitClick}
              >
                登入
              </Button>
            </div>

            <div className={classes.bottomRow}>
              <Button
                color="primary"
                className={classes.button}
                onClick={this.handleRegisterClick}
              >
                {this.state.register ? '還沒實裝' : '註冊帳號'}
              </Button>
              <Button
                color="primary"
                className={classes.button}
                onClick={this.handleForgotPasswordClick}
              >
                {this.state.forgotPassword ? '我也沒辦法幫你想' : '忘記密碼'}
              </Button>
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
