import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {
            'fantasy1': {
                id: 'fantasy1',
                front: 'What is the most common language spoken by elves in fantasy literature?',
                back: 'Elvish (or Elven), often associated with languages like Sindarin or Quenya in J.R.R. Tolkien\'s works.'
            },
            'fantasy2': {
                id: 'fantasy2',
                front: 'In which fantasy series do characters travel to a world through a wardrobe?',
                back: '"The Chronicles of Narnia" by C.S. Lewis.'
            },
            'fantasy3': {
                id: 'fantasy3',
                front: 'What mythical creature is known for hoarding gold and breathing fire?',
                back: 'A Dragon'
            },
            'fantasy4': {
                id: 'fantasy4',
                front: 'Which fantasy series features the phrase "Winter is coming"?',
                back: '"A Song of Ice and Fire" series by George R.R. Martin, popularly known as "Game of Thrones."'
            },
            
            // Nature Quiz Cards
            'nature1': {
                id: 'nature1',
                front: 'What is the largest rainforest in the world?',
                back: 'The Amazon Rainforest.'
            },
            'nature2': {
                id: 'nature2',
                front: 'Which is the tallest mountain on Earth?',
                back: 'Mount Everest.'
            },
            'nature3': {
                id: 'nature3',
                front: 'Which ocean is the largest in the world?',
                back: 'The Pacific Ocean.'
            },
            'nature4': {
                id: 'nature4',
                front: 'What natural phenomenon is known as the "Aurora Borealis"?',
                back: 'The Northern Lights, a natural light display predominantly seen in high-latitude regions.'
            },
            
            // Society Quiz Cards
            'society1': {
                id: 'society1',
                front: 'What is the term for a society where the eldest male is the head of the family?',
                back: 'Patriarchy.'
            },
            'society2': {
                id: 'society2',
                front: 'Which system of government is defined by the rule of the people?',
                back: 'Democracy.'
            },
            'society3': {
                id: 'society3',
                front: 'What term describes the practice of moving from one place to another, typically for work or better living conditions?',
                back: 'Migration.'
            },
            'society4': {
                id: 'society4',
                front: 'What is the study of human societies and cultures called?',
                back: 'Anthropology.'
            }
        }
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id,
                front,
                back
            }
        }
    }
})

export const selectCards = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;