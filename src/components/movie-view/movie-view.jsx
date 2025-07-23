import React from 'react';
import PropTypes from 'prop-types';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Description}</p>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};

MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};
