import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DeckSummary from './DeckSummary'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { grey, white, lightGrey } from '../utils/colours'

function DeckSummaryListItem ({ deck, navigation }) {
  return (
    <TouchableOpacity onPress={() => {navigation.push('Deck', {title: deck.title})}}>
      <View style={styles.container}>
        <DeckSummary title={deck.title} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: white,
    marginBottom: 5,
    marginTop: 10,
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
  }
})

DeckSummaryListItem.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapStateToProps( decks, { title } ) {
  return {
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(DeckSummaryListItem)