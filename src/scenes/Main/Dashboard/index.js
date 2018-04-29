import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TiBook from 'react-icons/lib/ti/book';
import IoLogout from 'react-icons/lib/io/log-out';
import ReactTooltip from 'react-tooltip'

import PatientList from '../PatientList';
import PatientDetail from '../PatientDetail';

import { mapActionsToPropTypes } from '../../../lib/util';
import { AppActions, UserActions } from '../../../actions';
import './styles.css';

class Dashboard extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(AppActions).isRequired,
    userActions: mapActionsToPropTypes(UserActions).isRequired,
  }

  logout = () => {
    const { actions, userActions } = this.props;
    userActions.LOGOUT();
  }

  render() {
    const { app, user } = this.props;
    return (
      <div className="Dash-area columns">
        <div className="Side-nav column">
          <TiBook className="Side-icons" data-tip="Overview"  size={30} color="white"/>
          <IoLogout className="Side-icons" data-tip="Log out" size={30} color="white" onClick={this.logout}/> 
        </div>
        <div className="Sidebar-one column is-one-third">
          <PatientList/>
        </div>
        <div className="Sidebar-two column">
          <PatientDetail/>
        </div>
        <ReactTooltip place="right" type="dark" effect="solid"/>
      </div>
    );
  }
}

export default connect(
  state => ({ app: state.get('app'), user: state.get('user') }),
  dispatch => ({
    actions: bindActionCreators(AppActions, dispatch),
    userActions: bindActionCreators(UserActions, dispatch),
  }),
)(Dashboard);
