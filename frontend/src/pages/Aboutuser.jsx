import React from 'react'
import sparklogo from "../assets/images/sparklogo.png"
import woman from "../assets/images/woman.png"

const Aboutuser = () => {
    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw", backgroundColor: "#000" }}>
            {/* Left Section */}
            <div style={{ width: "70%", backgroundColor: "#fff", padding: "5vw" }}>
                {/* Logo */}
                <img src={sparklogo} alt="Spark Logo" style={{ width: "5vw", }} />

                {/* Heading */}
                <h1 style={{ fontSize: "2.5vw", fontWeight: "bold", marginBottom: "1vw" }}>Tell us about yourself</h1>
                <p style={{ fontSize: "1vw", color: "gray", marginBottom: "2vw" }}>
                    For a personalized Spark experience
                </p>

                {/* Username Input */}
                <input
                    type="text"
                    placeholder="Tell us your username"
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
                            <button key={index} style={{
                                padding: "0.7vw 1.5vw",
                                fontSize: "1vw",
                                borderRadius: "2vw",
                                border: "1px solid #ddd",
                                backgroundColor: category === "Business" ? "#1DA35E" : "#fff",
                                color: category === "Business" ? "#fff" : "#000",
                                cursor: "pointer"
                            }}>
                                {category}
                            </button>
                        ))
                    }
                </div>

                {/* Continue Button */}
                <button style={{
                    width: "100%",
                    padding: "1vw",
                    fontSize: "1vw",
                    borderRadius: "5vw",
                    border: "none",
                    backgroundColor: "#1DA35E",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginTop: "2vw"
                }}>
                    Continue
                </button>
            </div>

            {/* Right Section (Yellow Background) */}
            <div style={{ backgroundColor: "#F9C74F", width: "30%" }}> <img src={woman} style={{ width: "100%", height: "100%" }} alt="" /></div>
        </div>
    );

}

export default Aboutuser