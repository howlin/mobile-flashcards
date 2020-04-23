import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import DeckSummaryListItem from './DeckSummaryListItem'
import { getDecks } from '../utils/localStorage'
import { receiveDecks } from '../actions'

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then(results => {
        dispatch(receiveDecks(JSON.parse(results)))
      })
    
  }
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
        {sortedDecks.length === 0 
          ? <View style={styles.emptyView}>
              <Text>No Decks Created Yet</Text>
              <Button title="Create a Deck" onPress={() => navigation.navigate('Add Deck')} />
            </View>
          : <FlatList
              data={sortedDecks}
              renderItem={ ({ item }) => <DeckSummaryListItem title={item.title} navigation={navigation} />}
              keyExtractor={item => (item.timestamp.toString())}
            />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30
  },
  emptyView: {
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 100,
    height: 100
  }
})

function mapStateToProps( decks ) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)