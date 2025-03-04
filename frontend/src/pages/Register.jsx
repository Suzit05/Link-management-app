import React, { useState } from 'react';
import sparklogo from "../assets/images/sparklogo.png";
import woman from "../assets/images/woman.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import "../styles/register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            setIsError(true);
            return;
        }

        const userData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                showToast("Registration successful! Redirecting...", "success");
                setIsError(false);
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);
            } else {
                showToast(data.message || "Registration failed", "error");
                setIsError(true);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
            setIsError(true);
            console.error("Error:", error);
        }
    };

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
        <div className="register-container">
            <ToastContainer position="top-center" autoClose={3000} />
            {/* Left Side - Form Section */}
            <div className="form-section">
                {/* Logo */}
                <div className="logo-container">
                    <img src={sparklogo} alt="Spark Logo" />
                </div>

                {/* Heading */}
                <h1 className="heading">Sign up to your Spark</h1>
                {/* Subheading */}
                <p className="subheading">
                    Create an account
                    <span className="sign-in-link" onClick={() => { window.location.href = "/login" }}>
                        Sign in instead
                    </span>
                </p>

                {/* Feedback Message */}
                {message && (
                    <p className={`feedback-message ${isError ? "error" : "success"}`}>
                        {message}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="register-form">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                    />

                    {/* Terms Checkbox */}
                    <label className="terms-label">
                        <input type="checkbox" required />
                        By creating an account, I agree to the <span className="terms-link">Terms of Use</span> and <span className="terms-link">Privacy Policy</span>
                    </label>

                    {/* Submit Button */}
                    <button type="submit" className="submit-button">
                        Create an account
                    </button>
                </form>

                {/* Footer */}
                <p className="footer-text">
                    This site is protected by reCAPTCHA and the <span className="footer-link">Google Privacy Policy</span> and <span className="footer-link">Terms of Service</span> apply.
                </p>
            </div>

            {/* Right Side - Image Section */}
            <div className="image-section">
                <img src={woman} alt="Woman" />
            </div>
        </div>
    );
};

export default Register;