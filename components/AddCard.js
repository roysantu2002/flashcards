import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../utils/globalStyles";
import { textColor } from "../utils/colors";
import { connect } from "react-redux";

import { addCardToDeck } from "../actions/index";
import { addCardToDeckAS } from "../utils/api";

class AddCard extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    addCardToDeck: PropTypes.func.isRequired,
  };
  state = {
    question: "",
    answer: "",
  };

  handleQuestionChange = (question) => {
    this.setState({ question });
  };
  handleAnswerChange = (answer) => {
    this.setState({ answer });
  };

  onSubmit = () => () => {
    const { addCardToDeck, id, navigation } = this.props;
    const { question, answer } = this.state;

    const questionNoWhitespace = question.replace(/\s/g, "");
    const answerNoWhitespace = answer.replace(/\s/g, "");

    let validationFailed = false;

    if (!questionNoWhitespace.length) {
      this.setState({ showQuestionRequiredError: true });
      validationFailed = true;
    } else {
      this.setState({ showQuestionRequiredError: false });
    }

    if (!answerNoWhitespace.length) {
      this.setState({ showAnswerRequiredError: true });
      validationFailed = true;
    } else {
      this.setState({ showAnswerRequiredError: false });
    }

    if (validationFailed) {
      return;
    }

    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };
    addCardToDeck(id, card);
    addCardToDeckAS(id, card);
    this.setState({ question: "", answer: "" });
    navigation.goBack();
  };

  onQuestionChange = (value) => {
    this.setState({ question: value });
  };

  onAnswerChange = (value) => {
    this.setState({ answer: value });
  };

  render() {
    const { id } = this.props

    return (
      <View style={{ flex: 1 }}>
        <Text>{this.props.navigation.getParam("id")}</Text>
        <View style={globalStyles.viewContainer}>
          <Text style={globalStyles.title}>Add Card</Text>
          <Text style={styles.tagline}>
            Add a new card to the deck of flashcards
          </Text>

          <Text style={styles.label}>Your question</Text>
          <TextInput
            value={this.state.question}
            onChangeText={this.onQuestionChange}
            style={globalStyles.textInput}
          />

          {this.state.showQuestionRequiredError && (
            <Text style={globalStyles.inputErrorText}>
              Please enter your question
            </Text>
          )}

          <Text style={styles.label}>The answer</Text>
          <TextInput
            value={this.state.answer}
            onChangeText={this.onAnswerChange}
            style={globalStyles.textInput}
          />

          {this.state.showAnswerRequiredError && (
            <Text style={globalStyles.inputErrorText}>
              Please enter the answer
            </Text>
          )}

          <TouchableOpacity
            onPress={this.onSubmit(this.props.id)}
            style={globalStyles.btnPrimary}
          >
            <Text style={globalStyles.btnPrimaryText}>Add card</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tagline: {
    color: textColor,
    fontSize: 16,
  },
  label: {
    marginTop: 32,
    marginBottom: 4,
    fontSize: 16,
    // fontFamily: robotoMedium
  },
});

const mapStateToProps = (state, { navigation }) => {
  const { id } = navigation.state.params;
  //const id = navigation.getParam('id', 'undefined');

  return {
    id
  };
};

export default connect(
  mapStateToProps,
  { addCardToDeck }
)(AddCard);