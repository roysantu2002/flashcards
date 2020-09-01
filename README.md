# Mobile Flashcards

Mobile Flashcards is a React Native app for iOS and Android that allows users to create decks, add cards and quiz themselves.

# Project Overview

UdaciCards project is a mobile application (Android or iOS - or both) that allows users to study collections of flashcards It uses React Native, Expo, Redux, & React Navigation.

# Specification
The project is created using create-react-native-app as there is no starter code provided from Udacity team.

The specification provided in the rubric and been referred as a minimum required for this project. 

# Specific Requirements

- Used create-react-native-app to build the project.
- Allow users to create a deck which can hold an unlimited number of cards.
- Allow users to add a card to a specific deck.
- The front of the card should display the question.
- The back of the card should display the answer.
- Users should be able to quiz themselves on a specific deck and receive a score.
- Users should receive a notification as a reminder to study.

## Installation

Clone the repository, change directories, and use npm or yarn to install the dependencies.

```bash
$ git clone https://github.com/roysantu2002/flashcards.git
$ cd flashcards
$ yarn
```

## Usage

The project can be run with npm or yarn

- `yarn start`

This will open Expo Developer Tools in the browser.  You can then do one of the following.

- Use your device to test:

    Scan the QR Code using the Expo Client app ([Expo Client for Android & iOS](https://expo.io/)  from an Android or iOS device.

- Use an Android Emulator or iOS Simulator to run the app:

# Components
- Welcome.js
- QuizResults.js
- Quiz.js
- Question.js
- DeckGrid.js
- Deck.js
- AddDeck.js
- AddCard.js

# screens
- AppLoading.js

# utils
- helpers.js
- globalStyles.js
- fonts.js
- colors.js
- api.js
- _Data.js


## Testing

This project has been tested on the following platforms:

- iOS 12.2, Iphone X, [Physical Iphone 7, 12.4.1]
- Android 10+, API Level 30 [10.0 (Q) - API 29]
- Pixel XL API 30
