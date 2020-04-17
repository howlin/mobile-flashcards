import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class DeckList extends Component {
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'Deck List'
    })
  }
  render(){
    this.setTitle()
    return (
      <View style={styles.container}>
        <Text>DeckList</Text>
        <Button title={'Individual Deck'} onPress={() => {this.props.navigation.push('Deck')}} />
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

export default DeckList