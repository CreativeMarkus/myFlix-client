import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const MovieView = ({ movies, onBackClick }) => {
    const { movieId } = useParams();
    const movie = movies?.find((m) => m._id === movieId);

    if (!movie) return <div>Loading movie...</div>;

    return (
        <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Description}</p>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};

MovieView.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            Title: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
        })
    ).isRequired,
    onBackClick: PropTypes.func.isRequired,
};
