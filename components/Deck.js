import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, View, Platform } from 'react-native'
import DeckSummary from './DeckSummary'

class Deck extends Component {
  setTitle = ( title ) => {
    this.props.navigation.setOptions({
      title: title
    })
  }
  render(){
    const { deck, navigation } = this.props
    const { title } = deck
    this.setTitle( title )
    return (
      <View style={styles.container}>
        <View style={styles.summary}>
          <DeckSummary title={deck.title} />
        </View>
        <View style={styles.button}>
          <Button title={'Add Card'} onPress={() => { navigation.push('NewQuestion', { title }) }} />
        </View>
        <View style={styles.button}>
          <Button title={'Start a Quiz'} onPress={() => { navigation.push('Quiz', { title }) }} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  summary: {
    marginBottom: 50
  },
  button: {
    marginBottom: Platform.OS === 'ios' ? 5 : 10
  }
})

function mapStateToProps( decks, { route } ) {
  return {
    deck: decks[route.params.title]
  }
}

export default connect(mapStateToProps)(Deck)