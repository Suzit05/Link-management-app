import React, { useState } from 'react';
import sparklogo from "../assets/images/sparklogo.png";
import woman from "../assets/images/woman.png";

const Login = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for feedback messages
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the JWT token in localStorage
        localStorage.setItem('token', data.token);
        setMessage("Login successful! Redirecting...");
        setIsError(false);

        // Redirect to dashboard or home page after a delay
        setTimeout(() => {
          window.location.href = "/aboutuser"; // Update with your dashboard route
        }, 2000);
      } else {
        setMessage(data.message || "Login failed");
        setIsError(true);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setIsError(true);
      console.error("Error:", error);
    }
  };

  // Check if the form is valid (both fields filled)
  const isFormValid = () => {
    return formData.email.trim() && formData.password.trim();
  };

  return (
    <div style={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      backgroundColor: "#F5F5F5"
    }}>
      {/* Left Side - Form Section */}
      <div style={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: "10vw"
      }}>
        {/* Logo */}
        <div style={{ width: "fit-content", position: "absolute", marginLeft: "-60vw", marginBottom: "44vw" }}>
          <img src={sparklogo} alt="" />
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "2.5vw", fontWeight: "bold", marginBottom: "1vw", letterSpacing: "-3px" }}>Sign in to your Spark</h1>

        {/* Feedback Message */}
        {message && (
          <p style={{ color: isError ? "red" : "green", fontSize: "1vw", marginBottom: "1vw" }}>
            {message}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1vw" }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              ...buttonStyle,
              backgroundColor: isFormValid() ? "#28A263" : "#BDBDBD",
              cursor: isFormValid() ? "pointer" : "not-allowed",
            }}
            disabled={!isFormValid()}
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p style={{ fontSize: "0.8vw", marginTop: "2vw", color: "#777" }}>
          Don't have an account? <span style={{ color: "#28A263", borderBottom: "2px solid #28A263", cursor: "pointer" }}>Sign up</span>
        </p>
      </div>

      {/* Right Side - Image Section */}
      <div style={{
        width: "40%",
        height: "100%"
      }}>
        <img style={{ width: "100%", height: "100%" }} src={woman} alt="" />
      </div>
    </div>
  );
};

// Input Style
const inputStyle = {
  width: "100%",
  padding: "1vw",
  fontSize: "1vw",
  backgroundColor: "#E0E2D9",
  border: "1px solid #ccc",
  borderRadius: "5px"
};

// Button Style
const buttonStyle = {
  width: "100%",
  padding: "1vw",
  marginTop: "3vw",
  marginLeft: "1vw",
  fontSize: "1.2vw",
  color: "white",
  border: "none",
  borderRadius: "15px",
};

export default Login;