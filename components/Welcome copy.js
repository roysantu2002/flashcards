import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import DeckGrids from "./DeckGrids"

import Colors from '../constants/Colors';

const Welcome = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Deck',
            params: {
              deckId: itemData.item.id
            }
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

// Welcome.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('deckId');

//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

//   return {
//     headerTitle: selectedCategory.title,
//     headerStyle: {
//       backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
//     },
//     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
//   };
// };

Welcome.navigationOptions = {
  headerTitle: 'Decks',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default Welcome;