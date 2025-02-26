import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Mobile from "../Components/Mobile";


const Links = () => {
    const [bgColor, setBgColor] = useState("#000000");

    return (
        <div style={{ display: "flex", height: "100vh", backgroundColor: "#F4F4F4", width: "100vw" }}>
            <Sidebar></Sidebar>
            {/* Main Content */}
            <div style={{ flex: 1, padding: "2vw" }}>
                {/* Header */}
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, Jenny Wilson!</h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>Congratulations. You got a great response today.</p>

                <div style={{ display: "flex", gap: "10vw" }}>
                    {/* Mobile Preview */}
                    <Mobile></Mobile>


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
        </div >
    );
};

export default Links;
