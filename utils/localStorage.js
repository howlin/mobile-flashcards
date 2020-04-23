import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'Udacity:decks'

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

// Mentioned in the Rubic but is not needed
// export const getDeck = (deckId) => {
//
// }

export const removeDecks = (deckId) => {
  AsyncStorage.removeItem(DECK_STORAGE_KEY)
}

export const saveDeck = (deck) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      const deck = data[title]
      deck.questions = [
        ...deck.questions,
        card
      ]

      AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[title]: deck}))
    })
}