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

    if (!movie) return <p>Loading...</p>;

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>{movie.Title}</h2>
            <p>{movie.Description}</p>
        </div>
    );
};

export default MovieView;
