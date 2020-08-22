import React from "react";
import { View, Platform, StatusBar, Text, StyleSheet } from "react-native";
import AppLoading from './screens/AppLoading'
import {Router, Scene} from 'react-native-router-flux';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import { Constants } from "expo";
import FlashCardsNav from './navigation/FlashCardsNav'
import FlashCardsStack from './navigation/FlashCardsStack'

import Welcome from "./components/Welcome"

// import * as Font from 'expo-font'

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };


export default class App extends React.Component {
 
  render() {
    return (
     
    //  <FlashCardsStack/>
      <Router>
      <Scene key="root">
        <Scene key="loading" component={AppLoading} initial={true} hideNavBar={true}></Scene>
        <Scene key="nav" component={FlashCardsNav} hideNavBar={true}></Scene>
      </Scene>
    </Router>
    );
  }
}
