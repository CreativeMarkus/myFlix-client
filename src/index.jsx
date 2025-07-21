import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainView } from "./components/MainView/main-view";
import { MovieView } from "./components/MovieView/movie-view"; // Create this if needed

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/movies/:movieId" element={<MovieView />} />
        </Routes>
    </BrowserRouter>
);
