import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "../utils/globalStyles";
import { handleInitialData } from '../actions/index';
// import { CATEGORIES } from '../data/dummy-data';
import DeckGrid from "./DeckGrid";

import Colors from "../constants/Colors";

// const Welcome = props => {

class Welcome extends Component {

  async componentDidMount() {
    this.props.handleInitialData();
  }

  // static propTypes = {
  //   navigation: PropTypes.object.isRequired,
  //   handleInitialData: PropTypes.func.isRequired,
  //   decks: PropTypes.object.isRequired
  // };
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.deck !== undefined;
  // }
  // state = { itemData: [] };
  
  // async componentDidMount() {

  //   this.props.handleInitialData();

  //   // const { CATEGORIES } = this.props;

  //   // this.setState({
  //   //   itemData: CATEGORIES
  //   // });

  //   // console.print(this.state.itemData)
  // }

  renderGridItem = (itemData) => {

    // console.log("render:", itemData.item.title)
    // const itemData = this.state.itemData
    const title = itemData.item.title
    return (
      
      <DeckGrid
        title={itemData.item.title}
        flashcards={itemData.item.questions.length}
        onSelect={() => {
          this.props.navigation.navigate({
            routeName: "Deck",
            params: {
              id: itemData.item.id,
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
    //         deckId: itemData.item.id
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
    const { decks, navigation, title } = this.props;
   
    const decksList =  Object.keys(decks)
                      .map((key) => decks[key])

    const flatList =   
          <FlatList
          keyExtractor={(item, index) => item.id}
          data={decksList}
          renderItem={this.renderGridItem}
          numColumns={2}
        />

    const noList = <View style={styles.gridItem}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: 'white' } }}
      >
        <Text style={styles.title} numberOfLines={1}>
          Add Deck
        </Text>
      </View>
  </View>

    let showList = ""

    if(decksList.length ===  0 ? showList= noList : showList=flatList) 
 
    return (
      showList
    );
  }
}

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   gridItem: {
//     flex: 1,
//     margin: 15,
//     height: 150,
//   },
//   container: {
//     flex: 1,
//     borderRadius: 10,
//     shadowColor: '#FB005B',
//     shadowOpacity: 0.16,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 10,
//     elevation: 3,
//     padding: 15,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   title: {
//     color: '#FB005B',
//     fontFamily: 'open-sans-bold',
//     fontSize: 20,
//     textAlign: 'center'
//   },
// });


const mapStateToProps = state => ({ decks: state });

export default connect(
  mapStateToProps,
  { handleInitialData }
)(Welcome);
