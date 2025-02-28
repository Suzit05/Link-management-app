import React, { useState } from 'react';
import sparklogo from "../assets/images/sparklogo.png";
import woman from "../assets/images/woman.png";

const Aboutuser = () => {
    // State for username
    const [username, setUsername] = useState("");

    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState("");

    // State for feedback messages
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    // Handle username input change
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    // Handle category selection
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (!username || !selectedCategory) {
            setMessage("Please enter a username and select a category.");
            setIsError(true);
            return;
        }

        try {
            // Send POST request to the backend
            const response = await fetch('http://localhost:3000/api/user/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Include JWT token for authentication
                },
                body: JSON.stringify({ username, category: selectedCategory }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Profile updated successfully! Redirecting...");
                setIsError(false);
                // Redirect to dashboard or home page after a delay
                setTimeout(() => {
                    window.location.href = "/links"; // Update with your dashboard route
                }, 2000);
            } else {
                setMessage(data.message || "Failed to update profile");
                setIsError(true);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
            setIsError(true);
            console.error("Error:", error);
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw", backgroundColor: "#000" }}>
            {/* Left Section */}
            <div style={{ width: "70%", backgroundColor: "#fff", padding: "5vw" }}>
                {/* Logo */}
                <img src={sparklogo} alt="Spark Logo" style={{ width: "5vw" }} />

                {/* Heading */}
                <h1 style={{ fontSize: "2.5vw", fontWeight: "bold", marginBottom: "1vw" }}>Tell us about yourself</h1>
                <p style={{ fontSize: "1vw", color: "gray", marginBottom: "2vw" }}>
                    For a personalized Spark experience
                </p>

                {/* Feedback Message */}
                {message && (
                    <p style={{ color: isError ? "red" : "green", fontSize: "1vw", marginBottom: "2vw" }}>
                        {message}
                    </p>
                )}

                {/* Username Input */}
                <input
                    type="text"
                    placeholder="Tell us your username"
                    value={username}
                    onChange={handleUsernameChange}
                    style={{
                        width: "100%",
                        padding: "1vw",
                        fontSize: "1vw",
                        borderRadius: "0.5vw",
                        border: "1px solid #ddd",
                        marginBottom: "2vw",
                        backgroundColor: "#F5F5F5",
                        outline: "none"
                    }}
                />

                {/* Category Selection */}
                <p style={{ fontSize: "1vw", fontWeight: "500", marginBottom: "1vw" }}>
                    Select one category that best describes your Linktree:
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7vw" }}>
                    {["Business", "Creative", "Education", "Entertainment", "Fashion & Beauty", "Food & Beverage",
                        "Government & Politics", "Health & Wellness", "Non-Profit", "Other", "Tech", "Travel & Tourism"]
                        .map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                style={{
                                    padding: "0.7vw 1.5vw",
                                    fontSize: "1vw",
                                    borderRadius: "2vw",
                                    border: "1px solid #ddd",
                                    backgroundColor: selectedCategory === category ? "#1DA35E" : "#fff",
                                    color: selectedCategory === category ? "#fff" : "#000",
                                    cursor: "pointer"
                                }}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleSubmit}
                    style={{
                        width: "100%",
                        padding: "1vw",
                        fontSize: "1vw",
                        borderRadius: "5vw",
                        border: "none",
                        backgroundColor: username && selectedCategory ? "#1DA35E" : "#BDBDBD",
                        color: "white",
                        fontWeight: "bold",
                        cursor: username && selectedCategory ? "pointer" : "not-allowed",
                        marginTop: "2vw"
                    }}
                    disabled={!username || !selectedCategory}
                >
                    Continue
                </button>
            </div>

            {/* Right Section (Yellow Background) */}
            <div style={{ backgroundColor: "#F9C74F", width: "30%" }}>
                <img src={woman} style={{ width: "100%", height: "100%" }} alt="" />
            </div>
        </div>
    );
};

export default Aboutuser;