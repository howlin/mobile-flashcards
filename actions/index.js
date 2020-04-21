export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck(title, icon) {
  const deck = {
    title,
    icon,
    questions: [],
    timestamp: Date.now()
  }
  return {
    type: ADD_DECK,
    deck
  }
}

export function addQuestion(deckTitle, question, answer) {
  const q = {
    question,
    answer
  }

  return {
    type: ADD_QUESTION,
    question: q,
    deckTitle
  }
}