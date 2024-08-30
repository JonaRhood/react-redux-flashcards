import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

// Slice to manage the state of the Topics
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            'Fantasy': {
                id: 'Fantasy',
                name: 'Fantasy',
                icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/spade.svg',
                quizIds: ['example quiz fantasy']
            },
            'Nature': {
                id: 'Nature',
                name: 'Nature',
                icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/tree.svg',
                quizIds: ['example quiz nature']
            },
            'Society': {
                id: 'Society',
                name: 'Society',
                icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/statistics.svg',
                quizIds: ['example quiz society']
            }
        }
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            if (state.topics[topicId]) {
                state.topics[topicId].quizIds.push(id);
            }
        })
    }

});

// "topics" object state export
export const selectTopics = (state) => state.topics.topics;

// Action and reducer export
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;