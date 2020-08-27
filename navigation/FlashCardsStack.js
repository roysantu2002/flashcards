import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Welcome from "../components/Welcome"

import Deck from "../components/Deck"
import { View, Text, FlatList, StyleSheet } from 'react-native';
// import AddDeck from '../screens/AddDeck'
import AddCard from '../components/AddCard'
import { CATEGORIES } from '../data/dummy-data';

// const renderGridItem = itemData => {
//   return (
//     <View style={styles.gridItem}>
//       <Text>{itemData.item.title}</Text>
//     </View>
//   );
// };

const FlashCardsStack = createStackNavigator({
  Decks: Welcome,
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard
  }
  // MealDetail: Welcome
});

export default createAppContainer(FlashCardsStack);

// const FlashCardsStack = props => {
//   return (
//     <FlatList
//       keyExtractor={(item, index) => item.id}
//       data={CATEGORIES}
//       renderItem={renderGridItem}
//       numColumns={2}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   gridItem: {
//     flex: 1,
//     margin: 15,
//     height: 150
//   }
// });

// export default FlashCardsStack;