import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://movieapi1-683469e1d996.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    if (movies.length === 0) {
        return <div>Loading movies...</div>;
    }

    if (selectedMovie) {
        return (
            <MovieView
                movie={selectedMovie}
                onBackClick={() => setSelectedMovie(null)}
            />
        );
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(movie) => setSelectedMovie(movie)}
                />
            ))}
        </div>
    );
};
