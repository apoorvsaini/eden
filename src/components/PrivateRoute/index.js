import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    redirectTo: PropTypes.string,
    isAuthenticated: PropTypes.bool,
  }
  static defaultProps = {
    redirectTo: '/',
    isAuthenticated: false,
  }

  render() {
    const { component: Component, redirectTo, isAuthenticated, ...moreProps } = this.props;
    const contents = (props) => (isAuthenticated ?
      (<Component {...props} />)
      : (
        <Redirect to={{
          pathname: redirectTo,
          from: props.location,
        }} />
      ));
    return (<Route {...moreProps} render={contents} />);
  }
}
