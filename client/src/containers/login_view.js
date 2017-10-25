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
        {/*<Login />*/}
        {/*<a href="auth/google" className="google-button">new google login</a>*/}
        <img src="http://via.placeholder.com/391x179"></img>
        <p>Hello, welcome to Ching-who! Ching-who is an app that scrapes Chingu's Slack intro channels and gathers user data so that teammates are able to find out about their teammates more easily. We use simple AI to pull tags from your post as well, so that people with similar interests can find each other. Basically it solves the question: Ching-who will you be working with?</p>
        <a href="auth/slack"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
      </div>
    );
  }
}
