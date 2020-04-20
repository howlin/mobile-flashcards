import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import DeckSummaryListItem from './DeckSummaryListItem'

class DeckList extends Component {
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'Deck List'
    })
  }
  render(){
    const { decks } = this.props
    console.log( decks )
    this.setTitle()
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(decks)}
          renderItem={ ({ item }) => <DeckSummaryListItem deck={decks[item]} />}
          keyExtractor={item => (item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
})

function mapStateToProps( decks ) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)