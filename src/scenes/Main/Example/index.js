import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapActionsToPropTypes } from '../../../lib/util';
import { AppActions } from '../../../actions';
import './styles.css';

class Example extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    actions: mapActionsToPropTypes(AppActions).isRequired,
  }

  add = () => {
    const { actions } = this.props;
    actions.ADD_COUNTER(1);
  }

  sub = () => {
    const { actions } = this.props;
    actions.SUB_COUNTER(1);
  }

  goToMessages = () => {
    const { actions } = this.props;
    actions.goToMessages();
  }

  render() {
    const { counter } = this.props;
    return (
      <div className="Settings">
        <div>
          {counter}
        </div>
        <div>
          <button onClick={this.add}>Add</button>
          <button onClick={this.sub}>Subtract</button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ counter: state.getIn(['app', 'counter']) }),
  dispatch => ({
    actions: bindActionCreators(AppActions, dispatch),
  }),
)(Example);
