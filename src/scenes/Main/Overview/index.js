import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapActionsToPropTypes } from '../../../lib/util';
import api from '../../../lib/api';
import { AppActions } from '../../../actions';
import './styles.css';

class Overview extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(AppActions).isRequired,
  }

  fetchPatients () {
    const { actions } = this.props;

    let patients = api.get('patients');
    patients.then(function(data){
        actions.PATIENTS_LOADED(data);
    })
  }

  componentDidMount() {
    // Making API call to fetch patients list
    const { actions } = this.props;
    actions.FETCHING_PATIENTS();
    this.fetchPatients();
  }

  componentDidUpdate() {
    const { actions, app } = this.props;
    const isDataLoading = app.get('isDataLoading');
    const patientList = app.get('patientList');
    const currentScene = app.get('currentScene');

    if(patientList.length == 0 && currentScene === 'patients' && isDataLoading === true) {
        this.fetchPatients();
    }
  }

  patientSelected (id, name) {
    this.props.actions.PATIENT_SELECTED(id, name);
  }

  render() {
    const { app } = this.props;
    const isDataLoading = app.get('isDataLoading');
    const patientList = app.get('patientList');
    const patientSelected = app.get('patientSelected');

    return (
        <div className="Bold-weight">
            LOADING...
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
