import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css'
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions'
const Filter = ({ filter, handleChange }) => {

    return (
        <label>
            Find contacts by name
              <input
                className={styles.input}
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
            />
        </label>
    );
};
const mapStateToProps = state => ({
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    handleChange: e => dispatch(phonebookActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}