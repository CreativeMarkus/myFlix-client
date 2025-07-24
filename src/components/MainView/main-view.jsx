import React, { useState, useEffect } from 'react';
import { MovieCard } from './MovieCard';
import axios from 'axios';
import './MainView.css';

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://movieapi1-683469e1d996.herokuapp.com/movies');
                setMovies(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (isLoading) return <div className="loading-spinner">Loading...</div>;
    if (error) return <div className="error-message">Error: {error}</div>;

    return (
        <div className="main-view">
            <h1>Featured Movies</h1>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} />
                ))}
            </div>
        </div>
    );
};