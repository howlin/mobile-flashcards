import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  KeyboardAvoidingView, 
  Button, 
  FlatList,
  View,
  Dimensions,
  TouchableOpacity, 
  Keyboard,
  TouchableWithoutFeedback} from 'react-native'
import { grey, pink, purple, green } from '../utils/colours'
import { MaterialCommunityIcons } from '@expo/vector-icons'

class NewDeck extends Component {
  state = {
    deckTitle: '',
    deckImage: ''
  }
  setTitle = () => {
    this.props.navigation.setOptions({
      title: 'Create a New Deck'
    })
  }
  handleChange = (text) => {
    this.setState(() => ({
      deckTitle: text
    }))
  }
  handleSelectImage = ( image ) => {
    this.setState(() => ({
      deckImage: image
    }))
  }
  handleSubmit = () => {
    console.log(this.state.deckTitle)
  }
  imageList = [
    'cards-heart', 'cards-diamond', 'cards-club', 'cards-spade', 
    'cat', 'dog', 'donkey', 'duck', 'panda', 'owl', 'paw', 
    'pig', 'pirate', 'egg-easter', 'apple', 'android', 'cupcake', 
    'carrot', 'food-fork-drink', 'food-apple'
  ]
  renderIconItem = ({ item }) => {
    return (
      <View style={styles.iconView} key={item}>
        <TouchableOpacity onPress={() => { this.handleSelectImage(item) }}>
          <MaterialCommunityIcons 
            style={{
              color: this.state.deckImage === item ? pink : green
            }}
            name={item}
            size={50} />
        </TouchableOpacity>
      </View>
    )
  }
  render(){
    const { deckImage, deckTitle } = this.state
    this.setTitle()
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container}>
          <Text style={styles.formItemTitle}>Deck Name</Text>
          <TextInput
            style={styles.textInput}
            value={deckTitle}
            placeholder="New Deck Title"
            onChangeText={this.handleChange}
            caretHidden={false}/>
          <Text style={styles.formItemTitle}>Pick a Deck Icon</Text>
          <FlatList 
            data={this.imageList}
            renderItem={this.renderIconItem} 
            numColumns={4}
            scrollEnabled={false}
            keyExtractor={item => item} />
          <Button 
            title="Create Deck" 
            color={purple}
            disabled={ deckTitle === '' || deckImage === '' ? true : false}
            onPress={this.handleSubmit} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: grey,
    padding: 12,
    marginBottom: 30
  },
  formItemTitle: {
    marginBottom: 20,
    fontWeight: '500'
  },
  iconView: {
    width: (Dimensions.get('window').width - 100) / 4,
    alignItems: 'center'
  },
  icons: {
    color: green
  }
})

export default NewDeck