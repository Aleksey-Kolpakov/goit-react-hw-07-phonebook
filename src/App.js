import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';
import phonebookOperations from './redux/phonebook/phonebook-operations'
import Loader from 'react-loader-spinner';
class App extends Component {
  componentDidMount() {
    this.props.fetchContacts()
  }
  render() {
    return (
      <div className={styles.container} >
        <h1>Phonebook</h1>
        {this.props.error && (
          <>
            <h1>Error</h1>
            <p>{this.props.error}</p>
          </>
        )}
        <ContactForm />
        {this.props.loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div >
    );
  }
}
const mapStateToProps = state => ({
  error: state.error,
  loading: state.loading
})
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

