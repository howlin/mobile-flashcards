import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class QuizResult extends Component {
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'Quiz Results'
    })
  }
  render(){
    this.setTitle()
    return (
      <View style={styles.container}>
        <Text>QuizResult</Text>
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

export default QuizResult