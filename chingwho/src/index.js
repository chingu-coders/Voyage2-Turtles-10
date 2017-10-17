import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// import './index.css';
import App from './App';
import LoginView from './containers/login_view';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={LoginView} />
        <Route path="/:user" component={App} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
