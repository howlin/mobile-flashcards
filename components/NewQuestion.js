import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { lightGrey, white, purple, pink } from '../utils/colours'
import { addQuestion } from '../actions'
import { addCardToDeck } from '../utils/localStorage'

const MAX_LENGTH = 120

class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'New Question'
    })
  }
  handleChange = ( id, text ) => {
    this.setState(() => ({
      [id]: text
    }))
  }
  handleSubmit = ( ) => {
    const { dispatch, navigation, route } = this.props
    const { question, answer } = this.state
    const title = route.params.title

    const card = {
      question,
      answer
    }

    dispatch(addQuestion( title, card ))
    addCardToDeck( title, card )

    navigation.goBack()
  }
  render(){
    const { question, answer } = this.state

    this.setTitle()
    return (
      <View style={styles.container}>
        <Text>NewQuestion</Text>
        <TextInput
          style={styles.textInput}
          value={question}
          placeholder="The Question?"
          onChangeText={ text => this.handleChange('question', text) }
          multiline={true}
          maxLength={MAX_LENGTH} />
        <Text style={styles.charsLeft}>
          {MAX_LENGTH - question.length < MAX_LENGTH / 2 ? MAX_LENGTH - question.length : ''}
        </Text>
        <TextInput
          style={styles.textInput}
          value={answer}
          placeholder="The Answer?"
          onChangeText={ text => this.handleChange('answer', text) }
          multiline={true}
          maxLength={MAX_LENGTH} />
        <Text style={styles.charsLeft}>
          {MAX_LENGTH - answer.length < MAX_LENGTH / 2 ? MAX_LENGTH - answer.length : ''}
        </Text>
        <Button 
          title="Create Question" 
          color={purple}
          disabled={ question === '' || answer === '' ? true : false}
          onPress={this.handleSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: lightGrey,
    backgroundColor: white,
    height: 100,
    marginTop: 30,
    padding: 10
  },
  charsLeft: {
    color: pink,
    height: 20,
    alignSelf: 'flex-end'
  }
})

export default connect()(NewQuestion)