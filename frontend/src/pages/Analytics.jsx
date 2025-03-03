import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { UserContext } from "../Context/UserContext";
import { useAnalytics } from "../Context/AnalyticsContext";

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/analytics/get-analytics/${userId}`);
                const data = await response.json();
                if (data.success) setAnalyticsData(data.analytics);
            } catch (error) {
                console.error("Error fetching analytics:", error);
            }
        };

        fetchAnalytics();
    }, [userId]);


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


                <table border="1">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Item ID</th>
                            <th>Clicks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {analyticsData.map(({ type, itemId, count }) => (
                            <tr key={itemId}>
                                <td>{type}</td>
                                <td>{itemId}</td>
                                <td>{count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    );
};



export default Analytics;
