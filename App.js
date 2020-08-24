import React from "react";
import { View, Platform, StatusBar, Text, StyleSheet } from "react-native";
import AppLoading from './screens/AppLoading'
import {Router, Scene} from 'react-native-router-flux';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font';
// import { Constants } from "expo";
import FlashCardsNav from './navigation/FlashCardsNav'
import FlashCardsStack from './navigation/FlashCardsStack'
import Welcome from "./components/Welcome"
import { fetchAllDecks } from './utils/api';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { receiveDecks } from './actions/index';
import decks from "./reducers";

// import * as Font from 'expo-font'

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };


export default class App extends React.Component {
 
  store = createStore(reducer, middleware);

  state = {toLoaded: false }

  async componentDidMount() {

    // await setLocalNotification();

    const loadDecksPromise = fetchAllDecks();

    const loadFontsPromise = Font.loadAsync({
      // [robotoRegular]: require('./assets/fonts/OpenSans-Bold.ttf'),
      // [robotoMedium]: require('./assets/fonts/OpenSans-Regular.ttf')
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });

    Promise.all([loadDecksPromise, loadFontsPromise])
      .then(values => {
        const decks = values[0];
        this.store.dispatch(receiveDecks(decks));

        this.setState({
          toLoaded: true
        });
      });

      // console.log(decks.map(deck => (deck.id)))
  }
  
  render() {

  
    return (
     
    //  <FlashCardsStack/>
    <Provider store={this.store}>
      <Router>
      <Scene key="root">
        <Scene key="loading" component={AppLoading} initial={true} hideNavBar={true}></Scene>
        <Scene key="nav" component={FlashCardsNav} hideNavBar={true}></Scene>
      </Scene>
    </Router>
    </Provider>
    );
  }
}
