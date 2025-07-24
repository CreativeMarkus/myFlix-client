import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movies/${movie._id}`}>
                <img src={movie.ImagePath} alt={movie.Title} />
                <h2>{movie.Title}</h2>
            </Link>
            <p>{movie.Description.substring(0, 100)}...</p>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string,
            Description: PropTypes.string
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string,
            Bio: PropTypes.string,
            Birth: PropTypes.string
        })
    }).isRequired
};