import { createSlice } from "@reduxjs/toolkit";
import { addQuiz, removeQuiz } from "../quizzes/quizzesSlice";
import topics from '../../data/defaultTopicData.js'

// Slice to manage the state of the Topics

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[name] = {
                id,
                name,
                icon,
                quizIds: []
            }
        },
        removeTopic: (state, action) => {
            const { name } = action.payload
            delete state.topics[name];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuiz, (state, action) => {
                const { name, topicId } = action.payload;
                if (state.topics[topicId]) {
                    state.topics[topicId].quizIds.push(name);
                }
            })
            .addCase(removeQuiz, (state, action) => {
                const { name } = action.payload;
                for (const topic of Object.values(state.topics)) {
                    topic.quizIds = topic.quizIds.filter(quizId => quizId !== name);
                }
            });
    }
});

// "topics" object state export
export const selectTopics = (state) => state.topics.topics;

// Action and reducer export
export const { addTopic, addQuizIdToTopic, removeTopic } = topicsSlice.actions;
export default topicsSlice.reducer;