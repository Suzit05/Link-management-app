import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Mobile from "../Components/Mobile";


const Links = () => {
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

                        <h3 style={{ fontSize: "1.5vw", backgroundColor: "greenyellow", width: "fit-content" }}>Profile</h3>



                        {/* Profile Section */}
                        <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "1vw" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "1vw" }}>
                                <div className="dp" style={{ alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "red", height: '12vh', width: "5vw", }}></div>
                                <div style={{ width: "80%", padding: "1vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1vh" }}>
                                    <button style={{ width: "90%", backgroundColor: "#1DA35E", color: "#fff", padding: "1vw", border: "none", borderRadius: "1vw" }}>Pick an Image</button>
                                    <button style={{ width: "90%", padding: "1vw", border: "1px solid #ddd", borderRadius: "1vw" }}>Remove</button>
                                </div>

                            </div>

                            <p >Profile Title</p>
                            <input type="text" value="@opopo_08" style={{ width: "100%", padding: "1vw", marginBottom: "1vw", border: "1px solid #ddd", borderRadius: "0.5vw" }} />
                            <p>Bio</p>
                            <textarea style={{ width: "100%", padding: "1vw", border: "1px solid #ddd", borderRadius: "0.5vw" }} placeholder="Bio"></textarea>
                        </div>

                        {/*Link and Shop box */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: "1vw", borderRadius: "1vw" }}>
                            <div style={{ width: "fit-content", alignSelf: "self-start", backgroundColor: "#ddd" }}>
                                <button style={{ backgroundColor: "#1DA35E", border: "thin  #1DA35E", borderRadius: "2VW", padding: "0.3vw 0.3vw" }}>Add link</button>
                                <button style={{ backgroundColor: "#ddd", border: "thin  #ddd", borderRadius: "2VW", padding: "0.3vw 0.3vw" }}>Add Ship</button>
                            </div>
                            <button style={{ backgroundColor: "#1DA35E", color: "white", fontSize: "1vw", border: "thin  #1DA35E", marginTop: "3vh", borderRadius: "2vw", padding: "1vw 18vw", }}>+ Add</button>
                            {/*modal window bnnna na hai link and shop ka*/}
                        </div>

                        {/* Banner Customization */}
                        <div style={{ backgroundColor: "white", padding: "2vw", borderRadius: "1vw" }}>
                            <h3 style={{ fontSize: "1.5vw", marginBottom: "1vw" }}>Banner</h3>
                            <div style={{ backgroundColor: bgColor, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "20vh", padding: "2vw", borderRadius: "1vw", textAlign: "center", color: "#fff" }}>
                                <div className="dp" style={{ borderRadius: "50%", backgroundColor: "red", height: '12vh', width: "5vw", }}></div>
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
                            <div className="colorInput" style={{ display: "flex", gap: "1vw", alignItems: "center", marginTop: "2vh" }}>
                                <div style={{ width: "2vw", height: "4vh", backgroundColor: "pink" }}></div>
                                <input style={{ width: "12vw", height: "4vh" }} type="text" />
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
    );
};

export default Links;
