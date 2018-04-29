import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import TiUser from 'react-icons/lib/ti/user';
import IoQuote from 'react-icons/lib/io/quote';

import { mapActionsToPropTypes } from '../../../lib/util';
import api from '../../../lib/api';
import { AppActions } from '../../../actions';
import './styles.css';

class Overview extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(AppActions).isRequired,
  }

  fetchUserName (id) {
    
  }

  fetchAppointment () {
    const { actions, app} = this.props;
    const page = app.get('appointmentPage');
    const patientId = app.get('patientSelected');

    let appointments = api.get('appointments?_sort=datetime&_order=desc');
    appointments.then(function(data){
        //group by date
        actions.SET_ALL_APPOINTMENTS(data);
    })
  }

  componentDidMount () {
    this.fetchAppointment();
  }

  componentDidUpdate () {
  }

  render() {
    const { app } = this.props;
    const isDataLoading = app.get('isDataLoading');
    const appointments = app.get('allAppointments');
    const userNameCache = app.get('userNameCache');

    return (
        <div className="Overview-bg column">
            <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical">
                {appointments.map((appointment) => 
                <div className="tile is-child notification Main-tile" style={{borderTop: appointment.note == "Cancelled" ? '5px #ff3860 solid' : '' }} key={appointment.id}>
                    <div className="Bold-weight Patient-name">{ moment(appointment.datetime).format('MM-DD-YYYY')}</div>
                    <div><TiUser size={20}/> {userNameCache[appointment.patient_id]}</div>
                    <div><IoQuote size={40}/> {appointment.note}</div>
                </div>)}
                </div>
            </div>
        </div>
    );
  }
}

export default connect(
  state => ({ app: state.get('app') }),
  dispatch => ({
    actions: bindActionCreators(AppActions, dispatch),
  }),
)(Overview);
