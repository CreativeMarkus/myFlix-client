import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieView = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://movieapi1-6864726ab877.herokuapp.com/movies/${movieId}`)
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((err) => console.error('Failed to load movie:', err));
    }, [movieId]);

    if (!movie) return <div>Loading movie...</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>{movie.Title}</h2>
            <img src={movie.ImagePath} alt={movie.Title} style={{ width: '300px' }} />
            <p><strong>Description:</strong> {movie.Description}</p>
            <p><strong>Genre:</strong> {movie.Genre?.Name}</p>
            <p><strong>Director:</strong> {movie.Director?.Name}</p>
            <button onClick={() => navigate(-1)}>← Back</button>
        </div>
    );
};

export default MovieView;
