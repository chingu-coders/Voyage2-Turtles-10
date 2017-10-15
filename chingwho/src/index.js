import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import LoginView from './containers/login_view';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={LoginView} />
    </div>
  </Router>
  , document.getElementById('root'));

registerServiceWorker();
