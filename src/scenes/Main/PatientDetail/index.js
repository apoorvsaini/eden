import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapActionsToPropTypes } from '../../../lib/util';
import api from '../../../lib/api';
import { AppActions } from '../../../actions';
import './styles.css';

class PatientDetail extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(AppActions).isRequired,
  }

  componentDidUpdate() {
    const { actions } = this.props;
    const patientId = this.props.app.get('patientSelected');
    const fetchingAppointments = this.props.app.get('fetchingAppointments');

    if(patientId !== null && fetchingAppointments) {
        let appointments = api.get('appointments?patient_id='+patientId);
        appointments.then(function(data){
            actions.APPOINTMENTS_FETCHED(data);
        })
    }
  }

  render() {
    const { app } = this.props;
    const patientSelected = app.get('patientSelected');
    const appointments = app.get('appointments');
    const fetchingAppointments = app.get('fetchingAppointments');

    if (patientSelected === null && !fetchingAppointments) {
        return (
            <div className="Empty-box box">
               PICK A PATIENT
            </div>
        );
    }
    else if (fetchingAppointments) {
        return (
            <div className="Empty-box box">
               LOADING...
            </div>
        );
    }
    else {
        return (
            <div className="Detail-box box">
               {appointments.map((appointment) => 
                <div className="box" key={appointment.id}>
                    <div className="Bold-weight Patient-name">{appointment.note}</div>
              </div>)}
            </div>
        );
    }
  }
}

export default connect(
  state => ({ app: state.get('app') }),
  dispatch => ({
    actions: bindActionCreators(AppActions, dispatch),
  }),
)(PatientDetail);
