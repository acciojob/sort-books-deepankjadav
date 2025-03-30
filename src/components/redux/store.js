import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

let store = configureStore({
    reducer: {
        books: reducer,
    },
});

export default store;