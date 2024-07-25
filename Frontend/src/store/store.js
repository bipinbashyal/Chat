import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './slices/messageSlice.js';
export const store = configureStore({
    reducer: messageReducer
})

export default store