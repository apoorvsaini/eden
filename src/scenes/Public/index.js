import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter, Route } from 'react-router-dom';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

import Login from './Login';
import About from './About';

import logo from '../../assets/logo.svg';
import './styles.css';
import 'bulma/css/bulma.css'

class Public extends Component {
  static propTypes = {
    location: PropTypes.instanceOf(Map),
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
  }
  static defaultProps = {
    location: Map({ pathname: '/' }),
  }

  renderNavBar = () => {
    const { location, actions } = this.props
    const pathname = location.get('pathname');
    const menuBarItems = [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'About',
        path: '/about',
      },
    ];
    const menuBarItemComponents = menuBarItems.map((item) => {
      return (
        <a
          className={(pathname === item.path ? 'active': '')}
          key={item.name}
          href={item.path}
          onClick={(e) => { e.preventDefault(); actions.navigate(item.path); }}
        >
          {item.name}
        </a>
      );
    });
    return (
      <div className="Public-navbar">
        {menuBarItemComponents}
      </div>);
  }

  render() {
    return (
      <div className="public-container ">
        <div className="Public">
          <h1 className="Public-header">
            <img src={logo} className="Public-header-logo" alt="logo" />
             Code Challenge
          </h1>

          <Route exact path="/" component={Login} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({ location: state.getIn(['router', 'location']) }),
  dispatch => ({
    actions: bindActionCreators({
      navigate: (path) => push(path),
    }, dispatch),
  }),
)(Public));
