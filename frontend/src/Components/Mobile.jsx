import React from 'react';
import sparklogo from "../assets/images/sparklogo.png";
import { useProfile } from "../Context/ProfileContext";

const Mobile = () => {
    const { profile } = useProfile(); // Use profile context
    const { profileImage, bannerColor, profileTitle, links = [], Shop = [] } = profile;

    return (
        <div style={{ flex: "0.3", borderRadius: "1vw", textAlign: "center" }}>
            <div style={{ width: "16vw", height: "35vw", border: "1vw solid black", borderRadius: "5vw", padding: 0 }}>
                {/* Banner Section */}
                <div
                    className="mobile-banner"
                    style={{
                        width: "100%",
                        height: "12vw",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: bannerColor || "#342B26", // Use bannerColor if provided
                        margin: 0,
                        padding: 0,
                        borderRadius: "3.9vw",
                    }}
                >
                    <button style={{ position: "absolute", width: "2.2vw", backgroundColor: "#F0F0F0", height: "2vw", borderRadius: "50%", marginLeft: "1.5vw", marginTop: "1.5vh" }}>
                        <i className="ri-upload-2-line"></i>
                    </button>
                    {/* Profile Image */}
                    <div
                        className="dp"
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "4vw",
                            marginLeft: "5vw",
                            borderRadius: "50%",
                            backgroundColor: "red",
                            height: '12vh',
                            width: "5vw",
                            backgroundImage: profileImage ? `url(${profileImage})` : "none", // Use profileImage if provided
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    {/* Profile Title */}
                    <h3 style={{ fontSize: "1vw", color: "white" }}>{profileTitle || "profile"}</h3>
                </div>

                {/* Toggle Buttons */}
                <div className="toggle-btn" style={{ width: "12vw", display: "flex", gap: 0, marginTop: "2vh", marginLeft: "2vw", backgroundColor: "#ddd" }}>
                    <button style={{ padding: "1vw", width: "40%", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>Link</button>
                    <button style={{ padding: "1vw", width: "40%", backgroundColor: "#ddd", color: "#000", border: "none", borderRadius: "0.5vw" }}>Shop</button>
                </div>

                {/* Links Section */}
                <div style={{ textAlign: "left", marginTop: "2vw" }}>
                    {links.map((link, index) => (
                        <button
                            key={index}
                            style={{ padding: "1vw", width: "100%", backgroundColor: "#ddd", border: "none", borderRadius: "0.5vw", marginBottom: "1vw" }}
                        >
                            📺 {link.title}
                        </button>
                    ))}
                </div>

                {/* Shop Section */}
                <div style={{ textAlign: "left", marginTop: "2vw" }}>
                    {Shop.map((shop, index) => (
                        <button
                            key={index}
                            style={{ padding: "1vw", width: "100%", backgroundColor: "#ddd", border: "none", borderRadius: "0.5vw", marginBottom: "1vw" }}
                        >
                            🛍️ {shop.title}
                        </button>
                    ))}
                </div>

                {/* Get Connected Button */}
                <button style={{ marginTop: "2vw", padding: "0.5vw", width: "80%", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "1vw" }}>
                    Get Connected
                </button>

                {/* Spark Logo */}
                <div style={{ width: "fit-content", justifyContent: "center", alignItems: "center", display: "flex", marginTop: "1vh", marginLeft: "5.7vw" }}>
                    <img style={{ width: "4vw" }} src={sparklogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Mobile;