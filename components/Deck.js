import React, { Component } from 'react'
import { Button, StyleSheet, View, Platform } from 'react-native'
import DeckSummary from './DeckSummary'

class Deck extends Component {
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'Individual Deck'
    })
  }
  render(){
    const { deck } = this.props.route.params
    this.setTitle()
    return (
      <View style={styles.container}>
        <View style={styles.summary}>
          <DeckSummary deck={deck} />
        </View>
        <View style={styles.button}>
          <Button title={'Add Card'} onPress={() => {this.props.navigation.push('NewQuestion')}} />
        </View>
        <View style={styles.button}>
          <Button title={'Start a Quiz'} onPress={() => {this.props.navigation.push('Quiz')}} />
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

export default Deck