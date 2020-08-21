import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { purple, white } from "../utils/colors";
import Welcome from "../components/Welcome";
import { FontAwesome } from "@expo/vector-icons";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

const TabNavigator = createBottomTabNavigator({
    Add: {
      screen: Welcome,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      },
    },

    History: {
        screen: Welcome,
        navigationOptions: {
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
        },
      },

    },
    {
      navigationOptions: {
        header: null,
      },
      tabBarOptions: {
        activeTintColor: Platform.OS === "ios" ? purple : white,
        style: {
          height: 56,
          backgroundColor: Platform.OS === "ios" ? white : purple,
          shadowColor: "rgba(0, 0, 0, 0.24)",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
      },
    }
  );

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
