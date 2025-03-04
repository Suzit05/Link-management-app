import React, { useState } from 'react';
import sparklogo from "../assets/images/sparklogo.png";
import woman from "../assets/images/woman.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const handleSignup = () => {
    navigate('/register');
  };

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

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        showToast("Login successful!", "success");
        setIsError(false);
        setTimeout(() => {
          window.location.href = "/aboutuser";
        }, 2000);
      } else {
        showToast(data.message || "Login failed", "error");
        setIsError(true);
      }
    } catch (error) {
      showToast("An error occurred. Please try again.", "error");
      setIsError(true);
      console.error("Error:", error);
    }
  };

  const isFormValid = () => {
    return formData.email.trim() && formData.password.trim();
  };

  return (
    <div className="login-container">
      <ToastContainer position="top-center" autoClose={3000} />
      {/* Left Side - Form Section */}
      <div className="form-section">
        {/* Logo */}
        <div className="logo-container">
          <img src={sparklogo} alt="Spark Logo" />
        </div>

        {/* Heading */}
        <h1 className="heading">Sign in to your Spark</h1>

        {/* Feedback Message */}
        {message && (
          <p className={`feedback-message ${isError ? "error" : "success"}`}>
            {message}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
            disabled={!isFormValid()}
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="footer-text">
          Don't have an account? <span onClick={handleSignup} className="sign-up-link">Sign up</span>
        </p>
      </div>

      {/* Right Side - Image Section */}
      <div className="image-section">
        <img src={woman} alt="Woman" />
      </div>
    </div>
  );
};

export default Login;