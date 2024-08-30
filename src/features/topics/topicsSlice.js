import { createSlice } from "@reduxjs/toolkit";

// Slice to manage the state of the Topics
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
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
        }
    }
})

// "topics" object state export
export const selectTopics = (state) => state.topics.topics;

// Action and reducer export
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;