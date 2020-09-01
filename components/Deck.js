import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { deleteDeckAS } from '../utils/api'
import { deleteDeck } from '../actions/index'
import { white } from "../utils/colors";
import Styles from "../utils/globalStyles";

class Deck extends Component {

  handleStartQuiz = () => {
    const { deleteDeck, navigation } = this.props
    const { id, decks } = this.props
    let questionsCount

    try{
        questionsCount = decks[id].questions.length
    }
    catch{questionsCount = 0}

    if (questionsCount === 0) {
      this.setState({ showNoQuestionsError: true });
    } else {
      navigation.navigate({
        routeName: "Quiz",
        params: {
          id: id,
        },
      });
    }
  };

  handleAddCard = () => {
    const { id } = this.props
    this.props.navigation.navigate({
      routeName: "AddCard",
      params: {
        id: id,
      },
    });
  };

  handleDeleteDeck = () => {
    const { deleteDeck, navigation } = this.props
    const { id } = this.props

    Alert.alert(
      "Delete Deck",
      `Are you sure you want to delete the deck ${id}?`,
      [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: async () => {
          
            await deleteDeckAS(id)
            deleteDeck(id);
            navigation.navigate("Decks");
          }
        }
      ],
      { cancelable: true }
    );
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title"),
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#FB005B" : white,
    },
    headerTintColor: Platform.OS === "android" ? white : "#FB005B",
  });


  render() {

    const { deck, decks, id } = this.props;
    console.log("Deck:",this.props.id)
    const { showNoQuestionsError } = this.props;
    const {title} = this.props
    let questionsCount = ""
    try{
        questionsCount = decks[id].questions.length
    }
    catch{questionsCount = 0}

    const startQuiz = (

      <TouchableOpacity
        onPress={this.handleStartQuiz}
        style={Styles.btnPrimary}
      >
        <Text style={Styles.btnPrimaryText}>Start Quiz</Text>
      </TouchableOpacity>
    );

    return (
      <View style={Styles.addContainer}>
        <Text style={Styles.title}>{this.props.navigation.getParam("id")}</Text>
        {questionsCount === 0 ? <Text style={Styles.cardCount}>No Cards Added</Text> :
        <Text style={Styles.cardCount}>{questionsCount} cards</Text>}
        <TouchableOpacity
          onPress={this.handleAddCard}
          style={Styles.btnSecondary}
        >
          <Text style={Styles.btnSecondaryText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.handleDeleteDeck()}
          style={Styles.btnSecondary}
        >
          <Text style={Styles.btnSecondaryText}>Delete Card</Text>
        </TouchableOpacity> 

        {questionsCount !==0 ? startQuiz : 
          <Text style={Styles.inputErrorText}>Add one or more cards, and begin quiz</Text>
        }

      </View>

    );
  }
}

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });


const mapStateToProps = (decks, { navigation }) => {
  const { id } = navigation.state.params;
  const deck = decks[id];
  return { 
    id,
    decks,
    deck}
};

export default connect(
  mapStateToProps,
  { deleteDeck }
)(Deck);

