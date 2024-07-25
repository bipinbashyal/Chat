import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    messages: [{
        id:"user1",
        content:"This is sample message"
    }]
}



export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            state.messages.push(action.payload)
        },
        removeMessage: (state, action) => {
            state.messages = state.messages.filter((message) => message.id !== action.payload )
        },
    }
})

export const {sendMessage, removeMessage} = messageSlice.actions

export default messageSlice.reducer