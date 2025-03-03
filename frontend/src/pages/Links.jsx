import React, { useState, useContext, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Mobile from "../Components/Mobile";
import Modal from "../Components/Modal";
import { UserContext } from "../Context/UserContext";
import { useProfile } from "../Context/ProfileContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"; // Import icons

const Links = () => {
    const { profile, setProfile } = useProfile(); // Use profile context
    const { user } = useContext(UserContext); // Get user data from context
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("link"); // "link" or "shop"
    const [customColor, setCustomColor] = useState(""); // State for custom color input

    // Fetch profile data on component mount
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/profile/me', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    // Ensure links and Shop are always defined
                    const updatedProfile = {
                        ...data,
                        links: data.links || [],
                        Shop: data.Shop || [],
                    };
                    setProfile(updatedProfile); // Update profile context with fetched data
                } else {
                    throw new Error(data.message || "Failed to fetch profile data");
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, [setProfile]);

    // Handle saving link/shop
    const handleSaveItem = (newItem) => {
        const updatedLinks = [...profile.links, newItem]; // Append new item to the list
        setProfile({ ...profile, links: updatedLinks }); // Update profile context
        setIsModalOpen(false); // Close modal after saving
    };

    // Handle profile image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({ ...profile, profileImage: reader.result }); // Update profile context
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle profile image removal
    const handleRemoveImage = () => {
        setProfile({ ...profile, profileImage: "" }); // Update profile context
    };

    // Handle custom color input change
    const handleCustomColorChange = (e) => {
        const value = e.target.value;
        setCustomColor(value);

        // Update banner background color if the input is a valid hex color
        if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value)) {
            setProfile({ ...profile, bannerColor: value }); // Update profile context
        }
    };

    //toast message
    const showToast = (message, type) => {
        toast(
            <div style={type === "success" ? successToastStyle : errorToastStyle}>
                {type === "success" ? <FaCheckCircle style={{ marginRight: "10px" }} /> : <FaExclamationTriangle style={{ marginRight: "10px" }} />}
                {message}
            </div>,
            { className: "custom-toast", closeButton: false, autoClose: 3000 }
        );
    };

    // Handle save button click
    const handleSaveProfile = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(profile),
            });

            const data = await response.json();
            if (response.ok) {
                showToast("Profile saved successfully!", "success");
                // Redirect to appearance page
                setTimeout(() => {
                    window.location.href = "/appearance"; // Update with your dashboard route
                }, 2000);
            } else {
                showToast(data.message || "Failed to save profile", "error");
            }
        } catch (error) {
            console.error("Error saving profile:", error);
            showToast("An error occurred. Please try again.", "error");
        }
    };

    return (
        <div style={{ display: "flex", height: "100%", backgroundColor: "#f3f3f1", width: "100vw" }}>
            <ToastContainer position="top-center" autoClose={3000} />
            <Sidebar></Sidebar>
            {/* Main Content */}
            <div style={{ flex: 1, padding: "2vw" }}>
                {/* Header */}
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, {user?.firstName} {user?.lastName}</h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>Congratulations. You got a great response today.</p>

                <div style={{ display: "flex", gap: "10vw" }}>
                    {/* Mobile Preview */}
                    <Mobile />

                    {/* Profile Customization */}
                    <div style={{ flex: "0.7", display: "flex", flexDirection: "column", gap: "2vw" }}>
                        <h3 style={{ fontSize: "1.5vw", width: "fit-content" }}>Profile</h3>

                        {/* Profile Section */}
                        <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "1vw" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "1vw" }}>
                                {/* Profile Image */}
                                <div
                                    className="dp"
                                    style={{
                                        borderRadius: "50%",
                                        backgroundColor: "white",
                                        height: "12vh",
                                        width: "5vw",
                                        backgroundImage: profile.profileImage ? `url(${profile.profileImage})` : "none",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                                <div style={{ width: "80%", padding: "1vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1vh" }}>
                                    {/* File Input for Image Upload */}
                                    <input
                                        type="file"
                                        id="profileImageInput"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleImageUpload}
                                    />
                                    <label
                                        htmlFor="profileImageInput"
                                        style={{ width: "90%", backgroundColor: "#1DA35E", color: "#fff", padding: "1vw", border: "none", borderRadius: "1vw", cursor: "pointer", textAlign: "center" }}
                                    >
                                        Pick an Image
                                    </label>
                                    {/* Remove Button */}
                                    <button
                                        onClick={handleRemoveImage}
                                        style={{ width: "90%", padding: "1vw", border: "1px solid #ddd", borderRadius: "1vw", cursor: "pointer" }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <p>Profile Title</p>
                            <input
                                type="text"
                                placeholder="username"
                                value={profile.profileTitle || ""}
                                onChange={(e) => setProfile({ ...profile, profileTitle: e.target.value })}
                                style={{ width: "100%", padding: "1vw", marginBottom: "1vw", border: "1px solid #ddd", borderRadius: "0.5vw" }}
                            />
                            <p>Bio</p>
                            <textarea
                                value={profile.bio || ""}
                                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                style={{ width: "100%", padding: "1vw", border: "1px solid #ddd", borderRadius: "0.5vw" }}
                                placeholder="Bio"
                            ></textarea>
                        </div>

                        {/* Link and Shop Box */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: "1vw", borderRadius: "1vw" }}>
                            {/* Toggle Buttons */}
                            <div style={{ width: "fit-content", alignSelf: "self-start", display: "flex", gap: "0", backgroundColor: "#ddd" }}>
                                <button
                                    style={{
                                        backgroundColor: activeTab === "link" ? "#1DA35E" : "#ddd",
                                        color: activeTab === "link" ? "white" : "black",
                                        border: "none",
                                        borderRadius: "2vw",
                                        padding: "0.6vw 1.2vw",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setActiveTab("link")}
                                >
                                    Add Link
                                </button>
                                <button
                                    style={{
                                        backgroundColor: activeTab === "shop" ? "#1DA35E" : "#ddd",
                                        color: activeTab === "shop" ? "white" : "black",
                                        border: "none",
                                        borderRadius: "2vw",
                                        padding: "0.6vw 1.2vw",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setActiveTab("shop")}
                                >
                                    Add Shop
                                </button>
                            </div>

                            {/* Add Button */}
                            <button
                                style={{
                                    backgroundColor: "#1DA35E",
                                    color: "white",
                                    fontSize: "1vw",
                                    border: "none",
                                    marginTop: "3vh",
                                    borderRadius: "2vw",
                                    padding: "1vw 18vw",
                                    cursor: "pointer"
                                }}
                                onClick={() => setIsModalOpen(true)}
                            >
                                + Add
                            </button>
                            {/* Display added links/shops */}
                            <div style={{ marginTop: "2vw", width: "100%" }}>
                                {profile.links.map((link, index) => (
                                    <div key={index} style={{ backgroundColor: "#ddd", padding: "1vw", borderRadius: "1vw", marginBottom: "1vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div>
                                            <strong>{link.title}</strong>
                                            <p>{link.url}</p>
                                        </div>
                                        <div>
                                            <input type="checkbox" checked style={{ marginRight: "1vw" }} />
                                            <i className="ri-delete-bin-line" style={{ cursor: "pointer", color: "red" }} onClick={() => setProfile({ ...profile, links: profile.links.filter((_, i) => i !== index) })}></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Modal */}
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} activeTab={activeTab} setActiveTab={setActiveTab} onSave={handleSaveItem} />

                        {/* Banner Customization */}
                        <div style={{ backgroundColor: "white", padding: "2vw", borderRadius: "1vw" }}>
                            <h3 style={{ fontSize: "1.5vw", marginBottom: "1vw" }}>Banner</h3>
                            <div style={{ backgroundColor: profile.bannerColor || "#000000", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "20vh", padding: "2vw", borderRadius: "1vw", textAlign: "center", color: "#fff" }}>
                                <div
                                    className="dp"
                                    style={{
                                        borderRadius: "50%",
                                        backgroundColor: "white",
                                        height: "12vh",
                                        width: "5vw",
                                        backgroundImage: profile.profileImage ? `url(${profile.profileImage})` : "none",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                                <h3 className="username">{profile.profileTitle || "profile title"}</h3>
                            </div>
                            <p style={{ marginTop: "1vw" }}>Custom Background Color</p>
                            <div style={{ display: "flex", gap: "1vw", marginTop: "0.5vw" }}>
                                {["#000000", "brown", "#1DA35E"].map((color) => (
                                    <div
                                        key={color}
                                        style={{
                                            width: "2vw",
                                            height: "2vw",
                                            backgroundColor: color,
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            border: profile.bannerColor === color ? "3px solid #1DA35E" : "1px solid #ddd"
                                        }}
                                        onClick={() => setProfile({ ...profile, bannerColor: color })}
                                    ></div>
                                ))}
                            </div>
                            <div className="colorInput" style={{ display: "flex", gap: "1vw", alignItems: "center", marginTop: "2vh" }}>
                                <div
                                    style={{
                                        width: "2vw",
                                        height: "4vh",
                                        backgroundColor: customColor || "pink", // Use customColor if valid, else default to pink
                                    }}
                                ></div>
                                <input
                                    style={{ width: "12vw", height: "4vh" }}
                                    type="text"
                                    placeholder="#HexColor"
                                    value={customColor}
                                    onChange={handleCustomColorChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", padding: "1vw", alignItems: "center", justifyContent: "flex-end" }}>
                    {/* Save Button */}
                    <button
                        onClick={handleSaveProfile}
                        style={{ marginTop: "2vw", padding: "0.4vw 2.2vw", width: "6vw", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw", cursor: "pointer" }}
                    >
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

export default Links;