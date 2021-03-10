import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact');
// const addContact = contact => ({
//     type: actionTypes.ADD,
//     payload: contact
// })
const deleteContact =createAction('phonebook/deleteContact');
// const deleteContact = id => ({
//     type: actionTypes.DELETE,
//     payload: id
// })
const changeFilter =createAction('phonebook/change-filter');
// const changeFilter = value => ({
//     type: actionTypes.CHANGE_FILTER,
//     payload: value
// })

export default { addContact, deleteContact, changeFilter }