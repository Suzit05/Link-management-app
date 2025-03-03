import React, { createContext, useContext, useState, useEffect } from "react";

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
    const [clickCounts, setClickCounts] = useState({});
    const [totalClicks, setTotalClicks] = useState({ links: 0, shop: 0, cta: 0 });

    // Function to track clicks
    const trackClick = async (userId, type, itemId) => {
        setClickCounts(prevCounts => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 0) + 1
        }));

        setTotalClicks(prev => ({
            ...prev,
            [type]: prev[type] + 1
        }));

        const handleClick = (type, id, title) => {
            if (!userId) {
                console.error("❌ No userId found in profile!");
                return;
            }
            trackClick(type, id, userId, title); // ✅ Send userId while clicking
        };
        // Send click data to backend
        try {
            await fetch("http://localhost:3000/api/analytics/track-click", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, type, itemId })
            });
        } catch (error) {
            console.error("Error sending click data:", error);
        }
    };

    return (
        <AnalyticsContext.Provider value={{ clickCounts, totalClicks, trackClick }}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export const useAnalytics = () => useContext(AnalyticsContext);
