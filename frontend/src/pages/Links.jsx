import React, { useState } from "react";
import sparklogo from "../assets/images/sparklogo.png"

const Links = () => {
    const [bgColor, setBgColor] = useState("#000000");

    return (
        <div style={{ display: "flex", height: "100vh", backgroundColor: "#F4F4F4" }}>
            {/* Sidebar */}
            <div style={{ width: "18%", backgroundColor: "#fff", padding: "2vw", borderRight: "1px solid #ddd" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "2vw" }}>
                    <img src={sparklogo} alt="Spark Logo" style={{ width: "6vw", marginRight: "1vw" }} />

                </div>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2vw" }}>
                    <li style={{
                        padding: "1vw 0",
                        cursor: "pointer",
                        color: "#1DA35E",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.7vw"
                    }}>
                        <i className="ri-links-line" style={{ fontSize: "1.2vw" }}></i>
                        Links
                    </li>

                    <li style={{
                        padding: "1vw 0",
                        cursor: "pointer",
                        color: "grey",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.7vw"
                    }}>
                        <i className="ri-palette-line" style={{ fontSize: "1.2vw" }}></i>
                        Appearance
                    </li>

                    <li style={{
                        padding: "1vw 0",
                        cursor: "pointer",
                        color: "grey",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.7vw"
                    }}>
                        <i className="ri-bar-chart-line" style={{ fontSize: "1.2vw" }}></i>
                        Analytics
                    </li>

                    <li style={{
                        padding: "1vw 0",
                        cursor: "pointer",
                        color: "grey",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.7vw"
                    }}>
                        <i className="ri-settings-3-line" style={{ fontSize: "1.2vw" }}></i>
                        Settings
                    </li>
                </ul>

                <div style={{ position: "absolute", bottom: "2vw", display: "flex", alignItems: "center", border: "2px solid black", borderRadius: "3vw", padding: "1vw" }}>
                    <img src="/user-avatar.png" alt="User" style={{ width: "2vw", borderRadius: "50%", marginRight: "1vw" }} />
                    <span style={{ fontSize: "1vw" }}>Jenny Wilson</span>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "2vw" }}>
                {/* Header */}
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, Jenny Wilson!</h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>Congratulations. You got a great response today.</p>

                <div style={{ display: "flex", gap: "10vw" }}>
                    {/* Mobile Preview */}
                    <div style={{ flex: "0.3", backgroundColor: "#fff", padding: "2vw", borderRadius: "1vw", textAlign: "center" }}>
                        <div style={{ width: "100%", height: "40vw", border: "1vw solid black", borderRadius: "3vw", padding: "2vw" }}>
                            <img src="/avatar.png" alt="Profile" style={{ width: "6vw", borderRadius: "50%", marginBottom: "1vw" }} />
                            <h3 style={{ fontSize: "1.5vw" }}>@opopo_08</h3>
                            <button style={{ padding: "1vw", width: "40%", margin: "1vw", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>Link</button>
                            <button style={{ padding: "1vw", width: "40%", margin: "1vw", backgroundColor: "#ddd", color: "#000", border: "none", borderRadius: "0.5vw" }}>Shop</button>
                            <div style={{ textAlign: "left", marginTop: "2vw" }}>
                                <button style={{ padding: "1vw", width: "100%", backgroundColor: "#ddd", border: "none", borderRadius: "0.5vw", marginBottom: "1vw" }}>📺 Latest YouTube Video</button>
                                <button style={{ padding: "1vw", width: "100%", backgroundColor: "#ddd", border: "none", borderRadius: "0.5vw" }}>📸 Latest Instagram Reel</button>
                            </div>
                            <button style={{ marginTop: "2vw", padding: "1vw", width: "100%", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>Get Connected</button>
                        </div>
                    </div>

                    {/* Profile Customization */}
                    <div style={{ flex: "0.7", display: "flex", flexDirection: "column", gap: "2vw" }}>
                        {/* Profile Section */}
                        <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "1vw" }}>
                            <h3 style={{ fontSize: "1.5vw", marginBottom: "1vw" }}>Profile</h3>
                            <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1vw" }}>
                                <img src="/avatar.png" alt="User" style={{ width: "4vw", borderRadius: "50%" }} />
                                <button style={{ backgroundColor: "#1DA35E", color: "#fff", padding: "1vw", border: "none", borderRadius: "0.5vw" }}>Pick an Image</button>
                                <button style={{ padding: "1vw", border: "1px solid #ddd", borderRadius: "0.5vw" }}>Remove</button>
                            </div>
                            <p>Profile Title</p>
                            <input type="text" value="@opopo_08" style={{ width: "100%", padding: "1vw", marginBottom: "1vw", border: "1px solid #ddd", borderRadius: "0.5vw" }} />
                            <p>Bio</p>
                            <textarea style={{ width: "100%", padding: "1vw", border: "1px solid #ddd", borderRadius: "0.5vw" }} placeholder="Bio"></textarea>
                            <button style={{ marginTop: "1vw", padding: "1vw", width: "100%", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>+ Add</button>
                        </div>

                        {/* Banner Customization */}
                        <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "1vw" }}>
                            <h3 style={{ fontSize: "1.5vw", marginBottom: "1vw" }}>Banner</h3>
                            <div style={{ backgroundColor: bgColor, padding: "2vw", borderRadius: "1vw", textAlign: "center", color: "#fff" }}>
                                <img src="/avatar.png" alt="Profile" style={{ width: "6vw", borderRadius: "50%", marginBottom: "1vw" }} />
                                <h3>@opopo_08</h3>
                            </div>
                            <p style={{ marginTop: "1vw" }}>Custom Background Color</p>
                            <div style={{ display: "flex", gap: "1vw", marginTop: "0.5vw" }}>
                                {["#000000", "#FFFFFF", "#1DA35E"].map((color) => (
                                    <div
                                        key={color}
                                        style={{
                                            width: "2vw",
                                            height: "2vw",
                                            backgroundColor: color,
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            border: bgColor === color ? "3px solid #1DA35E" : "1px solid #ddd"
                                        }}
                                        onClick={() => setBgColor(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <button style={{ marginTop: "2vw", padding: "1vw", width: "100%", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>Save</button>
            </div>
        </div>
    );
};

export default Links;
