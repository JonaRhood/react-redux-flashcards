import { createSlice } from "@reduxjs/toolkit";

// Slice to manage the state of the Quizzes
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                quizId,
                name,
                topicId,
                cardIds: []
            }
        }
    }
})

// "topics" object state export
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Action and reducer export
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;