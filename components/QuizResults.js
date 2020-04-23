import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Button } from 'react-native'
import { lightGrey, white, grey, pink, green, orange } from '../utils/colours'

class QuizResult extends Component {
  render(){
    const { score, backToDeck, restartQuiz } = this.props
    let bgColor = pink

    if( score > 66 ){
      bgColor = green
    }
    else if ( score > 33 && score < 66 ){
      bgColor = orange
    }
    return (
      <View style={styles.container}>
        <Text style={styles.resultTitle}>Your Score!!!</Text>
        <View style={styles.results}>
          <View style={[styles.resultsBall, { backgroundColor: bgColor }]}>
            <Text style={styles.resultText}>{score}%</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Back to Deck'} onPress={() => backToDeck()} />
          <Button title={'Restart Quiz'} onPress={() => restartQuiz()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    padding: 20,
    width: 320,
    height: 350,
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
    elevation: 2,
    alignSelf: 'center'
  },
  resultTitle: {
    flex: 1,
    fontSize: 36
  },
  results: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultsBall: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75
  },
  resultText: {
    color: white,
    fontSize: 56
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
})

QuizResult.propTypes = {
  score: PropTypes.number.isRequired,
  backToDeck: PropTypes.func.isRequired,
  restartQuiz: PropTypes.func.isRequired
}

export default QuizResult