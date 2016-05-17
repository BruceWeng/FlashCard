import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import * as reducers from './reducers.js';
reducers.routing = routerReducer;

import App from './components/App';
import Sidebar from './components/Sidebar';

const store = Redux.createStore(Redux.combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store);
const routes = (<Route path='/' component={App}></Route>);
function run () {
  let state = store.getState();
  ReactDOM.render(
    (<Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>), document.getElementById('root'));
}

run();
store.subscribe(run);
