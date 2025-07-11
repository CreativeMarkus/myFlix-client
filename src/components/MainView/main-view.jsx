import React, { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies] = useState([
        {
            id: 1,
            title: "Inception",
            description: "A skilled thief enters people's dreams to steal ideas.",
            image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
            genre: "Sci-Fi",
            director: "Christopher Nolan",
        },
        {
            id: 2,
            title: "The Matrix",
            description: "A hacker discovers reality is a simulation.",
            image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
            genre: "Action",
            director: "The Wachowskis",
        },
        {
            id: 3,
            title: "Interstellar",
            description: "A team explores a wormhole to save humanity.",
            image:
                "https://resizing.flixster.com/7c3qnZfPzZgID7Ft97PccFwEf9U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
            genre: "Sci-Fi",
            director: "Christopher Nolan",
        },
        {
            id: 4,
            title: "The Dark Knight",
            description: "Batman faces the Joker, a criminal mastermind wreaking havoc in Gotham.",
            image: "https://m.media-amazon.com/images/I/71dwS9phhCL.jpg",
            genre: "Action",
            director: "Christopher Nolan",
        },
        {
            id: 5,
            title: "Avatar",
            description: "A paraplegic Marine is sent to Pandora and becomes torn between two worlds.",
            image: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg",
            genre: "Sci-Fi",
            director: "James Cameron",
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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
                    key={movie.id}
                    movie={movie}
                    onMovieClick={setSelectedMovie}
                />
            ))}
        </div>
    );
};
