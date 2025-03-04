import React, { useState } from 'react';
import sparklogo from "../assets/images/sparklogo.png";
import woman from "../assets/images/woman.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import "../styles/aboutuser.css";

const Aboutuser = () => {
    const [username, setUsername] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const showToast = (message, type) => {
        toast(
            <div className={type === "success" ? "success-toast" : "error-toast"}>
                {type === "success" ? <FaCheckCircle style={{ marginRight: "10px" }} /> : <FaExclamationTriangle style={{ marginRight: "10px" }} />}
                {message}
            </div>,
            { className: "custom-toast", closeButton: false, autoClose: 3000 }
        );
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSubmit = async () => {
        if (!username || !selectedCategory) {
            setMessage("Please enter a username and select a category.");
            setIsError(true);
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/user/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ username, category: selectedCategory }),
            });

            const data = await response.json();

            if (response.ok) {
                showToast("Profile updated successfully! Redirecting...", "success");
                setIsError(false);
                setTimeout(() => {
                    window.location.href = "/links";
                }, 2000);
            } else {
                showToast(data.message || "Failed to update profile", "error");
                setIsError(true);
            }
        } catch (error) {
            showToast("An error occurred. Please try again.", "error");
            setIsError(true);
            console.error("Error:", error);
        }
    };

    return (
        <div className="aboutuser-container">
            <ToastContainer position="top-center" autoClose={3000} />
            {/* Left Section */}
            <div className="left-section">
                {/* Logo */}
                <img src={sparklogo} alt="Spark Logo" className="logo" />

                {/* Heading */}
                <h1 className="heading">Tell us about yourself</h1>
                <p className="subheading">For a personalized Spark experience</p>

                {/* Feedback Message */}
                {message && (
                    <p className={`feedback-message ${isError ? "error" : "success"}`}>
                        {message}
                    </p>
                )}

                {/* Username Input */}
                <input
                    type="text"
                    placeholder="Tell us your username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="username-input"
                />

                {/* Category Selection */}
                <p className="category-heading">Select one category that best describes your Linktree:</p>
                <div className="category-buttons">
                    {["Business", "Creative", "Education", "Entertainment", "Fashion & Beauty", "Food & Beverage",
                        "Government & Politics", "Health & Wellness", "Non-Profit", "Other", "Tech", "Travel & Tourism"]
                        .map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                className={`category-button ${selectedCategory === category ? "selected" : ""}`}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleSubmit}
                    className={`continue-button ${username && selectedCategory ? "enabled" : ""}`}
                    disabled={!username || !selectedCategory}
                >
                    Continue
                </button>
            </div>

            {/* Right Section */}
            <div className="right-section">
                <img src={woman} alt="Woman" />
            </div>
        </div>
    );
};

export default Aboutuser;