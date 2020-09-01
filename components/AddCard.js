import React, { Component } from "react";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Styles from "../utils/globalStyles";
import { connect } from "react-redux";

import { addCardToDeck } from "../actions/index";
import { addCardToDeckAS } from "../utils/api";

class AddCard extends Component {

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
    const id = this.props.navigation.getParam('id')
    const { addCardToDeck, navigation } = this.props;
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
    }

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

    return (
      <View style={{ flex: 1 }}>
        <View style={Styles.addContainer}>
          <Text style={Styles.title}>{this.props.navigation.getParam('id')}</Text>
          <Text style={Styles.tagline}>
            Add a new card to the deck of flashcards
          </Text>

          <Text style={Styles.label}>Your question</Text>
          <TextInput
            value={this.state.question}
            onChangeText={this.onQuestionChange}
            style={Styles.textInput}
          />

          {this.state.showQuestionRequiredError && (
            <Text style={Styles.inputErrorText}>
              Please enter your question
            </Text>
          )}

          <Text style={Styles.label}>The answer</Text>
          <TextInput
            value={this.state.answer}
            onChangeText={this.onAnswerChange}
            style={Styles.textInput}
          />

          {this.state.showAnswerRequiredError && (
            <Text style={Styles.inputErrorText}>
              Please enter the answer
            </Text>
          )}

          <TouchableOpacity
            onPress={this.onSubmit()}
            style={Styles.btnPrimary}
          >
            <Text style={Styles.btnPrimaryText}>Add card</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({ decks: state});

export default connect(
  mapStateToProps,
  { addCardToDeck }
)(AddCard);