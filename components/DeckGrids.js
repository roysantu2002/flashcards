import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

// const ChangeColorFunction = () => {
//   var ColorCode =
//     "rgb(" +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     ")";
// };

const DeckGrids = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (

    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: 'white' } }}
        >
          <Text style={styles.title} numberOfLines={1}>
            {props.title}
          </Text>
          <Text style={styles.created} numberOfLines={1}>
            created: {props.created}
          </Text>
          <Text style={styles.title} numberOfLines={1}>
            flashcard: {props.flashcards}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#FB005B',
    shadowOpacity: 0.16,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#FB005B',
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    textAlign: 'center'
  },
  created: {
    fontFamily: 'open-sans-bold',
    fontSize: 11,
    textAlign: 'center'
  }
});

export default DeckGrids;
