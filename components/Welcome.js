import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "../utils/globalStyles";
import { handleInitialData } from '../actions/index';
import DeckGrid from "./DeckGrid";

import Colors from "../constants/Colors";
class Welcome extends Component {

  async componentDidMount() {
    this.props.handleInitialData();
  }

  renderGridItem = (itemData) => {

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

const mapStateToProps = state => ({ decks: state });

export default connect(
  mapStateToProps,
  { handleInitialData }
)(Welcome);
