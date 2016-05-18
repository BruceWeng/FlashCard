import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import * as reducers from './reducers.js';
reducers.routing = routerReducer;

import App from './components/App';
import VisibleCards from './components/VisibleCards';

const store = Redux.createStore(Redux.combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store);

function run () {
  let state = store.getState();
  ReactDOM.render(
    (<Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='/deck/:deckId' component={VisibleCards} />
        </Route>
      </Router>
    </Provider>), document.getElementById('root'));
}

run();
store.subscribe(run);
