import React from 'react'
import Sidebar from "../Components/Sidebar";
import Mobile from "../Components/Mobile";

const Analytics = () => {
    return (
        <div style={{ display: "flex", height: "100%", backgroundColor: "#f3f3f1", width: "100vw" }}>
            <Sidebar></Sidebar>
            {/* Main Content */}
            <div style={{ flex: 1, padding: "2vw", }}>
                {/* Header */}
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, Jenny Wilson!</h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>Congratulations. You got a great response today.</p>

                {/** */}
                <div style={{ backgroundColor: "#F5F5F5", padding: "2vw", minHeight: "100vh" }}>
                    {/* Overview Section */}
                    <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                        <h3 style={{ marginBottom: "2vw", fontSize: "1.5vw", color: "#333" }}>Overview</h3>

                        {/* Top Three Stats */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1vw", marginBottom: "2vw" }}>
                            <div style={{ backgroundColor: "#2ECC71", color: "#fff", padding: "1.5vw", borderRadius: "10px", textAlign: "center" }}>
                                <h4>Clicks on Links</h4>
                                <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>2,318</p>
                            </div>
                            <div style={{ backgroundColor: "#1ABC9C", color: "#fff", padding: "1.5vw", borderRadius: "10px", textAlign: "center" }}>
                                <h4>Clicks on Shop</h4>
                                <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>7,265</p>
                            </div>
                            <div style={{ backgroundColor: "#27AE60", color: "#fff", padding: "1.5vw", borderRadius: "10px", textAlign: "center" }}>
                                <h4>CTA</h4>
                                <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>156</p>
                            </div>
                        </div>

                        {/* Line Chart Placeholder */}
                        <div style={{ backgroundColor: "#D5F5E3", width: "100%", height: "10vw", borderRadius: "10px", marginBottom: "2vw" }}></div>

                        {/* Lower Stats Section */}
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1vw", marginBottom: "2vw" }}>
                            {/* Traffic by Device */}
                            <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                                <h4 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Traffic by Device</h4>
                                <div style={{ backgroundColor: "#A9DFBF", width: "100%", height: "8vw", borderRadius: "10px" }}></div>
                            </div>

                            {/* Sites Pie Chart */}
                            <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                                <h4 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Sites</h4>
                                <div style={{ backgroundColor: "#58D68D", width: "100%", height: "8vw", borderRadius: "10px" }}></div>
                            </div>
                        </div>

                        {/* Traffic by Links */}
                        <div style={{ backgroundColor: "#fff", padding: "1.5vw", borderRadius: "10px", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                            <h4 style={{ marginBottom: "1vw", fontSize: "1.2vw", color: "#333" }}>Traffic by Links</h4>
                            <div style={{ backgroundColor: "#82E0AA", width: "100%", height: "8vw", borderRadius: "10px" }}></div>
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

export default Analytics