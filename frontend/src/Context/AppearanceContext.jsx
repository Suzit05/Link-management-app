import React, { createContext, useState, useContext, useEffect } from "react";

// Create the AppearanceContext
const AppearanceContext = createContext();


//...themes pr kaam kro.......mobile m add kro
////////////themes////////

// Create a provider component
export const AppearanceProvider = ({ children }) => {
    const [buttonColor, setButtonColor] = useState("#ddd");
    const [buttonFontColor, setButtonFontColor] = useState("#000");

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
            selectedStyle: "light",
            styles: {
                "air-snow": { className: "air-snow", backgroundColor: "#ffffff" },
                "air-grey": { className: "air-grey", backgroundColor: "#EBEEF1" },
                "air-smoke": { className: "air-smoke", backgroundColor: "#2A3235" },
                "air-black": { className: "air-black", backgroundColor: "black" },
                "mineral-blue": { className: "mineral-blue", backgroundColor: "#E0F6FF" },
                "mineral-green": { className: "mineral-green", backgroundColor: "#E0FAEE" },
                "mineral-orange": { className: "mineral-orange", backgroundColor: "#FFEAE2" },
                "mineral-yellow": { className: "mineral-yellow", backgroundColor: "#FFF8E0" }
            },
            selectedThemeData: {
                className: "light",
                backgroundColor: "#FFFFFF"
            }
        }
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
                console.log("Fetched appearance from DB:", data);

                // Ensure themes and styles are structured correctly
                setAppearance(prev => ({
                    ...prev,
                    ...data,
                    themes: {
                        ...prev.themes,
                        ...data.themes,
                        styles: data.themes?.styles || prev.themes.styles // Ensure styles exist
                    }
                }));
            } else {
                throw new Error(data.message || "Failed to fetch appearance data");
            }
        } catch (error) {
            console.error("Error fetching appearance data:", error);
        }
    };


    // Sync button colors with appearance state
    useEffect(() => {
        if (appearance.buttonStyles) {
            setButtonColor(appearance.buttonStyles.buttonColor);
            setButtonFontColor(appearance.buttonStyles.fontColor);
        }
    }, [appearance]);

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
                setAppearance(updatedAppearance);
                setButtonColor(updatedAppearance.buttonStyles.buttonColor);
                setButtonFontColor(updatedAppearance.buttonStyles.fontColor);
                fetchAppearanceData();
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


    // Derive themeBackgroundColor from the appearance state
    const themeBackgroundColor = appearance.themes.selectedThemeData.backgroundColor;


    return (
        <AppearanceContext.Provider value={{ appearance, setAppearance, saveAppearanceData, buttonColor, setButtonColor, buttonFontColor, setButtonFontColor, themeBackgroundColor }}>
            {children}
        </AppearanceContext.Provider>
    );
};

// Custom hook to use the AppearanceContext
export const useAppearance = () => useContext(AppearanceContext);
