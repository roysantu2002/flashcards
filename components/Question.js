import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../utils/globalStyles';


class Question extends Component {

  state = {
    showAnswerArea: false
  };

  handleShowAnswerPress = () => {
    this.setState({ showAnswerArea: true });
  };

  handleQuestionAnswered = (answeredCorrectly) => {
    const { onQuestionAnswered } = this.props;

    this.setState({ showAnswerArea: false });

    onQuestionAnswered(answeredCorrectly);
  };

  render() {

    const { questionObject } = this.props;

    return (
      <View>

        <Text style={Styles.title}>Question</Text>
        <Text style={Styles.largeText}>{ questionObject.question }</Text>

        {!this.state.showAnswerArea && (
          <View>
            <TouchableOpacity
              onPress={this.handleShowAnswerPress}
              style={Styles.btnSecondary}>
              <Text style={Styles.btnSecondaryText}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        )}

        {this.state.showAnswerArea && (
          <View>
            <Text style={Styles.heading}>Answer</Text>
            <Text style={Styles.largeText}>{ questionObject.answer }</Text>

            <Text style={Styles.heading}>How did you do?</Text>
            <Text style={Styles.smallText}>You got the answer...</Text>

            <View style={Styles.buttonsContainer}>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.handleQuestionAnswered(true)}
                  style={Styles.btnSuccess}>
                  <Text style={Styles.btnSuccessText}>Correct</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.handleQuestionAnswered(false)}
                  style={Styles.btnError}>
                  <Text style={Styles.btnErrorText}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

      </View>
    );

  }
}

Question.propTypes = {
  questionObject: PropTypes.object.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired
};

export default Question;

