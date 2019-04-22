import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Slide from '@material-ui/core/Slide';
import DoneIcon from '@material-ui/icons/Done';

/* global FETCH_URL */

const styles = theme => ({
  chipContainer: {
    textAlign: 'center',
    marginTop: theme.spacing.unit,
  },
  chip: {
    '&.error': {
      backgroundColor: '#ff4f5f',
    },
  },
});

class LoginSubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chipSlideShow: false,
      chipLabel: '',
      chipErrorStatus: false,
    };
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  chipShowSuccess() {
    this.setState({
      chipSlideShow: true,
      chipLabel: '登入成功，即將跳轉至 books 頁面。',
      chipErrorStatus: false,
    });
  }

  chipShowError(label = '您的帳號或密碼不正確。') {
    this.setState({
      chipSlideShow: true,
      chipLabel: label,
      chipErrorStatus: true,
    });
  }

  chipHide() {
    this.setState({
      chipSlideShow: false,
    });
  }

  handleSubmitClick() {
    this.chipHide();

    // validation
    if (!this.props.account) {
      this.chipShowError('請輸入帳號');
      return;
    }

    if (!this.props.password) {
      this.chipShowError('請輸入密碼');
      return;
    }

    // request login
    this.props.loadingOverlayShow(true);

    Axios({
      method: 'post',
      url: `${FETCH_URL}/api/userlogin`,
      data: {
        account: this.props.account,
        password: this.props.password,
      },
    }).then((response) => {
      if (response.data) {
        this.chipShowSuccess();
        setTimeout(() => {
          this.props.loginSuccessful(response.data);
        }, 1500);
      } else {
        this.chipShowError();
      }
    }).catch((error) => {
      this.chipShowError(error.message);
    }).then(() => {
      this.props.loadingOverlayShow(false);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Button
          fullWidth
          color="secondary"
          variant="contained"
          onClick={this.handleSubmitClick}
        >
          登入
        </Button>
        <Slide direction="up" in={this.state.chipSlideShow} mountOnEnter unmountOnExit>
          <div className={classes.chipContainer}>
            <Chip
              label={this.state.chipLabel}
              color="primary"
              className={classNames(classes.chip, { error: this.state.chipErrorStatus })}
              onDelete={() => { }}
              deleteIcon={!this.state.chipErrorStatus ? <DoneIcon /> : null}
            />
          </div>
        </Slide>
      </>
    );
  }
}

LoginSubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loadingOverlayShow: PropTypes.func.isRequired,
  loginSuccessful: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginSubmitButton);
