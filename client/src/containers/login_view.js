import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './login';

export default class LoginView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <Login />
      <a href="auth/google">new login</a>
      <a href="auth/slack">new slack login</a>
      </div>
    );
  }
}