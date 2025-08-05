import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { SignupView } from "../signup-view/signup-view";
import { LoginView } from "../login-view/login-view";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!token) return;

        fetch("https://movieapi1-683469e1d996.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((movie) => ({
                    _id: movie._id,
                    title: movie.title,
                    description: movie.description,
                    director: movie.director,
                    genre: movie.genre,
                }));
                setMovies(moviesFromApi);
            })
            .catch((error) => console.error("Fetch error:", error));
    }, [token]);

    const handleLoggedOut = () => {
        setUser(null);
        setToken(null);
        localStorage.clear();
    };

    return (
        <BrowserRouter>
            <NavigationBar user={user} onLoggedOut={handleLoggedOut} />

            <Row className="justify-content-md-center">
                <Routes>
                    <Route
                        path="/signup"
                        element={
                            !user ? (
                                <Col md={5}>
                                    <SignupView />
                                </Col>
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            user ? (
                                <Navigate to="/" />
                            ) : (
                                <Col md={5}>
                                    <LoginView
                                        onLoggedIn={(user, token) => {
                                            setUser(user);
                                            setToken(token);
                                            localStorage.setItem("user", JSON.stringify(user));
                                            localStorage.setItem("token", token);
                                        }}
                                    />
                                </Col>
                            )
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            user ? (
                                <Col md={8}>
                                    <ProfileView />
                                </Col>
                            ) : (
                                <Navigate to="/login" replace />
                            )
                        }
                    />
                    <Route
                        path="/movies/:movieId"
                        element={
                            !user ? (
                                <Navigate to="/login" replace />
                            ) : movies.length === 0 ? (
                                <Col>The list is empty!</Col>
                            ) : (
                                <Col md={8}>
                                    <MovieView />
                                </Col>
                            )
                        }
                    />
                    <Route
                        path="/"
                        element={
                            !user ? (
                                <Navigate to="/login" replace />
                            ) : movies.length === 0 ? (
                                <Col>The list is empty!</Col>
                            ) : (
                                <>
                                    {movies.map((movie) => (
                                        <Col className="mb-4" key={movie._id} md={3}>
                                            <MovieCard movie={movie} />
                                        </Col>
                                    ))}
                                </>
                            )
                        }
                    />
                </Routes>
            </Row>
        </BrowserRouter>
    );
};
