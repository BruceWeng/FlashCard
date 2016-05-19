import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import * as reducers from './reducers.js';
reducers.routing = routerReducer;

import * as localStore from './localStore';

import App from './components/App';
import VisibleCards from './components/VisibleCards';
import NewCardModal from './components/NewCardModal';
import EditCardModal from './components/EditCardModal';

const store = Redux.createStore(Redux.combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(browserHistory, store);

function run () {
  let state = store.getState();
  localStore.set(state, ['decks', 'cards']);
  ReactDOM.render(
    (<Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='/deck/:deckId' component={VisibleCards}>
            <Route path='/deck/:deckId/new' component={NewCardModal} />
            <Route path='/deck/:deckId/edit/:cardId' component={EditCardModal} />
          </Route>
        </Route>
      </Router>
    </Provider>), document.getElementById('root'));
}

run();
store.subscribe(run);
