import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

export const SignupView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    /**
     * @param {Event} event 
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("");

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch("https://movieapi1-683469e1d996.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    throw errorData;
                }
                return response.json();
            })
            .then((data) => {
                console.log("Signup response: ", data);
                if (data.user || data._id) {
                    setMessage("Signup successful! You can now log in.");
                    setMessageType("success");

                } else {
                    setMessage("Signup failed: " + (data.message || "Unknown error. Please check your input."));
                    setMessageType("danger");
                }
            })
            .catch((error) => {
                console.error("Error during signup:", error);
                setMessage("Signup failed: " + (error.message || "Please check your network and try again."));
                setMessageType("danger");
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            {/* Display success or error messages using Bootstrap Alert */}
            {message && <Alert variant={messageType}>{message}</Alert>}

            {/* Username input field */}
            <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required // Make field mandatory
                    minLength="3" // Minimum length for username
                />
            </Form.Group>

            {/* Password input field */}
            <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required // Make field mandatory
                />
            </Form.Group>

            {/* Email input field */}
            <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            {/* Birthday input field */}
            <Form.Group controlId="formBirthday" className="mb-3">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                    type="date" // HTML5 date type for date picker
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required // Make field mandatory
                />
            </Form.Group>

            {/* Submit button */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

SignupView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
};
