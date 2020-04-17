import React from 'react'
import { StatusBar, Platform, SafeAreaView } from 'react-native'
import { TINT_COLOUR, white } from './utils/colours'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import QuizResults from './components/QuizResults'
import NewQuestion from './components/NewQuestion'

function AppStatusBar ({ backgroundColor, ...props }) {
  return(
    <SafeAreaView>
      <StatusBar 
        translucent
        backgroundColor={backgroundColor}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        {...props} />
    </SafeAreaView>
  ) 
}

const Tabs = Platform.OS === 'ios' 
        ? createBottomTabNavigator() 
        : createMaterialBottomTabNavigator()

const tabNavScreenOptions = ({ route }) => ({
  tabBarIcon: (({ focused, color, size}) => {
    if(route.name === 'Decks') {
      return <MaterialCommunityIcons name="cards" size={size} color={color} />
    } else if (route.name === 'Add Deck') {
      return <MaterialCommunityIcons name="cards-variant" size={size} color={color} />
    }
  })
})

const Stack = createStackNavigator()
const DeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeckList" component={DeckList} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="QuizResults" component={QuizResults} />
      <Stack.Screen name="NewQuestion" component={NewQuestion} />
    </Stack.Navigator>
  )
}
const NewDeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewDeck" component={NewDeck} />
    </Stack.Navigator>
  )
}

const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStatusBar backgroundColor={TINT_COLOUR} />
        <Tabs.Navigator
            screenOptions={tabNavScreenOptions}
            tabBarOptions={{ activeTintColor: TINT_COLOUR }}
            barStyle={{ backgroundColor: TINT_COLOUR }}
            activeColor={white}>
          <Tabs.Screen name="Decks" component={DeckStack} />
          <Tabs.Screen name="Add Deck" component={NewDeckStack} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

