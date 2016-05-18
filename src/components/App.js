import React from 'react';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = (props, {params: {deckId}}) => ({
  deckId
});

const App = ({deckId, children}) => {
  return (
    <div className='app'>
      <Sidebar/>
      <h1>Deck {deckId}</h1>
      {children}
    </div>
  )
};
export default connect(mapStateToProps)(App);
