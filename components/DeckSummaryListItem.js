import React from 'react'
import PropTypes from 'prop-types'
import DeckSummary from './DeckSummary'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { grey, white } from '../utils/colours'

function DeckSummaryListItem ({ deck }) {
  return (
    <TouchableOpacity onPress={() => {this.props.navigation.push('Deck')}}>
      <View style={styles.container}>
        <DeckSummary deck={deck} />
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
  deck: PropTypes.object.isRequired
}

export default DeckSummaryListItem