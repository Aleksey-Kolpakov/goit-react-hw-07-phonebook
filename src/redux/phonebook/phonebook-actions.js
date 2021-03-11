import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040/';

const addContactSucces = createAction('phoneBook/addContactSucces');
const addContactError = createAction('phoneBook/addContactError');
const addContactRequest = createAction('phoneBook/addContactRequest')

//const addContact = createAction('phonebook/addContact');
// const addContact = contact => ({
//     type: actionTypes.ADD,
//     payload: contact
// })
// const deleteContact = createAction('phonebook/deleteContact');
const deleteContactSucces = createAction('phoneBook/deleteContactSucces');
const deleteContactError = createAction('phoneBook/deleteContactError');
const deleteContactRequest = createAction('phoneBook/deleteContactRequest');

// const deleteContact = id => ({
//     type: actionTypes.DELETE,
//     payload: id
// })
const fetchContactsRequest = createAction('phoneBook/fetchContactsRequest');
const fetchContactsSucces = createAction('phoneBook/fetchContactsSucces');
const fetchContactsError = createAction('phoneBook/fetchContactsError');

const changeFilter = createAction('phonebook/change-filter');
// const changeFilter = value => ({
//     type: actionTypes.CHANGE_FILTER,
//     payload: value
// })

export default {
    changeFilter,
    addContactSucces,
    addContactError,
    addContactRequest,
    deleteContactSucces,
    deleteContactError,
    deleteContactRequest,
    fetchContactsRequest,
    fetchContactsSucces,
    fetchContactsError
}