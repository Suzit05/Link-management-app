import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Mobile from "../Components/Mobile";
import { useProfile } from "../Context/ProfileContext";
import { UserContext } from "../Context/UserContext";
import { useAppearance } from "../Context/AppearanceContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"; // Import icons
import Specialbtns from "../Components/Specialbtns"

const Appearance = () => {
    const { profile, setProfile } = useProfile(); // Use profile context
    const { user } = useContext(UserContext); // Get user data from context
    const { buttonColor, setButtonColor, buttonFontColor, setButtonFontColor, FontColor, setFontColor } = useAppearance()

    const userId = user?._id;    // Extract user ID


    const { appearance, setAppearance } = useAppearance(); // Use AppearanceContext
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
                showToast("Appearance saved successfully!", "success");
                setTimeout(() => {
                    window.location.href = "/analytics"; // Update with your dashboard route
                }, 2000);
            } else {
                showToast(data.message || "Failed to save appearance", "error");
            }
        } catch (error) {
            console.error("Error saving appearance:", error);
            showToast("An error occurred. Please try again.", "error");
        }
    };


    const saveAppearanceData = async (updatedAppearance) => {
        try {
            const response = await fetch('http://localhost:3000/api/appearance', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(updatedAppearance),
            });

            const data = await response.json();
            if (response.ok) {
                showToast("Appearance saved successfully!", "success");
            } else {
                throw new Error(data.message || "Failed to save appearance data");
            }
        } catch (error) {
            console.error("Error saving appearance data:", error);
            showToast("An error occurred. Please try again.", "error");
        }
    };


   


    const handleThemeStyleSelect = async (themeStyle) => {
        // Get the selected theme's className and backgroundColor
        const selectedTheme = appearance.themes.styles[themeStyle];
        const { className, backgroundColor } = selectedTheme;

        // Update the appearance state
        const updatedAppearance = {
            ...appearance,
            themes: {
                ...appearance.themes,
                selectedStyle: themeStyle, // Update the selected theme
                selectedThemeData: {
                    className, // Pass the className
                    backgroundColor, // Pass the backgroundColor
                },
            },
        };

        setAppearance(updatedAppearance); // Update local state

        // Send the updated appearance data to the backend
        try {
            await saveAppearanceData(updatedAppearance);
            console.log("Theme selection saved successfully!");
        } catch (error) {
            console.error("Error saving theme selection:", error);
        }
    };


    return (
        <div style={{ display: "flex", height: "100%", backgroundColor: "#f3f3f1", width: "100vw" }}>
            <ToastContainer position="top-center" autoClose={3000} />
            <Sidebar></Sidebar>
            {/* Main Content */}
            <div style={{ flex: 1, padding: "2vw", }}>
                {/* Header */}
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, {user?.firstName} {user?.lastName}!</h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>Congratulations. You got a great response today.</p>

                <div style={{ display: "flex", gap: "10vw" }}>
                    {/* Mobile Preview */}
                    <Mobile ></Mobile>


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
                            {/**buttons  */}
                            <Specialbtns></Specialbtns>

                            {/* Fonts Section */}
                            <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                                <h3 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Fonts</h3>
                                <div style={{ backgroundColor: "#fff", padding: "1vw", display: "flex", alignItems: "center", gap: "1vw", borderRadius: "5px", width: "80%", height: "2vw", border: "2px solid #eee" }}>
                                    <div style={{ width: "3vw", height: "3vw", backgroundColor: "#eee", display: "flex", justifyContent: "center", alignItems: "center" }}> <h3>Aa</h3></div>
                                    <h3>DM SANS</h3>
                                </div>
                                <h4 style={{ marginBottom: "0.5vw" }}>Font Color</h4>
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
                                        onChange={(e) => {
                                            setButtonFontColor(e.target.value); // Update context
                                            setAppearance((prev) => ({
                                                ...prev,
                                                buttonStyles: {
                                                    ...prev.buttonStyles,
                                                    fontColor: e.target.value, // Update local state
                                                },
                                            }));
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Themes Section */}
                            <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
                                <h3 style={{ marginBottom: "2vw", fontSize: "1.5vw", color: "#333" }}>Themes</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5vw" }}>




                                    {/* Air Snow */}
                                    <div className="air-snow"
                                        onClick={() => handleThemeStyleSelect("air-snow")}
                                        style={{
                                            borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd"
                                            , cursor: "pointer",
                                            backgroundColor: appearance.themes.selectedStyle === "air-snow" ? "#1DA35E" : "#ffffff"
                                        }}>
                                        <div style={{ width: "100%", backgroundColor: "#ffffff", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Air Snow</h2>
                                        </div>

                                    </div>

                                    {/* Air Grey */}
                                    <div className="air-grey"
                                        onClick={() => handleThemeStyleSelect("air-grey")}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: appearance.themes.selectedStyle === "air-grey" ? "#1DA35E" : "#EBEEF1", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd"
                                        }}>
                                        <div style={{ width: "100%", backgroundColor: "#EBEEF1", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Air Grey</h2>
                                        </div>

                                    </div>

                                    {/* Air Smoke */}
                                    <div className="air-smoke"
                                        onClick={() => handleThemeStyleSelect("air-smoke")}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: appearance.themes.selectedStyle === "air-smoke" ? "#1DA35E" : "#2A3235", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd"
                                        }}>
                                        <div style={{ width: "100%", backgroundColor: "#2A3235", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "white" }}>Air Smoke</h2>
                                        </div>

                                    </div>

                                    {/* Air Black */}
                                    <div className="air-black"
                                        onClick={() => handleThemeStyleSelect("air-black")}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: appearance.themes.selectedStyle === "air-black" ? "#1DA35E" : "black", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd"
                                        }}>
                                        <div style={{ width: "100%", backgroundColor: "black", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "white" }}>Air Black</h2>
                                        </div>

                                    </div>
                                    {/* Mineral Blue */}
                                    <div className="mineral-blue"
                                        onClick={() => handleThemeStyleSelect("mineral-blue")}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: appearance.themes.selectedStyle === "mineral-blue" ? "#1DA35E" : "#E0F6FF", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd"
                                        }}>
                                        <div style={{ width: "100%", backgroundColor: "#E0F6FF", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Blue</h2>
                                        </div>

                                    </div>

                                    {/* Mineral Green */}
                                    <div className="mineral-green"
                                        onClick={() => handleThemeStyleSelect("mineral-green")}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: appearance.themes.selectedStyle === "mineral-green" ? "#1DA35E" : "#E0FAEE", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd"
                                        }}>
                                        <div style={{ width: "100%", backgroundColor: "#E0FAEE", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Green</h2>
                                        </div>

                                    </div>

                                    {/* Mineral Orange */}
                                    <div className="mineral-orange"
                                        onClick={() => handleThemeStyleSelect("mineral-orange")}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: appearance.themes.selectedStyle === "mineral-orange" ? "#1DA35E" : "#FFEAE2", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd"
                                        }}>
                                        <div style={{ width: "100%", backgroundColor: "#FFEAE2", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Orange</h2>
                                        </div>

                                    </div>
                                    {/**mineral yellow */}
                                    <div className="mineral-yellow"
                                        onClick={() => handleThemeStyleSelect("mineral-yellow")}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: appearance.themes.selectedStyle === "mineral-yellow" ? "#1DA35E" : "#FFF8E0", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd"
                                        }}>
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
                    <button
                        onClick={handleSaveAppearance} // Add onClick handler
                        style={{ cursor: "pointer", marginTop: "2vw", padding: "0.4vw 2.2vw", width: "6vw", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>Save</button>
                </div>


            </div>
        </div >
    )
}

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

export default Appearance