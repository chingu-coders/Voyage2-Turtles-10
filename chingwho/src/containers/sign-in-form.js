import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Checkbox, Col, ControlLabel } from 'react-bootstrap';


export default class SingInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: null};

    this.doLogin = this.doLogin.bind(this);
  }

  doLogin(e) {
    e.preventDefault();
    this.setState({ loggedIn: true }, function() {
      let state = this.state
      setTimeout(function() {
        console.log(state)}, 700);
    })
    
    
  }

  render() {
    return (
      <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>
  
      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type="password" placeholder="Password" />
        </Col>
      </FormGroup>
  
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>
  
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit" onClick={this.doLogin}>
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
    );
  }
  

}