import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native'
import Card from './Card'
import QuizResult from './QuizResults'

class Quiz extends Component {
  state = {
    quiz: [],
    score: 0,
    quizFinished: false
  }
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'Quiz'
    })
  }
  componentDidMount(){
    this.startQuiz()  
  }
  startQuiz(){
    const quiz = this.props.deck.questions
      .sort( () => Math.random() - Math.random())
    
    this.setState(() => ({ 
      quiz,
      score: 0,
      quizFinished: false
    }))
  }
  answerQuestion = (index, answer) => {
    if( answer === 'correct' ){
      this.setState(( prev ) => ({
        score: prev.score + 1
      }))
    }

    // if index is equal to 0, it means the user has 
    // answered the last question in the deck
    if( index === 0 ){
      this.setState(() => ({
        quizFinished: true
      }))
    }
  }
  goBack(){
    this.props.navigation.goBack()
  }
  render(){
    this.setTitle()
    
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {this.state.quizFinished 
            ? <QuizResult 
                backToDeck={this.goBack.bind(this)}
                restartQuiz={this.startQuiz.bind(this)}
                score={Math.round((this.state.score / this.state.quiz.length) * 100)}/>
            : this.state.quiz.map((card, index ) => (
                <Card 
                  key={index} 
                  card={card} 
                  index={index} 
                  answerQuestion={this.answerQuestion} />
              ))}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    width: 350,
    height: 550,
    position: 'relative'
  }
})

function mapStateToProps( decks, { route } ) {
  return {
    deck: decks[route.params.title]
  }
}

export default connect(mapStateToProps)(Quiz)