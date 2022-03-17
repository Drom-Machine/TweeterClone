import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userState';
import { sqawkReducer } from './SqawkState';

const store = configureStore({
    preloadedState: JSON.parse(window.localStorage.getItem('applicationState')) || {},
    reducer: {
        user: userReducer,
        sqawk: sqawkReducer,
    },
})

function handleOnChange() {
    const newStore = store.getStore();
    window.localStorage.setItem('applicationState', JSON.stringify(newStore));
}

store.subscribe(handleOnChange)

export default store;