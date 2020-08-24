import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

// import { CATEGORIES } from '../data/dummy-data';
import DeckGrids from "./DeckGrids";

import Colors from "../constants/Colors";

// const Welcome = props => {

class Welcome extends Component {
  renderGridItem = (itemData) => {
    return (
      <DeckGrids
        title={itemData.item.title}
        color={itemData.item.created}
        onSelect={() => {
          this.props.navigation.navigate({
            routeName: "Deck",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );

    // <TouchableOpacity
    //   style={styles.gridItem}
    //   onPress={() => {
    //     props.navigation.navigate({
    //       routeName: 'Deck',
    //       params: {
    //         categoryId: itemData.item.id
    //       }
    //     });
    //   }}
    // >
    //   <View>
    //     <Text>{itemData.item.title}</Text>
    //   </View>
    // </TouchableOpacity>
    // );
  };

  render() {
    const { CATEGORIES } = this.props;
    // console.log(decksArray.map(deck => (deck.id )))

    return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={this.renderGridItem}
        numColumns={2}
      />
    );
  }
}

// Welcome.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('categoryId');

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
  headerTitle: "Decks",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

function mapStateToProps(decks) {
  const CATEGORIES = Object.keys(decks)
    .map((key) => decks[key])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    CATEGORIES,
  };
}

export default connect(mapStateToProps)(Welcome);

// export default Welcome;
