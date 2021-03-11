import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getFilter = state => state.filter;
const getError = state => state.error;
const getLoading = state => state.loading;

const getVisibleContacts = createSelector([getContacts, getFilter],
    (contacts, filter) => contacts.filter(({ name }) => {
        const searchFilter = filter.toLowerCase();
        return name.toLowerCase().includes(searchFilter)
    }));
export default { getContacts, getVisibleContacts, getFilter, getError, getLoading }