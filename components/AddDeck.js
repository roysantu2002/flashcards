import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "../utils/globalStyles";
import { textColor } from "../utils/colors";
// import CustomStatusBar from '../components/CustomStatusBar';
import { addDeck } from "../actions";
import { saveDeckTitleAS } from "../utils/api";
import { StackActions, NavigationActions } from "react-navigation";
import Indicator from "./Indicator";

class AddDeck extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    addDeck: PropTypes.func.isRequired,
  };

  state = {
    title: "",
    loadingSpinner: false,
  };

  componentDidMount() {
    this.setState({
      loadingSpinner: false,
    });
  }

  onTitleChange = (value) => {
    this.setState({ title: value });
  };

  onSubmit = () => {

    const { decks, addDeck, navigation } = this.props;
    const { title } = this.state;
    const titleNoWhitespace = title.replace(/\s/g, "");
    if (!titleNoWhitespace.length) {
      this.setState({
        showRequiredInputError: true,
        showUniqueNameError: false,
      });
      return;
    }
    const titleAlreadyUsed = Object.keys(decks).some((key) => {
      const deck = decks[key];
      return deck.title === title;
    });

    if (titleAlreadyUsed) {
      this.setState({
        showRequiredInputError: false,
        showUniqueNameError: true,
      });
      return;
    }
   
    // addDeck(title);
    saveDeckTitleAS(title);

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: "Decks" }),
        NavigationActions.navigate({
          routeName: "Deck",
          params: { id: titleNoWhitespace },
        }),
      ],
    });
    navigation.dispatch(resetAction);

    this.setState(() => ({ title: "" }));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.addContainer}>
          <Text style={styles.title}>Add Deck</Text>
          <Text style={styles.tagline}>Create a flashcards deck</Text>
          <Text style={styles.label}>Deck Title</Text>
          <TextInput
            value={this.state.title}
            onChangeText={this.onTitleChange}
            style={styles.textInput}
          />
          {this.state.showRequiredInputError && (
            <Text style={styles.inputErrorText}>Please enter a title</Text>
          )}

          {this.state.showUniqueNameError && (
            <Text style={styles.inputErrorText}>
              This title has already been used
            </Text>
          )}

          <TouchableOpacity onPress={this.onSubmit} style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps, { addDeck })(AddDeck);
