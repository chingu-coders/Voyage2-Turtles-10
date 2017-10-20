import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
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
import BackendTest from './containers/backend_test';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>

        <Route path="/" component={LoginView} />
        {/* <Route path="/" component={BackendTest} /> */}
        <Route path="/:user" component={App} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>