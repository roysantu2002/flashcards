import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { white } from "../utils/colors";
import globalStyles from "../utils/globalStyles";
import NavigationService from "../navigation/navigationService";

// const Test = props => {
class Deck extends Component {
  state = {
    showNoQuestionsError: false,
  };

  handleStartQuiz = () => {
    const { deck, questionsCount } = this.props;

    if (questionsCount === 0) {
      this.setState({ showNoQuestionsError: true });
    } else {
      this.props.navigation.navigate({
        routeName: "Quiz",
        params: {
          deckId: this.props.navigation.getParam("deckId"),
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

  handleAddCard = () => {
    // console.log("add:"+this.props.onSelect)
    this.props.navigation.navigate({
      routeName: "AddCard",
      params: {
        deckId: this.props.navigation.getParam("deckId"),
      },
    });
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
    title: navigation.getParam("deckId"),
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#FB005B" : white,
    },
    headerTintColor: Platform.OS === "android" ? white : "#FB005B",
  });

  componentDidMount() {
    const { navigation } = this.props;
    const CATEGORIES = this.props;
    const catId = navigation.getParam("deckId");
    // const {selectedCategory} = CATEGORIES.find((cat) => cat.id === catId)
    // console.log(selectedCategory.title)
    //  this.setState({
    //   selectedCategory
    // });
  }

  componentDidUpdate(prevProps) {
    // this.navigation.setParams({
    //   myTitle: navigation.getParam("deckId")
    //  })

    const { navigation } = this.props;
    const CATEGORIES = this.props;

    // const catId = navigation.getParam("deckId")
    // const {CATEGORIES}  = this.props
    // const {selectedCategory} = CATEGORIES.find((cat) => cat.id === catId)

    // console.log("did: "+selectedCategory)
  }

  render() {
    const { deck } = this.props;
    const { showNoQuestionsError } = this.state;

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
        <Text style={globalStyles.title}>Deck</Text>

        <TouchableOpacity
          onPress={this.handleAddCard}
          style={globalStyles.btnSecondary}
        >
          <Text style={globalStyles.btnSecondaryText}>Add Card</Text>
        </TouchableOpacity>
        {/* <Text>{this.props.questionsCount}</Text> */}

        {this.props.questionsCount !==0 ? startQuiz : 
          <Text style={globalStyles.inputErrorText}>
            Add quiz to start the game...
          </Text>
        }

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

function mapStateToProps(decks, { navigation }) {
  // const { deckId } = navigation.getParam("deckId");
  const { deckId } = navigation.state.params;

  const CATEGORIES = Object.keys(decks)
    .map((key) => decks[key])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    deckId,
    deck: decks[deckId],
    CATEGORIES,
    questionsCount: decks[deckId].questions.length
  };
}

export default connect(mapStateToProps)(Deck);

// export default Test;
