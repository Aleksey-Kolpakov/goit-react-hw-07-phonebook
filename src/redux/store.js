// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import { contactReducer, filterReducer } from './phonebook/phonebook-reducer'
import { configureStore, getDefaultMiddleware,combineReducers} from '@reduxjs/toolkit'
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const defaultmiddleware = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
});

const middleware=[...defaultmiddleware,logger]
const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer
})

const persistConfig = {
  key: 'phoneBook',
    storage,
  blacklist: ['filter'],
}
const persistedReducer=persistReducer(persistConfig, rootReducer);
// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development', /// devtools only in developmetn
    middleware,
})
const persistor=persistStore(store)
export default { store, persistor };