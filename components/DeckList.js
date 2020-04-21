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
    const { decks, navigation } = this.props
    const sortedDecks = Object.keys(decks)
            .map( key => decks[key] )
            .sort((a, b) => (b.timestamp - a.timestamp))

    this.setTitle()
    return (
      <View style={styles.container}>
        <FlatList
          data={sortedDecks}
          renderItem={ ({ item }) => <DeckSummaryListItem title={item.title} navigation={navigation} />}
          keyExtractor={item => (item.timestamp.toString())}
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