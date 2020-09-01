import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from 'react-native';
import styles from "../utils/globalStyles";

const DeckGrid = props => {
  let TouchableCmp = TouchableOpacity;
  let cards = ""

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  if(props.flashcards === 1) {
    cards = "1 card"
  }else if(props.flashcards === 0){cards = "no card"}
  else{cards = props.flashcards + " cards"}

  return (

    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: 'white' } }}
        >
          <Text style={styles.title} numberOfLines={1}>
            {props.title}
          </Text>

          <Text style={styles.title} numberOfLines={1}>
          {cards}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default DeckGrid;
