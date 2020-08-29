import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD,
  DELETE_DECK,
  RESET_STORE,
} from "../actions";
import { decks as INITIAL_STATE } from "../utils/api";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        },
      };
    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions].concat(card),
        },
      };

    case DELETE_DECK:
      const { id } = action;
      // return ({ [id]: value, ...remainingDecks } = state);
      const { [id]: value, ...remainingDecks } = state;
      // console.log(remainingDecks);
      return remainingDecks;
    
      case RESET_STORE:
        return INITIAL_STATE;

    default:
      return state;
  }
}

export default decks;
