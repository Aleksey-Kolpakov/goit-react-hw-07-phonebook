import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as randId } from 'uuid';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions'
import styles from "./ContactForm.module.css"
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
        const id = randId();
        const contact = {
            id,
            name: name,
            number: number
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
    contacts:state.contacts,
})
const mapDispatchToProps = dispatch => ({
    addContactToState: contact => dispatch(phonebookActions.addContact(contact)),
})
export default connect(mapStateToProps,mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    addContactToState: PropTypes.func.isRequired
}