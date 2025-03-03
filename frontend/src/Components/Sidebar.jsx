import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import sparklogo from "../assets/images/sparklogo.png";
import { UserContext } from "../Context/UserContext";

const Sidebar = () => {
    const { user } = useContext(UserContext); // Get user data from context
    const location = useLocation(); // Get the current URL
    const navigate = useNavigate(); // Function to navigate

    // Sidebar items with paths
    const sidebarItems = [
        { name: "Links", path: "/links", icon: "ri-links-line" },
        { name: "Appearance", path: "/appearance", icon: "ri-palette-line" },
        { name: "Analytics", path: "/analytics", icon: "ri-bar-chart-line" },
        { name: "Settings", path: "/settings", icon: "ri-settings-3-line" },
    ];

    return (
        <div style={{ width: "18%", backgroundColor: "#fff", padding: "2vw", borderRight: "1px solid #ddd" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "2vw" }}>
                <img src={sparklogo} alt="Spark Logo" style={{ width: "6vw", marginRight: "1vw" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2vw" }}>
                {sidebarItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <li
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            style={{
                                padding: "1vw 0",
                                cursor: "pointer",
                                color: isActive ? "#1DA35E" : "grey",
                                backgroundColor: isActive ? "#F3F3F1" : "transparent",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.7vw",
                            }}
                        >
                            <i className={item.icon} style={{ fontSize: "1.2vw" }}></i>
                            {item.name}
                        </li>
                    );
                })}
            </ul>

            {/* User Profile Section */}
            <div style={{ position: "absolute", bottom: "2vw", display: "flex", alignItems: "center", border: "2px solid black", borderRadius: "3vw", padding: "1vw" }}>
                <span style={{ fontSize: "1vw" }}>{user?.firstName} {user?.lastName}</span>
            </div>
        </div>
    );
};

export default Sidebar;
