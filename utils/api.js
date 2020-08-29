import { AsyncStorage } from 'react-native';
import { decks } from './_Data'

const DECKS_STORAGE_KEY = 'Flash:Decks';

export function allData() {
  return decks;
}

function formatDeckResults(results) {
  return results === null ? decks : JSON.parse(results);
}

export async function fetchAllDecks() {
  try {
  const decksStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

  if (decksStorage === null) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  }

  return decksStorage === null ? decks : JSON.parse(decksStorage);
} catch (err) {
  console.log(err);
}

}

export async function getDeck(deckId) {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    return JSON.parse(storeResults)[deckId];
  } catch (err) {
    console.log(err);
  }
}

export async function saveDeckTitleAS(title) {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: []
        }
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export async function deleteDeckAS(deckId) {
  try {
    const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const data = JSON.parse(results);
    data[deckId] = undefined;
    delete data[deckId];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

export async function removeDeckFromStorage(deckId) {
  const decksData = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = JSON.parse(decksData);
  decks[deckId] = undefined;
  delete decks[deckId];
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
}

export async function addCardToDeckAS(title, card) {
  try {
    const deck = await getDeck(title);

    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card)
        }
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  } catch (err) {
    console.log(err);
  }
}

const dummyData = {
  Python: {
    id: 'Python',
    title: 'Python Programming',
    timestamp: 1563710400,
    created: '2020-08-21',
    questions: [
      {
        question: 'What is Python?',
        answer: 'Python is an interpreted, high-level, general-purpose programming language'
      }
    ]
  },
  Capitals: {
    id: 'Capitals',
    title: 'Capitals',
    timestamp: 1563796800,
    created: '2020-08-25',
    questions: [
      {
        question: 'What is the capital of Canada?',
        answer: 'Ottawa'
      },
      {
        question: 'What is the capital of China?',
        answer: 'Beijing'
      },
      {
        question: 'What is the capital of Poland?',
        answer: 'Warsaw'
      },
      {
        question: 'What is the capital of Germany?',
        answer: 'Berlin'
      }
    ]
  },
  React: {
    id: 'React',
    title: 'React',
    timestamp: 1563710400,
    created: '2020-08-21',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  }
};

