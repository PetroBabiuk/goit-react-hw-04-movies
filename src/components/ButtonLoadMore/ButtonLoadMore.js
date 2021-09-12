import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonLoadMore.module.css';

const Button = ({ onClick }) => (
    <button className={s.ButtonLoadMore} onClick={onClick}>Load more</button>
);

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;