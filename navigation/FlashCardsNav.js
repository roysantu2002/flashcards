import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { purple, white, bgBlue } from "../utils/colors";
import AddDeck from "../components/AddDeck";
import { FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import FlashCardsStack from "./FlashCardsStack"

const TabNavigator = createBottomTabNavigator({
    Decks: {
      screen: FlashCardsStack,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "android" ? "#FB005B" : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? '#FB005B' : '#FB005B',
        // fontFamily: robotoRegular,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        fontSize: 13
      }
    }
  });

const MainNavigator = createAppContainer(TabNavigator);

export default class FlashCardsNav extends React.Component {

    render() {
        return (
          <View style={{ flex: 1 }}>
            <MainNavigator />
          </View>
        )
    }
  }
