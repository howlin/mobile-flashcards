import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

export default function decks ( state = {}, action ) {
  switch(action.type){
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks
      }
    }
    case ADD_DECK: {
      const { deck } = action
      return {
        ...state,
        [deck.title]: deck
      }
    }
    case ADD_QUESTION: {
      const { question, deckTitle } = action

      console.log('deck title: ', deckTitle)

      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: [
            ...state[deckTitle]['questions'],
            question
          ]
        }
      }
    }
    default: {
      return state
    }
  }
}