import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AddDeck from '../screens/AddDeck'
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = itemData => {
  return (
      <TouchableOpacity onPress={() => {
          props.navigation
      }}>
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
    </TouchableOpacity>
  );
};


const Welcome = props => {
    return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        // numColumns={2}
      />
    );
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