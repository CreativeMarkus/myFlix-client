import React from "react";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <button onClick={onBackClick}>Back</button>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.description}</p>
            <p>Genre: {movie.genre}</p>
            <p>Director: {movie.director}</p>
        </div>
    );
};
