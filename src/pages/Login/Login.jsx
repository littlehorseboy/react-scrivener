import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { login } from '../../actions/login';

const styles = {

};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      account: 'littlehorseboy',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  handleClick() {
    this.props.login(true);
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
      <>
        <TextField
          label="帳號"
          className={classes.textField}
          value={this.state.account}
          onChange={this.handleChange('account')}
          margin="normal"
        />

        <TextField
          label="密碼"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleClick}
        >
          登入
        </Button>
      </>
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
