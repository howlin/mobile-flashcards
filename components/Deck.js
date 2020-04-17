import React, { Component } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

class Deck extends Component {
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'Individual Deck'
    })
  }
  render(){
    this.setTitle()
    return (
      <View style={styles.container}>
        <Text>Deck</Text>
        <Button title={'Add Card'} onPress={() => {this.props.navigation.push('NewQuestion')}} />
        <Button title={'Start a Quiz'} onPress={() => {this.props.navigation.push('Quiz')}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})

export default Deck