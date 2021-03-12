import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'
import phonebookActions from '../../redux/phonebook/phonebook-actions'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
const ContactList = ({ visibleContacts, deleteContact, fetchContacts }) => {
    useEffect(() => {
        fetchContacts();
    }, [fetchContacts])
    return (
        <ul className={styles.list}>
            {visibleContacts.map(contact => (
                <li key={contact.id} className={styles.item}>{contact.name}:{contact.number}
                    <button className={styles.button} type="button" onClick={() => deleteContact(contact.id)}>Delete contact</button>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = state => {

    return ({
        visibleContacts: phonebookSelectors.getVisibleContacts(state),
    })
}

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
    fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    deleteContact: PropTypes.func.isRequired
}