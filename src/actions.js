export const addDeck = name => ({ type: 'ADD_DECK', data: name});
export const showAddDeck = () => ({ type: 'SHOW_ADD_DECK'});
export const hideAddDeck = () => ({ type: 'HIDE_ADD_DECK'});

export const addCard = card => ({ type: 'ADD_CARD', data: card});
