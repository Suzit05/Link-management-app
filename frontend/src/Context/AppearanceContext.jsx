import React, { createContext, useState, useContext, useEffect } from "react";

// Create the AppearanceContext
const AppearanceContext = createContext();

// Create a provider component
export const AppearanceProvider = ({ children }) => {
    const [appearance, setAppearance] = useState({
        layout: { type: "stack", className: "stack" },
        buttonStyles: {
            buttonColor: "#000000",
            fontColor: "#FFFFFF",
            className: "rounded",
        },
        fontStyles: {
            font: "DM Sans",
            color: "#000000",

        },
        themes: {
            name: "light",
            backgroundColor: "#FFFFFF",
            className: "light",
            insideColor: "#ffff"
        },
    });

    // Fetch appearance data from the backend
    const fetchAppearanceData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/appearance/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setAppearance(data); // Set appearance data in state
            } else {
                throw new Error(data.message || "Failed to fetch appearance data");
            }
        } catch (error) {
            console.error("Error fetching appearance data:", error);
        }
    };

    // Save appearance data to the backend
    const saveAppearanceData = async (updatedAppearance) => {
        try {
            const response = await fetch('http://localhost:3000/api/appearance', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(updatedAppearance),
            });

            const data = await response.json();
            if (response.ok) {
                setAppearance(updatedAppearance); // Update local state
                return data;
            } else {
                throw new Error(data.message || "Failed to save appearance data");
            }
        } catch (error) {
            console.error("Error saving appearance data:", error);
            throw error;
        }
    };

    // Fetch appearance data on component mount
    useEffect(() => {
        fetchAppearanceData();
    }, []);

    return (
        <AppearanceContext.Provider value={{ appearance, setAppearance, saveAppearanceData }}>
            {children}
        </AppearanceContext.Provider>
    );
};

// Custom hook to use the AppearanceContext
export const useAppearance = () => useContext(AppearanceContext);