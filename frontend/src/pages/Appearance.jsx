import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Mobile from "../Components/Mobile";
import { useProfile } from "../Context/ProfileContext";
import { UserContext } from "../Context/UserContext";

const Appearance = () => {
    const { profile, setProfile } = useProfile(); // Use profile context
    const { user } = useContext(UserContext); // Get user data from context
    const [buttonColor, setButtonColor] = useState("#ddd");
    const [buttonFontColor, setButtonFontColor] = useState("#000");
    const [FontColor, setFontColor] = useState("#000");
    const [appearance, setAppearance] = useState({
        layout: { type: "stack", className: "stack" },
        buttonStyles: {

            color: "#000000",
            fontColor: "#FFFFFF",
            className: "rounded",
        },
        fontStyles: {
            font: "DM Sans",
            color: "#000000",
            className: "dm-sans",
        },
        themes: {
            name: "light",
            backgroundColor: "#FFFFFF",
            className: "light",
        },
    });

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
                    // Merge fetched data with existing state
                    setProfile((prevProfile) => ({
                        ...prevProfile,
                        ...data,
                        links: data.links || prevProfile.links,
                        Shop: data.Shop || prevProfile.Shop,
                    }));
                } else {
                    throw new Error(data.message || "Failed to fetch profile data");
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, [setProfile]);

    // Fetch appearance data on component mount
    useEffect(() => {
        const fetchAppearanceData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/appearance/me', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setAppearance(data); // Set appearance data in state
                } else {
                    throw new Error(data.message || "Failed to fetch appearance data");
                }
            } catch (error) {
                console.error("Error fetching appearance data:", error);
            }
        };

        fetchAppearanceData();
    }, []);

    // Handle saving appearance data
    const handleSaveAppearance = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/appearance', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(appearance),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Appearance saved successfully!");
            } else {
                alert(data.message || "Failed to save appearance");
            }
        } catch (error) {
            console.error("Error saving appearance:", error);
            alert("An error occurred. Please try again.");
        }
    };


    // Handle button style selection
    const handleButtonStyleSelect = (className) => {
        setAppearance((prevAppearance) => ({
            ...prevAppearance,
            buttonStyles: {
                ...prevAppearance.buttonStyles,
                selectedStyle: className, // Update the selected button style
            },
        }));
    };

    return (
        <div style={{ display: "flex", height: "100%", backgroundColor: "#f3f3f1", width: "100vw" }}>
            <Sidebar></Sidebar>
            {/* Main Content */}
            <div style={{ flex: 1, padding: "2vw", }}>
                {/* Header */}
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, {user?.firstName} {user?.lastName}!</h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>Congratulations. You got a great response today.</p>

                <div style={{ display: "flex", gap: "10vw" }}>
                    {/* Mobile Preview */}
                    <Mobile></Mobile>


                    {/* Profile Customization */}
                    <div style={{ flex: "0.7", display: "flex", flexDirection: "column", gap: "2vw" }}>

                        <h3 style={{ fontSize: "1.5vw", width: "fit-content" }}>Layout</h3>

                        <div style={{ width: "100%", backgroundColor: "#F4F4F4", padding: "2vw", display: "flex", flexDirection: "column", gap: "2vw" }}>

                            {/* Layout Section */}
                            <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                                <h3 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Layout</h3>
                                <div style={{ display: "flex", gap: "1vw", justifyContent: "space-between" }}>
                                    <div className="stack"
                                        style={{
                                            textAlign: "center",
                                            padding: "1vw", border: "1px solid #ddd", borderRadius: "8px", width: "30%",
                                            cursor: "pointer",
                                            backgroundColor: appearance.layout.type === "stack" ? "#1DA35E" : "#fff",
                                            color: appearance.layout.type === "stack" ? "#fff" : "#333",
                                        }}
                                        onClick={() => setAppearance({ ...appearance, layout: { type: "stack", className: "stack" } })}>
                                        <div style={{ width: "3vw", height: "3vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "5px", gap: "0.4vw", marginLeft: "4vw" }}>
                                            <div style={{ width: "3vw", height: "0.6vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "3vw", height: "0.6vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "3vw", height: "0.6vw", backgroundColor: "black" }}></div>
                                        </div>
                                        <p style={{ marginTop: "0.5vw", fontSize: "1vw", color: "#333" }}>Stack</p>
                                    </div>
                                    <div className="grid" style={{
                                        textAlign: "center", padding: "1vw", border: "1px solid #ddd", borderRadius: "8px", width: "30%",
                                        cursor: "pointer",
                                        backgroundColor: appearance.layout.type === "grid" ? "#1DA35E" : "#fff",
                                        color: appearance.layout.type === "grid" ? "#fff" : "#333",
                                    }} onClick={() => setAppearance({ ...appearance, layout: { type: "grid", className: "grid" } })}>
                                        <div style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                                            gridTemplateRows: "repeat(2, 1fr)", // Two rows
                                            gap: 0,
                                            width: "3vw",  // Adjusted width to fit two columns
                                            height: "3vw", // Adjusted height to fit two rows
                                            marginLeft: "4vw",

                                        }}>
                                            <div style={{ width: "1.1vw", height: "1vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "1.1vw", height: "1vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "1.1vw", height: "1vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "1.1vw", height: "1vw", backgroundColor: "black" }}></div>
                                        </div>
                                        <p style={{ marginTop: "0.5vw", fontSize: "1vw", color: "#333" }}>Grid</p>
                                    </div>
                                    <div className="carousel" style={{
                                        textAlign: "center", padding: "1vw", border: "1px solid #ddd", borderRadius: "8px", width: "30%",
                                        cursor: "pointer",
                                        backgroundColor: appearance.layout.type === "carousel" ? "#1DA35E" : "#fff",
                                        color: appearance.layout.type === "carousel" ? "#fff" : "#333",
                                    }} onClick={() => setAppearance({ ...appearance, layout: { type: "carousel", className: "carousel" } })}>
                                        <div style={{ width: "3vw", height: "3vw", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", gap: "0.4vw", marginLeft: "4vw" }}>
                                            <div style={{ height: "3vw", width: "2vw", backgroundColor: "black" }}></div>
                                            <div style={{ height: "3vw", width: "0.6vw", backgroundColor: "black" }}></div>

                                        </div>
                                        <p style={{ marginTop: "0.5vw", fontSize: "1vw", color: "#333" }}>Carousel</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                                <h3 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Buttons</h3>

                                {/* First Column - Filled Buttons */}
                                <div>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Fill</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        <div className="norounded-fill" style={{ width: "100%", height: "2vw", border: "2px solid #000", backgroundColor: appearance.buttonStyles.selectedStyle === "norounded-fill" ? "#1DA35E" : "black", cursor: "pointer", borderRadius: "0" }}
                                            onClick={() => handleButtonStyleSelect("norounded-fill")}></div>
                                        <div className="smrounded-fill" style={{ width: "100%", height: "2vw", border: "2px solid #000", backgroundColor: appearance.buttonStyles.selectedStyle === "smrounded-fill" ? "#1DA35E" : "black", cursor: "pointer", borderRadius: "5px" }}
                                            onClick={() => handleButtonStyleSelect("smrounded-fill")} ></div>
                                        <div className="lgrounded-fill" style={{ width: "100%", height: "2vw", border: "5px solid #ddd", backgroundColor: appearance.buttonStyles.selectedStyle === "lgrounded-fill" ? "#1DA35E" : "black", cursor: "pointer", borderRadius: "15px" }}
                                            onClick={() => handleButtonStyleSelect("lgrounded-fill")}></div>
                                    </div>
                                </div>

                                {/* Second Column - Outline Buttons */}
                                <div style={{ marginTop: "1.5vw" }}>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Outline</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        <div
                                            className="norounded-outline"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid #000",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "norounded-outline" ? "#1DA35E" : "transparent",
                                                borderRadius: "0",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("norounded-outline")}
                                        ></div>
                                        <div
                                            className="smrounded-outline"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid #000",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "smrounded-outline" ? "#1DA35E" : "transparent",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("smrounded-outline")}
                                        ></div>
                                        <div
                                            className="lgrounded-outline"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid #000",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "lgrounded-outline" ? "#1DA35E" : "transparent",
                                                borderRadius: "15px",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("lgrounded-outline")}
                                        ></div>
                                    </div>
                                </div>
                                {/* Third Column - Hard Shadow Buttons */}
                                <div style={{ marginTop: "1.5vw" }}>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Hard Shadow</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        <div
                                            className="norounded-hardshadow"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid #000",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "norounded-hardshadow" ? "#1DA35E" : "black",
                                                borderRadius: "0",
                                                boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("norounded-hardshadow")}
                                        ></div>
                                        <div
                                            className="smrounded-hardshadow"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid #000",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "smrounded-hardshadow" ? "#1DA35E" : "black",
                                                borderRadius: "5px",
                                                boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("smrounded-hardshadow")}
                                        ></div>
                                        <div
                                            className="lgrounded-hardshadow"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid #000",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "lgrounded-hardshadow" ? "#1DA35E" : "black",
                                                borderRadius: "15px",
                                                boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("lgrounded-hardshadow")}
                                        ></div>
                                    </div>
                                </div>

                                {/* Fourth Column - Soft Shadow Buttons */}
                                <div style={{ marginTop: "1.5vw" }}>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Soft Shadow</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        <div
                                            className="norounded-softshadow"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid white",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "norounded-softshadow" ? "#1DA35E" : "black",
                                                borderRadius: "0",
                                                boxShadow: "4px 4px 0px rgb(241, 239, 239)",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("norounded-softshadow")}
                                        ></div>
                                        <div
                                            className="smrounded-softshadow"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid white",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "smrounded-softshadow" ? "#1DA35E" : "black",
                                                borderRadius: "5px",
                                                boxShadow: "4px 4px 0px rgb(241, 239, 239)",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("smrounded-softshadow")}
                                        ></div>
                                        <div
                                            className="lgrounded-softshadow"
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                border: "2px solid white",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "lgrounded-softshadow" ? "#1DA35E" : "black",
                                                borderRadius: "15px",
                                                boxShadow: "4px 4px 0px rgb(241, 239, 239)",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleButtonStyleSelect("lgrounded-softshadow")}
                                        ></div>
                                    </div>
                                </div>

                                {/* Special Buttons Section */}
                                <div style={{ marginTop: "1.5vw", display: "flex", flexDirection: "column", gap: "2vw" }}>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Special</h4>

                                    {/* First Row */}
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        {/* Torn Edge Effect (Using SVG) */}
                                        <div
                                            className="torn-button"
                                            onClick={() => handleButtonStyleSelect("torn-button")}
                                            style={{
                                                width: "100%",
                                                height: "2vw",
                                                position: "relative",
                                                cursor: "pointer",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "torn-button" ? "#1DA35E" : "black",
                                                clipPath: "polygon(0% 10%, 5% 15%, 10% 10%, 15% 15%, 20% 10%, 25% 15%, 30% 10%, 35% 15%, 40% 10%, 45% 15%, 50% 10%, 55% 15%, 60% 10%, 65% 15%, 70% 10%, 75% 15%, 80% 10%, 85% 15%, 90% 10%, 95% 15%, 100% 10%, 100% 90%, 95% 85%, 90% 90%, 85% 85%, 80% 90%, 75% 85%, 70% 90%, 65% 85%, 60% 90%, 55% 85%, 50% 90%, 45% 85%, 40% 90%, 35% 85%, 30% 90%, 25% 85%, 20% 90%, 15% 85%, 10% 90%, 5% 85%, 0% 90%)",
                                            }}
                                        ></div>

                                        {/*up and dpwn wave */}
                                        <div className="wave-button"
                                            onClick={() => handleButtonStyleSelect("wave-button")} style={{
                                                width: "100%",
                                                height: "2.3vw",
                                                backgroundColor: "black",
                                                position: "relative",
                                                cursor: "pointer",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "wave-button" ? "#1DA35E" : "black",
                                                clipPath: "polygon(0% 85%, 6.25% 75%, 12.5% 85%, 18.75% 75%, 25% 85%, 31.25% 75%, 37.5% 85%, 43.75% 75%, 50% 85%, 56.25% 75%, 62.5% 85%, 68.75% 75%, 75% 85%, 81.25% 75%, 87.5% 85%, 93.75% 75%, 100% 85%, 100% 15%, 93.75% 25%, 87.5% 15%, 81.25% 25%, 75% 15%, 68.75% 25%, 62.5% 15%, 56.25% 25%, 50% 15%, 43.75% 25%, 37.5% 15%, 31.25% 25%, 25% 15%, 18.75% 25%, 12.5% 15%, 6.25% 25%, 0% 15%)"
                                            }}>
                                        </div>



                                        {/* Double Border Effect */}
                                        <div className="doubleborder-button" style={{
                                            width: "100%", height: "2vw", backgroundColor: "white",
                                            border: "2px solid black", position: "relative",
                                            cursor: "pointer",
                                            backgroundColor: appearance.buttonStyles.selectedStyle === "doubleborder-button" ? "#1DA35E" : "white"
                                        }}>
                                            <div
                                                onClick={() => handleButtonStyleSelect("doubleborder-button")}
                                                style={{
                                                    width: "90%", height: "2.6vw", position: "absolute", bottom: "-0.4vw", left: "0.6vw", border: "2px solid black"

                                                }}></div>
                                        </div>
                                    </div>

                                    {/* Second Row */}
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>

                                        {/* Rounded Edge Effect */}
                                        <div className="rounded-button"
                                            onClick={() => handleButtonStyleSelect("rounded-button")}
                                            style={{
                                                width: "100%", height: "2vw", border: "2px solid black", backgroundColor: "black",
                                                borderRadius: "50px", cursor: "pointer",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "rounded-button" ? "#1DA35E" : "black"
                                            }}></div>

                                        {/* Editable Rectangle Effect */}
                                        <div className="rectangle-button"
                                            onClick={() => handleButtonStyleSelect("rectangle-button")}
                                            style={{
                                                width: "100%", height: "2vw", border: "2px solid black",
                                                position: "relative", cursor: "pointer",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "rectangle-button" ? "#1DA35E" : "white"
                                            }}>
                                            <div style={{
                                                width: "0.5vw", height: "0.5vw", backgroundColor: "white",
                                                border: "2px solid black", position: "absolute", top: "-5px", left: "-5px"
                                            }}></div>
                                            <div style={{
                                                width: "0.5vw", height: "0.5vw", backgroundColor: "white",
                                                border: "2px solid black", position: "absolute", top: "-5px", right: "-5px"
                                            }}></div>
                                            <div style={{
                                                width: "0.5vw", height: "0.5vw", backgroundColor: "white",
                                                border: "2px solid black", position: "absolute", bottom: "-5px", left: "-5px"
                                            }}></div>
                                            <div style={{
                                                width: "0.5vw", height: "0.5vw", backgroundColor: "white",
                                                border: "2px solid black", position: "absolute", bottom: "-5px", right: "-5px"
                                            }}></div>
                                        </div>


                                        {/* Half-rounded Button */}
                                        <div className="halfrounded-button"
                                            onClick={() => handleButtonStyleSelect("halfrounded-button")}
                                            style={{
                                                width: "100%", height: "2.2vw", backgroundColor: "black",
                                                borderRadius: "50px 0px 0px 50px", cursor: "pointer",
                                                backgroundColor: appearance.buttonStyles.selectedStyle === "halfrounded-button" ? "#1DA35E" : "black"
                                            }}></div>
                                    </div>
                                </div>


                                {/* Button Color & Font Color */}
                                {/* Button Color */}
                                <h4 style={{ marginBottom: "0.5vw" }}>Button Color</h4>
                                <div style={{ display: "flex", gap: "1vw", marginTop: "1vw" }}>
                                    <div
                                        style={{
                                            backgroundColor: buttonColor || "#ddd",
                                            padding: "1vw",
                                            borderRadius: "5px",
                                            width: "6%",
                                            height: "2vw",
                                        }}
                                    ></div>
                                    <input
                                        type="text"
                                        style={{
                                            backgroundColor: "#ddd",
                                            padding: "1vw",
                                            borderRadius: "5px",
                                            width: "30%",
                                        }}
                                        placeholder="Button Color"
                                        value={buttonColor}
                                        onChange={(e) => setButtonColor(e.target.value)}
                                    />
                                </div>

                                {/* Button Font Color */}
                                <h4 style={{ marginBottom: "0.5vw" }}>Button Font Color</h4>
                                <div style={{ display: "flex", gap: "1vw", marginTop: "1vw" }}>
                                    <div
                                        style={{
                                            backgroundColor: buttonFontColor || "#ddd",
                                            padding: "1vw",
                                            borderRadius: "5px",
                                            width: "6%",
                                            height: "2vw",
                                        }}
                                    ></div>
                                    <input
                                        type="text"
                                        style={{
                                            backgroundColor: "#ddd",
                                            padding: "1vw",
                                            borderRadius: "5px",
                                            width: "30%",
                                        }}
                                        placeholder="Button Font Color"
                                        value={buttonFontColor}
                                        onChange={(e) => setButtonFontColor(e.target.value)}
                                    />
                                </div>
                            </div>


                            {/* Fonts Section */}
                            <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                                <h3 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Fonts</h3>
                                <div style={{ backgroundColor: "#fff", padding: "1vw", display: "flex", alignItems: "center", gap: "1vw", borderRadius: "5px", width: "80%", height: "2vw", border: "2px solid #eee" }}>
                                    <div style={{ width: "3vw", height: "3vw", backgroundColor: "#eee", display: "flex", justifyContent: "center", alignItems: "center" }}> <h3>Aa</h3></div>
                                    <h3>DM SANS</h3>
                                </div>
                                <h4 style={{ marginBottom: "0.5vw" }}>Font Color</h4>
                                < div style={{ display: "flex", gap: "1vw", marginTop: "1vw" }}>
                                    <div
                                        style={{
                                            backgroundColor: FontColor || "#ddd",
                                            padding: "1vw",
                                            borderRadius: "5px",
                                            width: "6%",
                                            height: "2vw",
                                        }}
                                    ></div>
                                    <input
                                        type="text"
                                        style={{
                                            backgroundColor: "#ddd",
                                            padding: "1vw",
                                            borderRadius: "5px",
                                            width: "30%",
                                        }}
                                        placeholder="Button Font Color"
                                        value={FontColor}
                                        onChange={(e) => setFontColor(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Themes Section */}
                            <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
                                <h3 style={{ marginBottom: "2vw", fontSize: "1.5vw", color: "#333" }}>Themes</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5vw" }}>




                                    {/* Air Snow */}
                                    <div className="air-snow" style={{ backgroundColor: "#ffffff", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#ffffff", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Air Snow</h2>
                                        </div>

                                    </div>

                                    {/* Air Grey */}
                                    <div className="air-grey" style={{ backgroundColor: "#EBEEF1", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#EBEEF1", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Air Grey</h2>
                                        </div>

                                    </div>

                                    {/* Air Smoke */}
                                    <div className="air-smoke" style={{ backgroundColor: "#2A3235", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#2A3235", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "white" }}>Air Smoke</h2>
                                        </div>

                                    </div>

                                    {/* Air Black */}
                                    <div className="air-black" style={{ backgroundColor: "black", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "black", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "white" }}>Air Black</h2>
                                        </div>

                                    </div>
                                    {/* Mineral Blue */}
                                    <div className="mineral-blue" style={{ backgroundColor: "#E0F6FF", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#E0F6FF", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Blue</h2>
                                        </div>

                                    </div>

                                    {/* Mineral Green */}
                                    <div className="mineral-green" style={{ backgroundColor: "#E0FAEE", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#E0FAEE", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Green</h2>
                                        </div>

                                    </div>

                                    {/* Mineral Orange */}
                                    <div className="mineral-orange" style={{ backgroundColor: "#FFEAE2", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#FFEAE2", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Orange</h2>
                                        </div>

                                    </div>
                                    {/**mineral yellow */}
                                    <div className="mineral-yellow" style={{ backgroundColor: "#FFF8E0", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#FFF8E0", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Yellow</h2>
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>



                    </div>
                </div>

                <div style={{ display: "flex", padding: "1vw", alignItems: "center", justifyContent: "flex-end" }}>
                    {/* Save Button */}
                    <button style={{ marginTop: "2vw", padding: "0.4vw 2.2vw", width: "6vw", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>Save</button>
                </div>


            </div>
        </div >
    )
}

export default Appearance