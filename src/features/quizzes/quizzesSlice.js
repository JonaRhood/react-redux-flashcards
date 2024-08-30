import { createSlice } from "@reduxjs/toolkit";

// Slice to manage the state of the Quizzes
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            'example quiz fantasy': {
              id: 'example quiz fantasy',
              name: 'Fantasy World Trivia',
              topicId: 'example 2',
              cardIds: ['fantasy1', 'fantasy2', 'fantasy3', 'fantasy4'],
              icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/spade.svg'
            },
            'example quiz nature': {
                id: 'example quiz nature',
                name: 'Nature Wonders Quiz',
                topicId: 'example 2',
                cardIds: ['nature1', 'nature2', 'nature3', 'nature4'],
                icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/tree.svg',
            },
            'example quiz society': {
                id: 'example quiz society',
                name: 'Social Dynamics Quiz',
                topicId: 'example 2',
                cardIds: ['society1', 'society2', 'society3', 'society4'],
                icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/statistics.svg',
            },

        }
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds, icon } = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds,
                icon
            }
        }
    }
})

// "topics" object state export
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Action and reducer export
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;