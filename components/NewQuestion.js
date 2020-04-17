import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class NewQuestion extends Component {
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'New Question'
    })
  }
  render(){
    this.setTitle()
    return (
      <View style={styles.container}>
        <Text>NewQuestion</Text>
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

export default NewQuestion