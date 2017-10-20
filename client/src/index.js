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



import SingleProfile from './components/single_profile_view';

const Preview = () => {
  return (
    <SingleProfile />
  );
}

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Preview} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
