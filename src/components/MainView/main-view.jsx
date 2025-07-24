import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const MainView = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found, please login first");
            return;
        }

        fetch("https://movieapi1-683469e1d996.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch movies: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setMovies(data))
            .catch((error) => console.error("Fetch error:", error));
    }, []);

    const handleMovieClick = (movieId) => {
        navigate(`/movies/${movieId}`);
    };

    return (
        <div>
            {movies.length === 0 ? (
                <p>Loading movies...</p>
            ) : (
                movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} onMovieClick={handleMovieClick} />
                ))
            )}
        </div>
    );
};

export default MainView;
