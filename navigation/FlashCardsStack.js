import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Welcome from "../components/Welcome"
import Deck from "../components/Deck"
import AddCard from '../components/AddCard'
import Quiz from '../components/Quiz'

const FlashCardsStack = createStackNavigator({
  Decks: Welcome,
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
});

export default createAppContainer(FlashCardsStack);

