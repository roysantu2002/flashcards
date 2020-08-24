import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";

// import { CATEGORIES } from '../data/dummy-data';
import Colors from "../constants/Colors";

// const Test = props => {
class Test extends Component {
  render() {
    const { CATEGORIES } = this.props;

    const catId = this.props.navigation.getParam("categoryId");

    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    return (
      <View style={styles.screen}>
        <Text>The Category Meal Screen!</Text>
        <Text>{selectedCategory.title}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            props.navigation.navigate({
              routeName: "MealDetail",
            });
          }}
        />
        <Button
          title="Go Back"
          onPress={() => {
            props.navigation.pop();
          }}
        />
      </View>
    );
  }


navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default connect(mapStateToProps)(Test);

// export default Test;
