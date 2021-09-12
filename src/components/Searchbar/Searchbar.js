import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Searchbar = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue.trim() === '') {
          return toast.error('Please do not use empty string, you have to write something');
        }

        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </header>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;