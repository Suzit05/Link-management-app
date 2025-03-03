import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"; // Import icons

const Settings = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        // Fetch user data
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:3000/api/user", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const { firstName, lastName, email } = res.data;
                setFormData({ firstName, lastName, email, password: "", confirmPassword: "" });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUser();
    }, []);

    const showToast = (message, type) => {
        toast(
            <div style={type === "success" ? successToastStyle : errorToastStyle}>
                {type === "success" ? <FaCheckCircle style={{ marginRight: "10px" }} /> : <FaExclamationTriangle style={{ marginRight: "10px" }} />}
                {message}
            </div>,
            { className: "custom-toast", closeButton: false, autoClose: 3000 }
        );
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        if (formData.password && formData.password !== formData.confirmPassword) {
            showToast("Passwords do not match!", "error");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await axios.put(
                "http://localhost:3000/api/user",
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password ? formData.password : undefined,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            showToast("Profile updated successfully!", "success");
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div style={{ display: "flex", height: "100%", backgroundColor: "#f3f3f1", width: "100vw" }}>
            <ToastContainer position="top-center" autoClose={3000} />
            <Sidebar />
            <div style={{ flex: 1, padding: "2vw" }}>
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, {formData.firstName} {formData.lastName}!</h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>Update your details below.</p>

                <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", maxWidth: "600px", margin: "auto" }}>
                    <h3 style={{ marginBottom: "1.5vw", fontSize: "1.2vw", color: "green", borderBottom: "2px solid green", display: "inline-block" }}>
                        Edit Profile
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5vw" }}>
                        {["firstName", "lastName", "email"].map((field) => (
                            <div key={field}>
                                <label style={{ fontSize: "1vw", color: "#333", display: "block", marginBottom: "0.5vw" }}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type="text"
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    style={{
                                        width: "100%",
                                        height: "2.5vw",
                                        border: "1px solid #ccc",
                                        borderRadius: "5px",
                                        padding: "0.5vw",
                                        fontSize: "1vw",
                                        outline: "none",
                                    }}
                                />
                            </div>
                        ))}

                        {/* Password Field */}
                        <div>
                            <label style={{ fontSize: "1vw", color: "#333", display: "block", marginBottom: "0.5vw" }}>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter new password"
                                style={{
                                    width: "100%",
                                    height: "2.5vw",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    padding: "0.5vw",
                                    fontSize: "1vw",
                                    outline: "none",
                                }}
                            />
                        </div>

                        {/* Confirm Password Field (Hidden Text) */}
                        <div>
                            <label style={{ fontSize: "1vw", color: "#333", display: "block", marginBottom: "0.5vw" }}>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm new password"
                                style={{
                                    width: "100%",
                                    height: "2.5vw",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    padding: "0.5vw",
                                    fontSize: "1vw",
                                    outline: "none",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", padding: "1vw", alignItems: "center", justifyContent: "flex-end" }}>
                    <button onClick={handleSave} style={{ marginTop: "2vw", padding: "0.4vw 2.2vw", width: "6vw", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

// Custom Toast Styles
const successToastStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#28A745",
    color: "white",
    padding: "10px 15px",
    borderRadius: "5px",
    fontWeight: "bold",
};

const errorToastStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#DC3545",
    color: "white",
    padding: "10px 15px",
    borderRadius: "5px",
    fontWeight: "bold",
};


export default Settings;
