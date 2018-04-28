import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PatientList from '../PatientList';

import { mapActionsToPropTypes } from '../../../lib/util';
import { AppActions } from '../../../actions';
import './styles.css';

class Dashboard extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(AppActions).isRequired,
  }

  goToMessages = () => {
    const { actions } = this.props;
    actions.goToMessages();
  }

  render() {
    const { app, user } = this.props;
    return (
      <div className="Dash-area columns">
        <div className="Sidebar-one column is-one-third">
          <PatientList/>
        </div>
        <div className="Sidebar-two column">
          
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ app: state.get('app'), user: state.get('user') }),
  dispatch => ({
    actions: bindActionCreators(AppActions, dispatch),
  }),
)(Dashboard);
