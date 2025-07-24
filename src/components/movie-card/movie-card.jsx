import React from "react";
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            onClick={() => onMovieClick(movie)}
            style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "10px",
                margin: "10px",
                cursor: "pointer",
                width: "200px"
            }}
        >
            <img
                src={movie.ImagePath}
                alt={movie.Title}
                style={{ width: "100%" }}
            />
            <h3>{movie.Title}</h3>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        _id: PropTypes.string,
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
