import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { grey, green } from '../utils/colours'

function DeckSummary ({ deck }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <MaterialCommunityIcons style={styles.icon} name={deck.icon} size={50} />
      <Text style={styles.text}>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    color: grey,
    fontWeight: '800',
    marginBottom: 10
  },
  icon: {
    color: green,
    marginBottom: 10
  },
  text: {
    color: grey
  },
})

DeckSummary.propTypes = {
  deck: PropTypes.object.isRequired
}

function mapStateToProps( decks, { title } ) {
  return {
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(DeckSummary)