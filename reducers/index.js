import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD,
  DELETE_DECK,
} from "../actions";


function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const { title } = action;
      const key = title.replace(/\s/g, '');
      return {
        ...state,
        [key]: {
          title,
          key,
          questions: [],
        },
      };
    case ADD_CARD:
      const { id, card } = action;

      console.log("ADD_Card Reducer:", id, card)
      return {
        ...state,
        [id]: {
          ...state[id],
          questions: [...state[id].questions].concat(card),
        },
      };

    case DELETE_DECK:
      const { deckId } = action;
      const { [deckId]: value, ...remainingDecks } = state;
      return remainingDecks;

    default:
      return state;
  }
}

export default decks;
