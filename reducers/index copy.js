import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK } from '../actions';
// import { decks as INITIAL_STATE } from '.././utils/_Data'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      };
    case ADD_CARD:

      return {
        ...state,
        [action.questionDetails.deckId]: {
          ...state[action.questionDetails.deckId],
          questions: state[action.questionDetails.deckId].questions.concat({
            question: action.questionDetails.question,
            answer: action.questionDetails.answer
          })
        }
      };
      case DELETE_DECK:
        return Object.keys(state).reduce((decks, deckId) => {
          if (deckId !== action.deckId) {
            decks[deckId] = state[deckId];
          }
          return decks;
        }, {});

        // return {
        //   ...state,
        //   [action.deck.id]: action.deck
          // [action.questionDetails.deckId]: {
          //   ...state[action.questionDetails.deckId],
          //   questions: state[action.questionDetails.deckId].questions.concat({
          //     question: action.questionDetails.question,
          //     answer: action.questionDetails.answer
          //   })
          // }
        // };


        // return Object.keys(state).reduce((decks, deckId) => {
        //   if (deckId !== action.deckId) {
        //     decks[deckId] = state[deckId];
        //   }
        //   return decks;
        // }, {});

    default:
      return state;
  }
}

export default decks;
