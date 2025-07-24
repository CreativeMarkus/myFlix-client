import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

const MainView = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://movieapi1-683469e1d996.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }, []);

    const handleMovieClick = (movieId) => {
        navigate(`/movies/${movieId}`);
    };

    return (
        <div className="main-view">
            {movies.length === 0 ? (
                <div>Loading movies...</div>
            ) : (
                movies.map((movie) => (
                    <MovieCard
                        key={movie._id}
                        movie={movie}
                        onMovieClick={() => handleMovieClick(movie._id)}
                    />
                ))
            )}
        </div>
    );
};

MainView.propTypes = {
    movies: PropTypes.array,
};

export default MainView;
