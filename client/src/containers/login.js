import React from 'react';
import axios from 'axios';



export default function Login() {

  function login() {

    axios.get('/auth/google').then(response => response).catch(error => console.log(error));
  }

  return (
    <div onClick={login}>Old login</div>
  );
  
}