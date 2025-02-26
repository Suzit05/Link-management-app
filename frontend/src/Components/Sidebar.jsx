import React from 'react'
import sparklogo from "../assets/images/sparklogo.png"

const Sidebar = () => {
    return (
        <div style={{ width: "18%", backgroundColor: "#fff", padding: "2vw", borderRight: "1px solid #ddd" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "2vw" }}>
                <img src={sparklogo} alt="Spark Logo" style={{ width: "6vw", marginRight: "1vw" }} />

            </div>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2vw" }}>
                <li style={{
                    padding: "1vw 0",
                    cursor: "pointer",
                    color: "#1DA35E",
                    backgroundColor: "#F3F3F1", //select hone pr
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
    )
}

export default Sidebar