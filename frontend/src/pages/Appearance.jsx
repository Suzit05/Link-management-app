import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Mobile from "../Components/Mobile";

const Appearance = () => {
    const [bgColor, setBgColor] = useState("#000000");
    return (
        <div style={{ display: "flex", height: "100%", backgroundColor: "#f3f3f1", width: "100vw" }}>
            <Sidebar></Sidebar>
            {/* Main Content */}
            <div style={{ flex: 1, padding: "2vw", }}>
                {/* Header */}
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, Jenny Wilson!</h2>
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
                                    <div style={{ textAlign: "center", padding: "1vw", border: "1px solid #ddd", borderRadius: "8px", width: "30%" }}>
                                        <div style={{ width: "3vw", height: "3vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "5px", gap: "0.4vw", marginLeft: "4vw" }}>
                                            <div style={{ width: "3vw", height: "0.6vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "3vw", height: "0.6vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "3vw", height: "0.6vw", backgroundColor: "black" }}></div>
                                        </div>
                                        <p style={{ marginTop: "0.5vw", fontSize: "1vw", color: "#333" }}>Stack</p>
                                    </div>
                                    <div style={{ textAlign: "center", padding: "1vw", border: "1px solid #ddd", borderRadius: "8px", width: "30%" }}>
                                        <div style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                                            gridTemplateRows: "repeat(2, 1fr)", // Two rows
                                            gap: 0,
                                            width: "3vw",  // Adjusted width to fit two columns
                                            height: "3vw", // Adjusted height to fit two rows
                                            marginLeft: "4vw"
                                        }}>
                                            <div style={{ width: "1.1vw", height: "1vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "1.1vw", height: "1vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "1.1vw", height: "1vw", backgroundColor: "black" }}></div>
                                            <div style={{ width: "1.1vw", height: "1vw", backgroundColor: "black" }}></div>
                                        </div>
                                        <p style={{ marginTop: "0.5vw", fontSize: "1vw", color: "#333" }}>Grid</p>
                                    </div>
                                    <div style={{ textAlign: "center", padding: "1vw", border: "1px solid #ddd", borderRadius: "8px", width: "30%" }}>
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
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", backgroundColor: "black", borderRadius: "0" }}></div>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", backgroundColor: "black", borderRadius: "5px" }}></div>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", backgroundColor: "black", borderRadius: "15px" }}></div>
                                    </div>
                                </div>

                                {/* Second Column - Outline Buttons */}
                                <div style={{ marginTop: "1.5vw" }}>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Outline</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", borderRadius: "0" }}></div>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", borderRadius: "5px" }}></div>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", borderRadius: "15px" }}></div>
                                    </div>
                                </div>

                                {/*3rd */}
                                <div style={{ marginTop: "1.5vw" }}>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Hard shadow</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", borderRadius: "0", boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}></div>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", borderRadius: "5px", boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}></div>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid #000", borderRadius: "15px", boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}></div>
                                    </div>
                                </div>

                                {/*4th */}
                                <div style={{ marginTop: "1.5vw" }}>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Soft shadow</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid white", borderRadius: "0", boxShadow: "4px 4px 0px rgb(241, 239, 239)" }}></div>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid white", borderRadius: "5px", boxShadow: "4px 4px 0px rgb(241, 239, 239)" }}></div>
                                        <div style={{ width: "100%", height: "2vw", border: "2px solid white", borderRadius: "15px", boxShadow: "4px 4px 0px rgb(241, 239, 239)" }}></div>
                                    </div>
                                </div>

                                {/* Special Buttons Section */}
                                <div style={{ marginTop: "1.5vw", display: "flex", flexDirection: "column", gap: "2vw" }}>
                                    <h4 style={{ marginBottom: "0.5vw" }}>Special</h4>

                                    {/* First Row */}
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>
                                        {/* Torn Edge Effect (Using SVG) */}
                                        <div style={{ width: "100%", height: "2vw", position: "relative" }}>
                                            <svg width="100%" height="100%">
                                                <filter id="tornEffect">
                                                    <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" />
                                                    <feDisplacementMap in="SourceGraphic" scale="8" />
                                                </filter>
                                                <rect width="100%" height="100%" fill="black" filter="url(#tornEffect)" />
                                            </svg>
                                        </div>

                                        {/*up and dpwn wave */}
                                        <div style={{
                                            width: "100%",
                                            height: "2.3vw",
                                            backgroundColor: "black",
                                            position: "relative",
                                            clipPath: "polygon(0% 85%, 6.25% 75%, 12.5% 85%, 18.75% 75%, 25% 85%, 31.25% 75%, 37.5% 85%, 43.75% 75%, 50% 85%, 56.25% 75%, 62.5% 85%, 68.75% 75%, 75% 85%, 81.25% 75%, 87.5% 85%, 93.75% 75%, 100% 85%, 100% 15%, 93.75% 25%, 87.5% 15%, 81.25% 25%, 75% 15%, 68.75% 25%, 62.5% 15%, 56.25% 25%, 50% 15%, 43.75% 25%, 37.5% 15%, 31.25% 25%, 25% 15%, 18.75% 25%, 12.5% 15%, 6.25% 25%, 0% 15%)"
                                        }}>
                                        </div>



                                        {/* Double Border Effect */}
                                        <div style={{
                                            width: "100%", height: "2vw", backgroundColor: "white",
                                            border: "2px solid black", position: "relative"
                                        }}>
                                            <div style={{
                                                width: "90%", height: "2.6vw", position: "absolute", bottom: "-0.4vw", left: "0.6vw", border: "2px solid black"
                                            }}></div>
                                        </div>
                                    </div>

                                    {/* Second Row */}
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw" }}>

                                        {/* Rounded Edge Effect */}
                                        <div style={{
                                            width: "100%", height: "2vw", border: "2px solid black", backgroundColor: "black",
                                            borderRadius: "50px"
                                        }}></div>

                                        {/* Editable Rectangle Effect */}
                                        <div style={{
                                            width: "100%", height: "2vw", border: "2px solid black",
                                            position: "relative"
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
                                        <div style={{
                                            width: "100%", height: "2.2vw", backgroundColor: "black",
                                            borderRadius: "50px 0px 0px 50px"
                                        }}></div>
                                    </div>
                                </div>


                                {/* Button Color & Font Color */}
                                <h4 style={{ marginBottom: "0.5vw" }}>Button Color</h4>
                                <div style={{ display: "flex", gap: "1vw", marginTop: "1vw" }}>
                                    <div style={{ backgroundColor: "#ddd", padding: "1vw", borderRadius: "5px", width: "6%", height: "2vw" }}></div>
                                    <input style={{ backgroundColor: "#ddd", padding: "1vw", borderRadius: "5px", width: "30%" }} placeholder="Button Color" />
                                </div>

                                <h4 style={{ marginBottom: "0.5vw" }}>Button font Color</h4>
                                <div style={{ display: "flex", gap: "1vw", marginTop: "1vw" }}>
                                    <div style={{ backgroundColor: "#ddd", padding: "1vw", borderRadius: "5px", width: "6%", height: "2vw" }}></div>
                                    <input style={{ backgroundColor: "#ddd", padding: "1vw", borderRadius: "5px", width: "30%" }} placeholder="Button font Color" />
                                </div>
                            </div>


                            {/* Fonts Section */}
                            <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                                <h3 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Fonts</h3>
                                <div style={{ backgroundColor: "#fff", padding: "1vw", display: "flex", alignItems: "center", gap: "1vw", borderRadius: "5px", width: "80%", height: "2vw", border: "2px solid #eee" }}>
                                    <div style={{ width: "3vw", height: "3vw", backgroundColor: "#eee", display: "flex", justifyContent: "center", alignItems: "center" }}> <h3>Aa</h3></div>
                                    <h3>DM SANS</h3>
                                </div>
                                <h4 style={{ marginBottom: "0.5vw" }}>Button Color</h4>
                                <div style={{ display: "flex", gap: "1vw", marginTop: "1vw" }}>
                                    <div style={{ backgroundColor: "#ddd", padding: "1vw", borderRadius: "5px", width: "6%", height: "2vw" }}></div>
                                    <input style={{ backgroundColor: "#ddd", padding: "1vw", borderRadius: "5px", width: "30%" }} placeholder=" Color" />
                                </div>
                            </div>

                            {/* Themes Section */}
                            <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
                                <h3 style={{ marginBottom: "2vw", fontSize: "1.5vw", color: "#333" }}>Themes</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5vw" }}>


                                    {/**yhaaaaaaaa kro  color bdlo */}

                                    {/* Air Snow */}
                                    <div style={{ backgroundColor: "#ffffff", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#ffffff", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Air Snow</h2>
                                        </div>

                                    </div>

                                    {/* Air Grey */}
                                    <div style={{ backgroundColor: "#EBEEF1", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#EBEEF1", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#fff", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Air Grey</h2>
                                        </div>

                                    </div>

                                    {/* Air Smoke */}
                                    <div style={{ backgroundColor: "#2A3235", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#2A3235", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "white" }}>Air Smoke</h2>
                                        </div>

                                    </div>

                                    {/* Air Black */}
                                    <div style={{ backgroundColor: "black", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "black", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#1c1c1c", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "white" }}>Air Black</h2>
                                        </div>

                                    </div>
                                    {/* Mineral Blue */}
                                    <div style={{ backgroundColor: "#E0F6FF", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#E0F6FF", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Blue</h2>
                                        </div>

                                    </div>

                                    {/* Mineral Green */}
                                    <div style={{ backgroundColor: "#E0FAEE", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#E0FAEE", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Green</h2>
                                        </div>

                                    </div>

                                    {/* Mineral Orange */}
                                    <div style={{ backgroundColor: "#FFEAE2", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
                                        <div style={{ width: "100%", backgroundColor: "#FFEAE2", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.7vw" }}>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <div style={{ width: "100%", height: "1vw", backgroundColor: "#ccc", borderRadius: "5px" }}></div>
                                            <h2 style={{ marginTop: "2vw", fontSize: "1.1vw", color: "#333" }}>Mineral Orange</h2>
                                        </div>

                                    </div>
                                    <div style={{ backgroundColor: "#FFF8E0", borderRadius: "10px", height: '12vw', padding: "1vw", boxShadow: "0 0 5px rgba(0,0,0,0.1)", border: "1px solid #ddd" }}>
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