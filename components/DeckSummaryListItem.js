import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DeckSummary from './DeckSummary'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { grey, white } from '../utils/colours'

function DeckSummaryListItem ({ deck, navigation }) {
  return (
    <TouchableOpacity onPress={() => {navigation.push('Deck', {deckId: deck.title})}}>
      <View style={styles.container}>
        <DeckSummary deckId={deck.title} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: white,
    borderColor: grey,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 10
  }
})

DeckSummaryListItem.propTypes = {
  deckId: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapStateToProps( decks, { deckId } ) {
  return {
    deck: decks[deckId]
  }
}

export default connect(mapStateToProps)(DeckSummaryListItem)