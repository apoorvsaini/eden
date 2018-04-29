import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapActionsToPropTypes } from '../../../lib/util';
import api from '../../../lib/api';
import { AppActions } from '../../../actions';
import './styles.css';

class PatientList extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(AppActions).isRequired,
  }

  componentDidMount() {
    // Making API call to fetch patients list
    const { actions } = this.props;
    actions.FETCHING_PATIENTS();

    let patients = api.get('patients');
    patients.then(function(data){
        actions.PATIENTS_LOADED(data);
    })
  }

  patientSelected (id, name) {
    this.props.actions.PATIENT_SELECTED(id, name);
  }

  render() {
    const { app } = this.props;
    const isDataLoading = app.get('isDataLoading');
    const patientList = app.get('patientList');
    const patientSelected = app.get('patientSelected');

    if (isDataLoading) {
        return (
            <div className="Bold-weight">
              LOADING...
            </div>
          );
    }
    else {
        return (
            <div>
              {patientList.map((patient) => 
              <div onClick={() => this.patientSelected(patient.id, patient.name)} className="box Box-links" key={patient.id} style={{borderLeft: patientSelected === patient.id ?'10px solid #5a5a5a' : '0px'}}>
                <div className="Bold-weight Patient-name">{patient.name}</div>
                <div>{patient.company}</div>
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
)(PatientList);
