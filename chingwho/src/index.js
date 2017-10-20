import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Navigation from './containers/navigation';
import Sidebar from './containers/sidebar';
import SingleProfile from './components/single_profile_view';
import UserProfiles from './components/profiles_view';
import LoginView from './containers/login_view';
import BackendTest from './containers/backend_test';

const AppPreview = () => (
  <div>
    <Navigation />
    <Sidebar />
    <SingleProfile />
    <UserProfiles />
  </div>
);

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Link to="/preview">app preview</Link>
        <Route path="/:id" component={AppPreview} />
        <Route path="/" component={LoginView} />
        {/* <Route path="/" component={BackendTest} /> */}
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));



registerServiceWorker();
