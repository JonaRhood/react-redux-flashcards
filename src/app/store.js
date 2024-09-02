import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./storeToLocalStorage"; 
import topicsReducer from '../features/topics/topicsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';
import cardsReducer from '../features/cards/cardsSlice';


const preloadedState = loadState();


const store = configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
  preloadedState 
});


store.subscribe(() => {
  saveState(store.getState());
});

export default store;
