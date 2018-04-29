import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'

import TiBook from 'react-icons/lib/ti/book';
import IoLogout from 'react-icons/lib/io/log-out';
import IoCalendar from 'react-icons/lib/io/android-calendar';

import PatientList from '../PatientList';
import PatientDetail from '../PatientDetail';
import Overview from '../Overview';

import { mapActionsToPropTypes, combineArrayOfMaps } from '../../../lib/util';
import { AppActions, UserActions } from '../../../actions';
import './styles.css';

class Dashboard extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(AppActions).isRequired,
    userActions: mapActionsToPropTypes(UserActions).isRequired,
  }

  PatientListView = <div className="Sidebar-one column is-one-third"><PatientList/></div>
  PatientDetailView = <div className="Sidebar-two column"><PatientDetail/></div>;

  logout = () => {
    const { actions, userActions } = this.props;
    userActions.LOGOUT();
  }

  gotoOverview () {
    const { app, actions } = this.props;
    if (app.get('currentScene') !== 'patients')
      actions.CHANGE_SCENE('patients');
  }

  gotoCalendar () {
    const { app, actions } = this.props;
    if (app.get('currentScene') !== 'appointments')
      actions.CHANGE_SCENE('appointments');
  }

  render() {
    const { app, user, router } = this.props;
    const currentScene = app.get('currentScene');
    
    return (
      <div className="Dash-area columns">
        <div className="Side-nav column">
          <TiBook onClick={() => this.gotoOverview()} className="Side-icons" data-tip="All Patients"  size={30} color={currentScene === "patients" ? "yellow" : "white"} />
          <IoCalendar onClick={() => this.gotoCalendar()} className="Side-icons" data-tip="All Appointments"  size={30} color={currentScene === "appointments" ? "yellow" : "white"}/>
          <IoLogout className="Side-icons" data-tip="Log out" size={30} color="white" onClick={this.logout}/> 
        </div>
        {currentScene === "patients" ? [this.PatientListView, this.PatientDetailView] : <Overview/>}
        <ReactTooltip place="right" type="dark" effect="solid"/>
      </div>
    );
  }
}

export default connect(
  state => ({ app: state.get('app'), user: state.get('user'), router: state.get('router') }),
  dispatch => ({
    actions: bindActionCreators(AppActions, dispatch),
    userActions: bindActionCreators(combineArrayOfMaps([
      UserActions,
      {
        goToApp: (path) => push(path),
      }]), dispatch),
  }),
)(Dashboard);
