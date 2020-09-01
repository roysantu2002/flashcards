import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../utils/globalStyles';
import { robotoMedium } from '../utils/fonts';
import { textColor } from '../utils/colors';
import NavigationService from '../navigation/navigationService';

function QuizResults(props) {

  const { totalQuestions, questionsAnsweredCorrectly, onStartQuizAgain } = props;
  const percentage = Math.round((100 / totalQuestions) * questionsAnsweredCorrectly);
  {console.log(props)}
  return (
    <View>
      <Text style={Styles.title}>Quiz Complete</Text>
      <Text style={Styles.largeText}>
        You got { questionsAnsweredCorrectly } out of { totalQuestions } correct ({ percentage }%)
      </Text>

      <TouchableOpacity
        onPress={onStartQuizAgain}
        style={Styles.btnSecondary}>
        <Text style={Styles.btnSecondaryText}>Start Quiz Again</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.popToTop()}}
        style={Styles.btnSecondary}>
        <Text style={Styles.btnSecondaryText}>Return To Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
//   largeText: {
//     marginTop: 8,
//     marginBottom: 20,
//     fontSize: 20,
//     fontFamily: robotoMedium,
//     color: textColor
//   }
// });

export default QuizResults;
