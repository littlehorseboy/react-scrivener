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

class RegisterSubmitButton extends React.Component {
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
      chipLabel: '註冊成功，即將跳轉至 books 頁面。',
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
    this.props.loadingOverlayShow(true);

    Axios({
      method: 'POST',
      url: `${FETCH_URL}/api/userregiter`,
      data: {
        account: this.props.account,
        password: this.props.password,
        email: this.props.email,
      },
    }).then((response) => {
      if (response.data !== 'repeat' && response.data.code !== 'ERR_ASSERTION') {
        this.chipShowSuccess();
        setTimeout(() => {
          this.props.loginSuccessful(response.data);
        }, 1500);
      } else {
        this.chipShowError('此帳號已被使用');
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
          註冊
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

RegisterSubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  loadingOverlayShow: PropTypes.func.isRequired,
  loginSuccessful: PropTypes.func.isRequired,
};

export default withStyles(styles)(RegisterSubmitButton);
