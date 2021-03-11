import axios from 'axios';
import actions from './phonebook-actions'
axios.defaults.baseURL = 'http://localhost:4040/';

const addContact = contact => dispatch => {
    dispatch(actions.addContactRequest());
    axios.post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSucces(data)))
        .catch(error => dispatch(actions.addContactError(error)))
}

const deleteContact = id => dispatch => {
    dispatch(actions.deleteContactRequest());
    axios.delete(`/contacts/${id}`)
        .then(() => dispatch(actions.deleteContactSucces(id)))
        .catch(error => dispatch(actions.deleteContactError(error)))
}
const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactsRequest());
    axios.get(`/contacts/`)
        .then(({ data }) => dispatch(actions.fetchContactsSucces(data)))
        .catch(error => dispatch(actions.fetchContactsError(error)))
}
export default { addContact, deleteContact, fetchContacts }