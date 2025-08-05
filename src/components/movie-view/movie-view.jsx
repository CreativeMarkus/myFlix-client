import React from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();

    const movie = movies.find((m) => m._id === movieId);

    if (!movie) {
        return <div>No movie details available.</div>;
    }

    return (
        <Card className="mt-3">
            {movie.imagePath && (
                <Card.Img
                    variant="top"
                    src={movie.imagePath.startsWith("http") ? movie.imagePath : `https://your-image-base-url.com/${movie.imagePath}`}
                    alt={movie.title}
                />
            )}
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{movie.genre}</Card.Subtitle>
                <Card.Text><strong>Director:</strong> {movie.director}</Card.Text>
                <Card.Text>{movie.description}</Card.Text>
                <Link to="/">
                    <Button variant="primary">Back</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

MovieView.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            director: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imagePath: PropTypes.string,
        })
    ).isRequired,
};
