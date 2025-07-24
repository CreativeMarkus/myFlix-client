import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './movie-card.scss';

const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div className="movie-card" onClick={() => onMovieClick(movie)}>
            <img src={movie.ImagePath} alt={`${movie.Title} poster`} />
            <div className="movie-card-body">
                <h2>{movie.Title}</h2>
                <p>{movie.Description}</p>
                <Link to={`/movies/${movie._id}`}>More Info</Link>
            </div>
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
