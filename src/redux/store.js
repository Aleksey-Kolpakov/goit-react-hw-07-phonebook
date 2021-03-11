// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import { contactReducer, filterReducer, errorReducer, requesReducer } from './phonebook/phonebook-reducer'
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const defaultmiddleware = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
});

const middleware = [...defaultmiddleware, logger]
const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
    error: errorReducer,
    loading: requesReducer
})

// const persistedReducer=persistReducer(persistConfig, rootReducer);
// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development', /// devtools only in developmetn
    middleware,
})
// const persistor = persistStore(store)
// export default { store, persistor };
export default store;