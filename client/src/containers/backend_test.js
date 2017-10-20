//this component is for testing our backend server

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { serverTest } from '../actions/index';
import axios from 'axios';

class BackendTest extends Component {
  constructor(props) {
    super(props);

    this.state = { serverResponse: '' };

  }
  componentDidMount() {
    console.log(this.props)
    axios.get('/test').then((response) => {
      console.log(response);
      
      this.setState({ serverResponse: response.data })
    }).catch((error) => console.log(error));
  }

  render() {
    return (
      <div>{this.state.serverResponse}</div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ serverTest }, dispatch);
}
export default connect(null, mapDispatchToProps)(BackendTest);