import React, { useContext } from 'react'

import { useProfile } from "../Context/ProfileContext";
import { UserContext } from "../Context/UserContext";
import { useAppearance } from "../Context/AppearanceContext";

const Specialbtns = () => {

    const { appearance, setAppearance } = useAppearance(); // Use AppearanceContext
    const { profile, setProfile } = useProfile(); // Use profile context
    const { user } = useContext(UserContext); // Get user data from context
    const { buttonColor, setButtonColor, buttonFontColor, setButtonFontColor, FontColor, setFontColor } = useAppearance()


    const handleButtonStyleSelect = async (selectedClassName) => {
        // Update local state
        const updatedAppearance = {
            ...appearance,
            buttonStyles: {
                ...appearance.buttonStyles,
                className: selectedClassName, // Update selected className
            },
        };

        setAppearance(updatedAppearance); // Update local state

        // Save updated appearance data
        try {
            await saveAppearanceData(updatedAppearance, false);
            console.log("Button style selection saved successfully!");
        } catch (error) {
            console.error("Error saving button style selection:", error);
        }
    };

    return (
        <div>
            <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Buttons</h3>

                {/* First Column - Filled Buttons */}
                <div>
                    <h4 style={{ marginBottom: "0.5vw" }}>Fill</h4>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                        <div className="norounded-fill" style={{ width: "100%", height: "2vw", border: "2px solid #000", backgroundColor: appearance.buttonStyles.className === "norounded-fill" ? "#1DA35E" : "black", cursor: "pointer", borderRadius: "0" }}
                            onClick={() => handleButtonStyleSelect("norounded-fill")}></div>
                        <div className="smrounded-fill" style={{ width: "100%", height: "2vw", border: "2px solid #000", backgroundColor: appearance.buttonStyles.className === "smrounded-fill" ? "#1DA35E" : "black", cursor: "pointer", borderRadius: "5px" }}
                            onClick={() => handleButtonStyleSelect("smrounded-fill")} ></div>
                        <div className="lgrounded-fill" style={{ width: "100%", height: "2vw", border: "5px solid #ddd", backgroundColor: appearance.buttonStyles.className === "lgrounded-fill" ? "#1DA35E" : "black", cursor: "pointer", borderRadius: "15px" }}
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
                                backgroundColor: appearance.buttonStyles.className === "norounded-outline" ? "#1DA35E" : "transparent",
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
                                backgroundColor: appearance.buttonStyles.className === "smrounded-outline" ? "#1DA35E" : "transparent",
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
                                backgroundColor: appearance.buttonStyles.className === "lgrounded-outline" ? "#1DA35E" : "transparent",
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
                                backgroundColor: appearance.buttonStyles.className === "norounded-hardshadow" ? "#1DA35E" : "black",
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
                                backgroundColor: appearance.buttonStyles.className === "smrounded-hardshadow" ? "#1DA35E" : "black",
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
                                backgroundColor: appearance.buttonStyles.className === "lgrounded-hardshadow" ? "#1DA35E" : "black",
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
                                backgroundColor: appearance.buttonStyles.className === "norounded-softshadow" ? "#1DA35E" : "black",
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
                                backgroundColor: appearance.buttonStyles.className === "smrounded-softshadow" ? "#1DA35E" : "black",
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
                                backgroundColor: appearance.buttonStyles.className === "lgrounded-softshadow" ? "#1DA35E" : "black",
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
                                backgroundColor: appearance.buttonStyles.className === "torn-button" ? "#1DA35E" : "black",
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
                                backgroundColor: appearance.buttonStyles.className === "wave-button" ? "#1DA35E" : "black",
                                clipPath: "polygon(0% 85%, 6.25% 75%, 12.5% 85%, 18.75% 75%, 25% 85%, 31.25% 75%, 37.5% 85%, 43.75% 75%, 50% 85%, 56.25% 75%, 62.5% 85%, 68.75% 75%, 75% 85%, 81.25% 75%, 87.5% 85%, 93.75% 75%, 100% 85%, 100% 15%, 93.75% 25%, 87.5% 15%, 81.25% 25%, 75% 15%, 68.75% 25%, 62.5% 15%, 56.25% 25%, 50% 15%, 43.75% 25%, 37.5% 15%, 31.25% 25%, 25% 15%, 18.75% 25%, 12.5% 15%, 6.25% 25%, 0% 15%)"
                            }}>
                        </div>



                        {/* Double Border Effect */}
                        <div className="doubleborder-button" style={{
                            width: "100%", height: "2vw", backgroundColor: "white",
                            border: "2px solid black", position: "relative",
                            cursor: "pointer",
                            backgroundColor: appearance.buttonStyles.className === "doubleborder-button" ? "#1DA35E" : "white"
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
                                backgroundColor: appearance.buttonStyles.className === "rounded-button" ? "#1DA35E" : "black"
                            }}></div>

                        {/* Editable Rectangle Effect */}
                        <div className="rectangle-button"
                            onClick={() => handleButtonStyleSelect("rectangle-button")}
                            style={{
                                width: "100%", height: "2vw", border: "2px solid black",
                                position: "relative", cursor: "pointer",
                                backgroundColor: appearance.buttonStyles.className === "rectangle-button" ? "#1DA35E" : "white"
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
                                backgroundColor: appearance.buttonStyles.className === "halfrounded-button" ? "#1DA35E" : "black"
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
                        onChange={(e) => {
                            setButtonColor(e.target.value); // Update context
                            setAppearance((prev) => ({
                                ...prev,
                                buttonStyles: {
                                    ...prev.buttonStyles,
                                    buttonColor: e.target.value, // Update local state
                                },
                            }));
                        }}
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

        </div>
    )
}

export default Specialbtns