import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Styles from '../utils/globalStyles';
import Question from '../components/Question';
import QuizResults from '../components/QuizResults';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';


class Quiz extends Component {

  state = {
    currentQuestionIndex: 0,
    answeredCorrectly: 0,
    quizComplete: false
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  handleQuestionAnswered = async (answeredCorrectly) => {

    if (answeredCorrectly) {
      this.setState({answeredCorrectly: this.state.answeredCorrectly + 1});
    }

    const isQuizComplete = this.state.currentQuestionIndex === this.props.questions.length - 1;

    if (isQuizComplete) {

      this.setState({quizComplete: true});
    } else {
      this.setState({currentQuestionIndex: this.state.currentQuestionIndex + 1});
    }
  };

  handleStartQuizAgain = () => {
    this.setState({
      currentQuestionIndex: 0,
      answeredCorrectly: 0,
      quizComplete: false
    });
  };

  render() {

    const { questions } = this.props;
    const { currentQuestionIndex, answeredCorrectly, quizComplete } = this.state;
    const currentQuestionObject = questions[currentQuestionIndex];

    return (
      <View style={{flex: 1}}>
        <View style={Styles.addContainer}>
          {quizComplete
            ? <QuizResults
                questionsAnsweredCorrectly={answeredCorrectly}
                totalQuestions={questions.length}
                onStartQuizAgain={this.handleStartQuizAgain}
                navigation={this.props.navigation}

              />
            : <Question
                questionObject={currentQuestionObject}
                onQuestionAnswered={this.handleQuestionAnswered}
              />}

        </View>

      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const { id, questions } = navigation.state.params;

  return {
    id,
    questions: decks[id].questions
  };
}

export default connect(mapStateToProps)(Quiz);

