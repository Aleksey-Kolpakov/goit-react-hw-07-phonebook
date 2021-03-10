import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebook-actions'

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
}
export const contactReducer=createReducer(initialState.contacts, {
  [phonebookActions.addContact]: (state, {payload}) => [payload, ...state],
  [phonebookActions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
});
// export const contactReducer = (state = initialState.contacts, { type, payload }) => {
//     switch (type) {
//         case actionTypes.ADD:
//             return [payload, ...state];
//         case actionTypes.DELETE:
//             return state.filter(contact => contact.id !== payload)
//         default:
//             return state;
//     }
// }
export const filterReducer = createReducer(initialState.filter, {
    [phonebookActions.changeFilter]: (state, { payload }) => payload,
})
// export const filterReducer = (state = "", { type, payload }) => {
//     switch (type) {
//         case actionTypes.CHANGE_FILTER:
//             return payload;
//         default:
//             return state;
//     }
// }