import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import { white} from "../utils/colors";

// const Test = props => {
class Test extends Component {

  // state = { selectedCategory: []};

  // title = this.state.selectedCategory.title

  static navigationOptions = ({navigation}) => ({

        title: navigation.getParam("categoryId"),
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? "#FB005B" : white,
        },
        headerTintColor: Platform.OS === "android" ? white : "#FB005B",
  })

  componentDidMount() {
    
    const {navigation} = this.props
    const CATEGORIES  = this.props
    const catId = navigation.getParam("categoryId")
    // const {selectedCategory} = CATEGORIES.find((cat) => cat.id === catId)
    // console.log(selectedCategory.title)
    //  this.setState({
    //   selectedCategory
    // });

  }

  componentDidUpdate(prevProps) {

    this.navigation.setParams({
      myTitle: navigation.getParam("categoryId")
     })

    const {navigation} = this.props
    const CATEGORIES  = this.props
    // const catId = navigation.getParam("categoryId")
    // const {CATEGORIES}  = this.props
    // const {selectedCategory} = CATEGORIES.find((cat) => cat.id === catId)

    // console.log("did: "+selectedCategory)
  }

  render() {

    return (
      <View style={styles.screen}>
        <Text>The Category Meal Screen!</Text>
        {/* <Text>{this.state.selectedCategory.title}</Text> */}
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
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function mapStateToProps(decks) {
  // const catId = navigation.getParam("categoryId");
  const CATEGORIES = Object.keys(decks)
    .map((key) => decks[key])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    CATEGORIES,
  };
}

export default connect(mapStateToProps)(Test);

// export default Test;
