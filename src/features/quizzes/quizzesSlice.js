import { createSlice } from "@reduxjs/toolkit";
import quizzes from '../../data/defaultQuizzesData'
import { removeTopic } from "../topics/topicsSlice";

// Slice to manage the state of the Quizzes
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds, icon, topicName } = action.payload;
            state.quizzes[name] = {
                id,
                name,
                topicId,
                cardIds,
                icon,
                topicName
            }
        },
        removeQuiz: (state, action) => {
            const { name } = action.payload;
            delete state.quizzes[name];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeTopic, (state, action) => {
            const { name } = action.payload;
                for (const quizName in state.quizzes) {
                    if (state.quizzes[quizName].topicName === name) {
                        delete state.quizzes[quizName];
                    }
                }
        })
    } 
})

// "topics" object state export
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Action and reducer export
export const { addQuiz, removeQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;