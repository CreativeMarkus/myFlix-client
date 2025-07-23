import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const MainView = ({ movies }) => {
    if (!movies || movies.length === 0) return <div>Loading movies...</div>;

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie._id}>
                    <h2>{movie.Title}</h2>
                    <Link to={`/movies/${movie._id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

MainView.propTypes = {
    movies: PropTypes.array.isRequired,
};
