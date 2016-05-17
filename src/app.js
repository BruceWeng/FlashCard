import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import {addDeck, showAddDeck, hideAddDeck} from './actions.js';
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
  ReactDOM.render(<App>
    <Sidebar
      decks={state.decks}
      addingDeck={state.addingDeck}
      addDeck={name => store.dispatch(addDeck(name))}
      showAddDeck={() => store.dispatch(showAddDeck())}
      hideAddDeck={() => store.dispatch(hideAddDeck())}
    />
   </App>, document.getElementById('root'));
}

run();
store.subscribe(run);
