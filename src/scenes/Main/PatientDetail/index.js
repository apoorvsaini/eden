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

  componentDidMount() {
    
  }

  render() {
    const { app } = this.props;
    const patientSelected = app.get('patientSelected');

    if (patientSelected === null) {
        return (
            <div className="Detail-box box">
               PICK A PATIENT
            </div>
        );
    }
    else {
        return (
            <div className="Detail-box box">
               
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
