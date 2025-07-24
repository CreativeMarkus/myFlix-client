import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss';

const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div className="movie-card" onClick={() => onMovieClick(movie._id)}>
            <img src={movie.ImagePath} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Description}</p>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
};

export default MovieCard;
