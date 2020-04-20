import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { grey, green } from '../utils/colours'

function DeckSummary ({ deck }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <MaterialCommunityIcons style={styles.icon} name={deck.icon} size={50} />
      <Text style={styles.text}>{deck.questions.length} cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default DeckSummary