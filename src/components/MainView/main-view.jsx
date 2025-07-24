import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieView from './MovieView';
import './main-view.scss';

const MainView = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://movieapi1-683469e1d996.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }, []);

    const handleMovieClick = (movie) => {
        navigate(`/movies/${movie._id}`);
    };

    return (
        <div className="main-view">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="movies-list">
                            {movies.map((movie) => (
                                <MovieCard
                                    key={movie._id}
                                    movie={movie}
                                    onMovieClick={handleMovieClick}
                                />
                            ))}
                        </div>
                    }
                />
                <Route path="/movies/:movieId" element={<MovieView />} />
            </Routes>
        </div>
    );
};

export default MainView;
