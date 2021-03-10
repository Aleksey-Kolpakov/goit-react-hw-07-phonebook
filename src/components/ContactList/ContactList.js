import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'
import phonebookActions from '../../redux/phonebook/phonebook-actions'

const ContactList = ({ visibleContacts, deleteContact }) => {
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
    console.log(state);
    const visibleContacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase()));
    return ({
        visibleContacts:visibleContacts,
    })
}

const mapDispatchToProps = dispatch => ({
   deleteContact:id=>dispatch(phonebookActions.deleteContact(id)) 
})
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    deleteContact: PropTypes.func.isRequired
}