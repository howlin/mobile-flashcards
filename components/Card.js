import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Button, Animated, TouchableOpacity } from 'react-native'
import { grey, white, lightGrey, green, pink } from '../utils/colours'
import { Entypo } from '@expo/vector-icons'

class Card extends Component {
  state = {
    showAnswer: false,
    leftAnim: new Animated.Value(25),
    topAnim: new Animated.Value(0)
  }
  showAnswer = () => {
    this.setState({
      showAnswer: true
    })
  }
  showQuestion = () => {
    this.setState({
      showAnswer: false
    })
  }
  toggleShowAnswer = () => {
    this.setState((state) => ({
      showAnswer: !state.showAnswer
    }))
  }
  handleAnswerQuestion = (answer) => {
    const { answerQuestion, index } = this.props

    Animated.parallel([
      Animated.spring(this.state.leftAnim, {
        toValue: 500 * (Math.floor(Math.random() * 2) == 1 ? 1 : -1),
        speed: 1
      }),
      Animated.spring(this.state.topAnim, {
        toValue: Math.floor(Math.random() * 400) * (Math.floor(Math.random() * 2) == 1 ? 1 : -1),
        speed: 1
      })
    ]).start()

    answerQuestion( index, answer )
  }
  render() {
    const { card, index } = this.props
    const randomDeg = Math.floor(Math.random() * Math.floor(6))
    const plusOrMinus = Math.round(Math.random()) === 0 ? '-' : ''

    return (
      <Animated.View style={[
          styles.card,
          { left: this.state.leftAnim, top: this.state.topAnim },
          { transform: [{ rotate: `${plusOrMinus}${randomDeg}deg` }] }
        ]}>
          <View style={styles.questionHolder}>
            {this.state.showAnswer 
              ? <Text style={styles.text}>{card.answer}</Text> 
              : <Text style={styles.text}>{card.question}</Text> }
          </View>
          <View style={styles.showAnswerHolder}>
            {this.state.showAnswer 
              ? <Button title={'Show Question'} onPress={this.toggleShowAnswer} />
              : <Button title={'Show Answer'} onPress={this.toggleShowAnswer} />}
          </View>
          <View style={styles.answerButtons}>
            <TouchableOpacity onPress={() => this.handleAnswerQuestion('correct')}>
              <Entypo name='check' size={56} color={green} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleAnswerQuestion('wrong')}>
              <Entypo name='cross' size={56} color={pink} />
            </TouchableOpacity>
          </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    padding: 20,
    width: 300,
    height: 400,
    borderColor: lightGrey,
    borderWidth: .5,
    backgroundColor: white,
    borderRadius: 10,
    shadowColor: grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.9,
    elevation: 2
  },
  text: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center'
  },
  questionHolder: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  showAnswerHolder: {
    flex: 1
  },
  answerButtons: {
    flex: 1,
    flexDirection: 'row'
  }
})

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card