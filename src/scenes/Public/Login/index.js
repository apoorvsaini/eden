import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { mapActionsToPropTypes, combineArrayOfMaps } from '../../../lib/util';
import { UserActions } from '../../../actions';

class Login extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(UserActions).isRequired,
  }

  login = () => {
    const { actions } = this.props;
    this.props.actions.LOGIN()
      .then(() => {
        actions.goToMain();
      });
  }

  render() {
    return (
      <div className="Login" >
        <form>
          <input
            className="Form-element input"
            placeholder="Email address"
          />
          <input
            className="Form-element input"
            placeholder="Password"
            type="password"
          />
          <button
            className="Form-element Form-btn button is-danger is-rounded"
            type="button"
            onClick={this.login}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    actions: bindActionCreators(combineArrayOfMaps([
      UserActions,
      {
        goToMain: () => push('/app'),
      },
    ]), dispatch),
  }),
)(Login);
