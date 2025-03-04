import { React, useContext } from "react";
import { useProfile } from "../Context/ProfileContext";
import { useAnalytics } from "../Context/AnalyticsContext";
import Sidebar from "../Components/Sidebar";
import { UserContext } from "../Context/UserContext";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";

const Analytics = () => {
    const { profile } = useProfile();
    const { user } = useContext(UserContext);
    const { linkCount, shopCount, totalCount, ctaCount, setctaCount } = useAnalytics();

    //  data for the line graph
    const data = [
        { month: "Jan", clicks: 0 },
        { month: "Feb", clicks: 0 },
        { month: "Mar", clicks: totalCount },
        { month: "Apr", clicks: 0 },
        { month: "May", clicks: 0 },
        { month: "Jun", clicks: 0 },
        { month: "Jul", clicks: 0 },
    ];

    // Data for Bar Chart (Traffic by Device)
    const deviceData = [
        { name: "Linux", users: 0 },
        { name: "Mac", users: 0 },
        { name: "iOS", users: 0 },
        { name: "Windows", users: totalCount },
        { name: "Android", users: 0 },
        { name: "Other", users: totalCount },
    ];

    // Data for Pie Chart (Sites)
    const siteData = [
        { name: "YouTube", value: 0 },
        { name: "Facebook", value: 0 },
        { name: "Instagram", value: 0 },
        { name: "Other", value: 1 },
    ];

    const linkData = [
        { name: "Link 1", clicks: 2 },
        { name: "Link 2", clicks: linkCount },
        { name: "Link 3", clicks: shopCount },
        { name: "Link 4", clicks: totalCount / 4 },

    ];

    // Colors for Pie Chart
    const COLORS = ["#66D19E", "#33A679", "#167C56", "#0B5137"];

    return (
        <div style={{ display: "flex", height: "100%", backgroundColor: "#f3f3f1", width: "100vw" }}>
            <Sidebar />
            <div style={{ flex: 1, padding: "2vw" }}>
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>
                    Hi, {user?.firstName} {user?.lastName}!
                </h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>
                    Congratulations. You got a great response today.
                </p>

                <h3 style={{ fontSize: "1vw", marginBottom: "1vw" }}>Overview</h3>

                {/* Stats Overview */}
                <div style={{ display: "flex", gap: "1vw", marginBottom: "2vw" }}>
                    <div style={{
                        border: "2px solid #4CAF50",
                        padding: "1vw",
                        borderRadius: "8px",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#4CAF50",
                        width: "10vw",
                        textAlign: "center"
                    }}>
                        <h2 style={{ color: "white", fontSize: "0.9vw", marginBottom: "5px" }}>Clicks on Links</h2>
                        <p style={{ fontSize: "1.5vw", fontWeight: "bold", color: "white", margin: "0" }}>{linkCount}</p>
                    </div>

                    <div style={{
                        border: "2px solid #DCFFEB",
                        padding: "1vw",
                        borderRadius: "8px",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#DCFFEB",
                        width: "10vw",
                        textAlign: "center"
                    }}>
                        <h2 style={{ color: "black", fontSize: "0.9vw", marginBottom: "5px" }}>Click on Shop</h2>
                        <p style={{ fontSize: "1.5vw", fontWeight: "bold", color: "black", margin: "0" }}>{shopCount}</p>
                    </div>

                    <div style={{
                        border: "2px solid #DCFFEB",
                        padding: "1vw",
                        borderRadius: "8px",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#DCFFEB",
                        width: "10vw",
                        textAlign: "center"
                    }}>
                        <h2 style={{ color: "black", fontSize: "0.9vw", marginBottom: "5px" }}>CTA</h2>
                        <p style={{ fontSize: "1.5vw", fontWeight: "bold", color: "black", margin: "0" }}>{ctaCount}</p>
                    </div>
                </div>


                {/* Graph Section */}
                <div style={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    padding: "1vw",
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                    width: "100%",
                    height: "300px",
                }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="clicks" stroke="#4CAF50" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* 2nd Graphs Section  */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1vw",
                    marginTop: "2vw",
                }}>

                    {/* Traffic by Device (Bar Chart) */}
                    <div style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        padding: "1vw",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        height: "300px"
                    }}>
                        <h3 style={{ fontSize: "1vw", marginBottom: "1vw" }}>Traffic by Device</h3>
                        <ResponsiveContainer width="100%" height="80%">
                            <BarChart data={deviceData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="users" fill="#4CAF50" barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Sites (Pie Chart) */}
                    <div style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        padding: "1vw",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        height: "300px"
                    }}>
                        <h3 style={{ fontSize: "1vw", marginBottom: "1vw" }}>Sites</h3>
                        <ResponsiveContainer width="100%" height="80%">
                            <PieChart>
                                <Pie data={siteData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#82ca9d" dataKey="value">
                                    {siteData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                {/** 3rd column */}


                <div style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "1.5vw",
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                    height: "350px",
                    width: "100%"
                }}>
                    <h3 style={{ fontSize: "1vw", marginBottom: "1vw", fontWeight: "bold" }}>Traffic by Links</h3>
                    <ResponsiveContainer width="100%" height="80%">
                        <BarChart data={linkData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="clicks" fill="#4CAF50" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>




            </div>
        </div>
    );
};

export default Analytics;
