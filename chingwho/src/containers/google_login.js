import React from 'react';
import { GoogleLogin } from 'react-google-login';
import GoogleLogout from 'react-google-login';
 
class Login extends React.Component{
 
  constructor (props, context) {
    super(props, context);

    this.responseGoogle = this.responseGoogle.bind(this);
  }
 
  responseGoogle = (response) => {
    console.log(response);
  }
 
  render () {
    return (
      <div>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={logout}
        >
        </GoogleLogout>
      </div>
    );
  }
 
}
 
export default Login;