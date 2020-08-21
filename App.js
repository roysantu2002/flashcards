import React from "react";
import { View, Platform, StatusBar, Text, StyleSheet } from "react-native";
import Loading from './screen/Loading'
import {Router, Scene} from 'react-native-router-flux';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";
import FlashCardsNav from './navigation/FlashCardsNav'

export default class App extends React.Component {
 
  render() {
    return (
  
      <Router>
      <Scene key="root">
        <Scene key="loading" component={Loading} initial={true} hideNavBar={true}></Scene>
        <Scene key="nav" component={FlashCardsNav} hideNavBar={true}></Scene>
      </Scene>
    </Router>
    );
  }
}
