import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Checkbox, Col, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoginStatus } from '../actions/index';
import Login  from './google_login';

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: '', rememberMe: true, loggedIn: false};

    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRememberChange = this.onRememberChange.bind(this);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  onRememberChange(e) {
    this.state.rememberMe === true ? this.setState({ rememberMe: false }) : this.setState({ rememberMe: true });
    console.log(this.state.rememberMe)
    // this.setState({ rememberMe: })
  }

  resetForm() {
    this.setState({ email: '', password: '' });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.email === 'ching@who.com' && this.state.password === 'letmein!') {
      this.props.setLoginStatus(true);
    } else {
      this.props.setLoginStatus(false);
    }
    if (this.state.rememberMe === false) {
      this.resetForm();
    }
    // console.log('onSubmit called. this.state.emal: ', this.state.email, ' this.state.password: ', this.state.password)
  }
  
  render() {
    return (
      <div>
        <Login />
        
        <Form horizontal onSubmit={this.onSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="hint: ching@who.com" value={this.state.email} onChange={this.onEmailChange} />
          </Col>
        </FormGroup>
    
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="hint: letmein!" value={this.state.password} onChange={this.onPasswordChange} />
          </Col>
        </FormGroup>
    
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox checked={this.state.rememberMe} onChange={this.onRememberChange}>Remember me</Checkbox>
          </Col>
        </FormGroup>
        <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </FormGroup>
      </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setLoginStatus }, dispatch);
}
export default connect(null, mapDispatchToProps)(LoginView);