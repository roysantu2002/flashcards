import React from "react";
import { View, Platform, StatusBar, Text, StyleSheet } from "react-native";
import AppLoading from './screens/AppLoading'
import {Router, Scene} from 'react-native-router-flux';
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font';
import { openSansBold, openSansRegular } from './utils/fonts';
import FlashCardsNav from './navigation/FlashCardsNav'
// import FlashCardsStack from './navigation/FlashCardsStack'
// import Welcome from "./components/Welcome"
import { fetchAllDecks } from './utils/api';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { receiveDecks } from './actions/index';
// import decks from "./reducers";
import { setLocalNotification } from './utils/helpers';

export default class App extends React.Component {
 
  store = createStore(reducer, middleware);

  state = {toLoaded: false }

  async componentDidMount() {

    await setLocalNotification()

    const loadDecksPromise = fetchAllDecks();

    const loadFontsPromise = Font.loadAsync({
      [openSansBold]: require('./assets/fonts/OpenSans-Bold.ttf'),
      [openSansRegular]: require('./assets/fonts/OpenSans-Regular.ttf')
    });

    Promise.all([loadDecksPromise, loadFontsPromise])
      .then(values => {
        const decks = values[0];
        this.store.dispatch(receiveDecks(decks));

        this.setState({
          toLoaded: true
        });
      });
  }
  
  render() {

    return (

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
