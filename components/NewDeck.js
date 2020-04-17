import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class NewDeck extends Component {
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'New Deck'
    })
  }
  render(){
    this.setTitle()
    return (
      <View style={styles.container}>
        <Text>NewDeck</Text>
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

export default NewDeck