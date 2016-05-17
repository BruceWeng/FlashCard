import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './reducers.js';
import App from './components/App';
import Sidebar from './components/Sidebar';

const store = Redux.createStore(Redux.combineReducers(reducers));
/*
function (state, action) {
  cards: cards(state.cards, aciton),
  decks: decks(state.decks, action)
};
*/

function run () {
  let state = store.getState();
  ReactDOM.render(
    (<Provider store={store}>
      <App>
        <Sidebar/>
      </App>
    </Provider>), document.getElementById('root'));
}

run();
store.subscribe(run);
