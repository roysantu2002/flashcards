import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';
import { textColor } from '../utils/colors';
// import { robotoMedium } from '../utils/fonts';
// import CustomStatusBar from '../components/CustomStatusBar';
import { addDeck } from '../actions';
import { saveDeckTitleAS } from '../utils/api';
import { StackActions, NavigationActions } from 'react-navigation';

class AddDeck extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    addDeck: PropTypes.func.isRequired
  };

  state = {
    title: ''
  };

  onTitleChange = (value) => {
    this.setState({ title: value });
  };


  onSubmit = () => {

    // const { decks, addDeck, goToDecks } = this.props;
    // const { title } = this.state;

    const { decks, addDeck, navigation } = this.props;
    const { title } = this.state;

    const titleNoWhitespace = title.replace(/\s/g, '');

    // Check that a title has been entered
    if (!titleNoWhitespace.length) {
      this.setState({ showRequiredInputError: true, showUniqueNameError: false });
      return;
    }

    // Check that the title is not already in use
    const titleAlreadyUsed = Object.keys(decks).some(key => {
      const deck = decks[key];
      return deck.title === title;
    });

    if (titleAlreadyUsed) {
      this.setState({ showRequiredInputError: false, showUniqueNameError: true });
      return;
    }

    addDeck(title)
    saveDeckTitleAS(title)
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Decks' }),
        NavigationActions.navigate({
          routeName: 'Deck',
          params: { id: titleNoWhitespace }
        })
      ]
    });
    navigation.dispatch(resetAction);

    this.setState(() => ({ text: '' }));
  };
  
  render() {
    return (
      <View style={{flex: 1}}>

        {/* <CustomStatusBar /> */}

        <View style={globalStyles.viewContainer}>
          <Text style={globalStyles.title}>Add Deck</Text>
          <Text style={styles.tagline}>Create a flashcards deck</Text>

          <Text style={styles.label}>Deck Title</Text>
          <TextInput value={this.state.title} onChangeText={this.onTitleChange} style={globalStyles.textInput} />


          {this.state.showRequiredInputError && (
            <Text style={globalStyles.inputErrorText}>Please enter a title</Text>
          )}

          {this.state.showUniqueNameError && (
            <Text style={globalStyles.inputErrorText}>This title has already been used</Text>
          )}

          <TouchableOpacity onPress={this.onSubmit} style={globalStyles.btnPrimary}>
            <Text style={globalStyles.btnPrimaryText}>Create Deck</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(
  mapStateToProps,
  { addDeck }
)(AddDeck);


const styles = StyleSheet.create({
  tagline: {
    color: textColor,
    fontSize: 16
  },
  label:{
    marginTop: 32,
    marginBottom: 4,
    fontSize: 16,
    // fontFamily: robotoMedium
  }
});
