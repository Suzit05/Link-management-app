import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import sparklogo from "../assets/images/sparklogo.png";
import { UserContext } from "../Context/UserContext";
import "../styles/sidebar.css";

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
        <div className="sidebar-container">
            {/* Logo Section */}
            <div className="logo-section">
                <img src={sparklogo} alt="Spark Logo" className="logo" />
            </div>

            {/* Sidebar Items */}
            <ul className="sidebar-list">
                {sidebarItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <li
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`sidebar-item ${isActive ? "active" : ""}`}
                        >
                            <i className={item.icon}></i>
                            {item.name}
                        </li>
                    );
                })}
            </ul>

            {/* User Profile Section */}
            <div className="user-profile">
                <span className="user-name">{user?.firstName} {user?.lastName}</span>
            </div>
        </div>
    );
};

export default Sidebar;