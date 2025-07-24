import React from "react";
import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <img
                src={movie.ImagePath}
                alt={movie.Title}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <h1>{movie.Title}</h1>
            <p>{movie.Description}</p>

            <button
                onClick={onBackClick}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Back
            </button>
        </div>
    );
};

MovieView.propTypes = {
    movie: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string,
        ImagePath: PropTypes.string,
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,
};
