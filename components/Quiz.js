import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class Quiz extends Component {
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'Quiz'
    })
  }
  render(){
    this.setTitle()
    return (
      <View style={styles.container}>
        <Text>Quiz</Text>
        <Button title={'See Quiz Results'} onPress={() => {this.props.navigation.push('QuizResults')}} />
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

export default Quiz