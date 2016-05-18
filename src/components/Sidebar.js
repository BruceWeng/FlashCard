import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addDeck, showAddDeck, hideAddDeck} from '../actions.js';
import {Link} from 'react-router';

/*ES5*/
// var mapStateToProps = (state) => {
//   return {
//     decks: state.decks,
//     addingDeck: state.addingDeck
//   }
// }
const mapStateToProps = ({ decks, addingDeck }) => ({
  decks,
  addingDeck
});

const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
});

/*THe reason we use React.createClass here rather than pure function
is that we will use life cycle methods*/
const Sidebar = React.createClass({
  componentDidUpdate() {
    var el = ReactDOM.findDOMNode(this.refs.add);
    if (el) el.focus();
  },

  render() {
    let props = this.props;

    return(
      <div className='sidebar'>
        <h2> All Decks </h2>
        <button onClick={ e => this.props.showAddDeck()}>
          New Deck
        </button>
        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}>
              <Link to={`/deck/${deck.id}`}>{deck.name}</Link>
            </li>
          )}
        </ul>
        {props.addingDeck && <input ref='add' onKeyPress={this.createDeck} />}
      </div>
    );
  },
  createDeck(evt) {
    if (evt.which != 13) return;

    var name = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
