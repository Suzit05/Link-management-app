import React, { useState } from 'react';
import sparklogo from "../assets/images/sparklogo.png";
import woman from "../assets/images/woman.png";

const Register = () => {

   


    // State for form inputs
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            setIsError(true);
            return;
        }

        // Prepare data for the backend
        const userData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        try {
            // Send POST request to the backend
            const response = await fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Registration successful! Redirecting...");
                setIsError(false);
                // Redirect to login page or dashboard after a delay
                setTimeout(() => {
                    window.location.href = "/login"; // Update with your login route
                }, 2000);
            } else {
                setMessage(data.message || "Registration failed");
                setIsError(true);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
            setIsError(true);
            console.error("Error:", error);
        }
    };

    // Check if the form is valid (all fields filled and passwords match)
    const isFormValid = () => {
        return (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.password &&
            formData.confirmPassword &&
            formData.password === formData.confirmPassword
        );
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
                padding: "20vw"
            }}>
                {/* Logo */}
                <div style={{ width: "fit-content", marginLeft: "-60vw" }}>
                    <img src={sparklogo} alt="" />
                </div>

                {/* Heading */}
                <h1 style={{ fontSize: "2.5vw", fontWeight: "bold", marginBottom: "1vw", letterSpacing: "-3px" }}>Sign up to your Spark</h1>
                {/* Subheading */}
                <p style={{ fontSize: "1.5vw", marginBottom: "2vw" }}>
                    Create an account
                    <span style={{ marginLeft: "15vw", fontSize: "2vh", color: "#28A263", cursor: "pointer", borderBottom: "2px solid #28A263" }}>
                        Sign in instead
                    </span>
                </p>

                {/* Feedback Message */}
                {message && (
                    <p style={{ color: isError ? "red" : "green", fontSize: "1vw", marginBottom: "1vw" }}>
                        {message}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1vw" }}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                    />
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
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                    />

                    {/* Terms Checkbox */}
                    <label style={{ fontSize: "1vw", display: "flex", alignItems: "center", gap: "0.5vw" }}>
                        <input type="checkbox" required />
                        By creating an account, I agree to the <span style={{ color: "blue", cursor: "pointer" }}>Terms of Use</span> and <span style={{ color: "blue", cursor: "pointer" }}>Privacy Policy</span>
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{ backgroundColor: "#28A263", padding: "1vw 3vw" }}

                    >
                        Create an account
                    </button>
                </form>

                {/* Footer */}
                <p style={{ fontSize: "0.8vw", marginTop: "2vw", color: "#777" }}>
                    This site is protected by reCAPTCHA and the <span style={{ color: "blue", cursor: "pointer" }}>Google Privacy Policy</span> and <span style={{ color: "blue", cursor: "pointer" }}>Terms of Service</span> apply.
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
    border: "1px solid #ccc",
    borderRadius: "5px"
};

// Button Style
const buttonStyle = {
    width: "100%",
    padding: "1vw",
    fontSize: "1.2vw",
    color: "white",
    border: "none",
    borderRadius: "5px",
};

export default Register;