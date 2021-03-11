import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import styles from "./ContactForm.module.css";
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    };
    resetForm = () => {
        this.setState({
            name: '',
            number: ''
        })
    }
    createContact = (event) => {
        event.preventDefault();
        const { name, number } = this.state;
        const isNameExist = this.props.contacts.find(contact => contact.name === name);
        if (isNameExist) {
            alert(`${name} Already Exist`);
            return;
        }
        const contact = {
            name,
            number
        }
        this.props.addContactToState(contact);
        this.resetForm()
    }
    render() {
        const { name, number } = this.state
        return (

            <form className={styles.form} onSubmit={this.createContact} >
                <label>
                    Name
            <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Phone
            <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter Phone"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                    />
                </label>
                <button className={styles.button} type="submit">Add contact</button>
            </form>
        );
    }
}
const mapStateToProps = state => ({
    contacts: phonebookSelectors.getContacts(state),
})
const mapDispatchToProps = dispatch => ({
    addContactToState: contact => dispatch(phonebookOperations.addContact(contact)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    addContactToState: PropTypes.func.isRequired
}