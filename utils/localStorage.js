import { AsyncStorage, Platform } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const DECK_STORAGE_KEY = 'Udacity:decks'
const NOTIFICATION_KEY = 'Udacity:notifications'

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

// Mentioned in the Rubic but is not needed
// export const getDeck = (deckId) => {
//
// }

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

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification () {
  return {
    title: 'Time to Stufy!',
    body: '👋 don\'t forget to study!',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if( status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}