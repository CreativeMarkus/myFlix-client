import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieView = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://movieapi1-683469e1d996.herokuapp.com/movies/${movieId}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.error(error));
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-view">
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{movie.Title}</h1>
            <img src={movie.ImagePath} alt={`${movie.Title} poster`} />
            <p>{movie.Description}</p>
            {/* Add other movie details here as needed */}
        </div>
    );
};

export default MovieView;
