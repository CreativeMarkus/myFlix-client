import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainView } from "./components/MainView/main-view";
import { MovieView } from "./components/MovieView/movie-view";

const App = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://movieapi1-683469e1d996.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView movies={movies} />} />
                <Route
                    path="/movies/:movieId"
                    element={<MovieView movies={movies} onBackClick={() => window.history.back()} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
