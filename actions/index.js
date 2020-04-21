export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck(title, icon) {
  const deck = {
    [title]: {
      title,
      icon,
      questions: [],
      timestamp: Date.now()
    }
  }
  return {
    type: ADD_DECK,
    deck
  }
}