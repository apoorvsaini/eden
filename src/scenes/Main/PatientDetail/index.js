import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import TiCalendar from 'react-icons/lib/ti/calendar';
import IoLeft from 'react-icons/lib/io/arrow-left-b';

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
            for (var k in data) {
                var timeStamp = moment(data[k].datetime).valueOf();
                var ctreatedAt = moment(data[k].created_at).valueOf();
                data[k].datetime = timeStamp;
                data[k].created_at = ctreatedAt;
            }

            // Sort data by datetime 
            data.sort(function(a,b) {return (a.datetime < b.datetime) ? 1 : ((b.datetime < a.datetime) ? -1 : 0);} ); 

            actions.APPOINTMENTS_FETCHED(data);
        })
    }
  }

  render() {
    const { app } = this.props;
    const patientSelected = app.get('patientSelected');
    const patientNameSelected = app.get('patientNameSelected');
    const appointments = app.get('appointments');
    const fetchingAppointments = app.get('fetchingAppointments');

    if (patientSelected === null && !fetchingAppointments) {
        return (
            <div className="Empty-box box">
               <IoLeft/> PICK A PATIENT
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
                <h1 className="title">{patientNameSelected}</h1>
               {appointments.map((appointment) => 
                <div className="box" key={appointment.id}>
                    <div className="Bold-weight Patient-name">{appointment.note}</div>
                    <div><TiCalendar /> Last Updated: { moment(appointment.datetime).format('MM-DD-YYYY LTS')}</div>
                    <div><TiCalendar /> Created At: {moment(appointment.created_at).format('MM-DD-YYYY LTS')}</div>
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
