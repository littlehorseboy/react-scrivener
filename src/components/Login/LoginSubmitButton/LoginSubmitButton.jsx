import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Button from '@material-ui/core/Button';

/* global FETCH_URL */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick() {
    this.props.loadingOverlayShow(true);

    Axios({
      method: 'POST',
      url: `${FETCH_URL}/api/userlogin`,
      data: {
        account: this.props.account,
        password: this.props.password,
      },
    }).then((response) => {
      if (response.data === 1) {
        setTimeout(() => {
          this.props.loginSuccessful();
        }, 1000);
      } else {
        alert('無此帳號或密碼');
      }
    }).catch((error) => {
      console.error(error);
    }).then(() => {
      this.props.loadingOverlayShow(false);
    });
  }

  render() {
    return (
      <Button
        fullWidth
        color="secondary"
        variant="contained"
        onClick={this.handleSubmitClick}
      >
        登入
      </Button>
    );
  }
}

Login.propTypes = {
  account: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loadingOverlayShow: PropTypes.func.isRequired,
  loginSuccessful: PropTypes.func.isRequired,
};

export default Login;
