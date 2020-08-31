import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { deleteDeckAS } from '../utils/api'
import { deleteDeck } from '../actions/index'
import { white } from "../utils/colors";
import globalStyles from "../utils/globalStyles";
// import NavigationService from "../navigation/navigationService";

// const Test = props => {
class Deck extends Component {

  // static propTypes = {
  //   navigation: PropTypes.object.isRequired,
  //   removeDeck: PropTypes.func.isRequired,
  //   deck: PropTypes.object
  // };
 
  // state = {
  //   showNoQuestionsError: false,
  // };

  handleStartQuiz = () => {
    const { deck, questionsCount } = this.props;
    const { navigate } = this.props.navigation;
    const { id } = this.props

    if (questionsCount === 0) {
      this.setState({ showNoQuestionsError: true });
    } else {
      navigate.navigation.navigate({
        routeName: "Quiz",
        params: {
          id: id,
        },
      });
    }
  };
  //   if (questionsCount === 0){
  //     this.setState({ showNoQuestionsError: true });
  //   } else {
  //     NavigationService.navigate('Quiz', {
  //       deckId: deckId
  //     });
  //   }
  // };

  handleDelete = () => {
  
    const { deleteDeck, navigation } = this.props
    const { id } = this.props

    deleteDeck(id)
    deleteDeckAS(id)
    navigation.goBack()

  };

  handleAddCard = () => {
    const { id } = this.props
    this.props.navigation.navigate({
      routeName: "AddCard",
      params: {
        id: id,
      },
    });
  };

  handleDeleteDeck = () => {
    const { deleteDeck, navigation } = this.props
    const { id } = this.props

    Alert.alert(
      "Delete Deck",
      `Are you sure you want to delete the deck ${id}?`,
      [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: async () => {
          
            await deleteDeckAS(id)
            deleteDeck(id);
            navigation.navigate("Decks");
          }
        }
      ],
      { cancelable: true }
    );
  };

  // const { deck } = this.props;

  // this.setState({ showNoQuestionsError: false });

  // // this.setState({ showNoQuestionsError: false });

  // NavigationService.navigate('AddCard', {
  //   deckId: this.props.deckId
  // });

  // };

  // state = { selectedCategory: []};

  // title = this.state.selectedCategory.title

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title"),
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#FB005B" : white,
    },
    headerTintColor: Platform.OS === "android" ? white : "#FB005B",
  });

  // componentDidMount() {
  //   const { navigation } = this.props;
  //   const CATEGORIES = this.props;
  //   const catId = navigation.getParam("deckId");
  //   // const {selectedCategory} = CATEGORIES.find((cat) => cat.id === catId)
  //   // console.log(selectedCategory.title)
  //   //  this.setState({
  //   //   selectedCategory
  //   // });
  // }

  // componentDidUpdate(prevProps) {
  //   // this.navigation.setParams({
  //   //   myTitle: navigation.getParam("deckId")
  //   //  })

  //   const { navigation } = this.props;
  //   const CATEGORIES = this.props;

  //   // const catId = navigation.getParam("deckId")
  //   // const {CATEGORIES}  = this.props
  //   // const {selectedCategory} = CATEGORIES.find((cat) => cat.id === catId)

  //   // console.log("did: "+selectedCategory)
  // }

  render() {

    const { deck, decks, id } = this.props;
    console.log("Deck:",this.props.id)
    const { showNoQuestionsError } = this.props;
    const {title} = this.props
    let questionsCount = ""
    try{
        questionsCount = decks[id].questions.length
    }
    catch{questionsCount = 0}

    const startQuiz = (

      <TouchableOpacity
        onPress={this.handleStartQuiz}
        style={globalStyles.btnPrimary}
      >
        <Text style={globalStyles.btnPrimaryText}>Start Quiz</Text>
      </TouchableOpacity>
    );

    return (
      <View style={[globalStyles.viewContainer, { marginTop: 8 }]}>
        {/* <View> */}
        <Text style={globalStyles.title}>{this.props.navigation.getParam("id")}</Text>
        {questionsCount === 0 ? <Text style={globalStyles.cardCount}>No Cards Added</Text> :
        <Text style={globalStyles.cardCount}>{questionsCount} cards</Text>}
        {/* </View> */}
        <TouchableOpacity
          onPress={this.handleAddCard}
          style={globalStyles.btnSecondary}
        >
          <Text style={globalStyles.btnSecondaryText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.handleDeleteDeck()}
          style={globalStyles.btnSecondary}
        >
          <Text style={globalStyles.btnSecondaryText}>Delete Card</Text>
        </TouchableOpacity> 
        {/* {/* <Text>{this.props.questionsCount}</Text>

        {this.props.questionsCount !==0 ? startQuiz : 
          <Text style={globalStyles.inputErrorText}>Add one or more cards before taking the quiz</Text>
        } */}

      </View>

      // </View>
      // <View style={styles.screen}>
      //   <Text>The Category Meal Screen!</Text>
      //   {/* <Text>{this.state.selectedCategory.title}</Text> */}
      //   <Button
      //     title="Go to Details"
      //     onPress={() => {
      //       props.navigation.navigate({
      //         routeName: "MealDetail",
      //       });
      //     }}
      //   />
      //   <Button
      //     title="Go Back"
      //     onPress={() => {
      //       props.navigation.pop();
      //     }}
      //   />
      // </View>
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


const mapStateToProps = (decks, { navigation }) => {
  const { id } = navigation.state.params;
  const deck = decks[id];
  return { 
    id,
    decks,
    deck}
    // questionsCount: decks[id].questions.length };
    // questionsCount: decks[deckId].questions.length };
};

export default connect(
  mapStateToProps,
  { deleteDeck }
)(Deck);


// function mapStateToProps(decks, { navigation }) {
//   //const { deckId } = navigation.getParam("deckId");
//   const { deckId } = navigation.state.params;

//   const CATEGORIES = Object.keys(decks)
//     .map((key) => decks[key])
//     .sort((a, b) => b.timestamp - a.timestamp);

//   return {
//     deckId,
//     deck: decks[deckId],
//     CATEGORIES,
//     questionsCount: decks[deckId].questions.length
//   };
// }

// export default connect(mapStateToProps, deleteDeck)(Deck);

// export default Test;
