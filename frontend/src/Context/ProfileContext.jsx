import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
const ProfileContext = createContext();

// Create a provider component
export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({
        profileImage: "",
        profileTitle: "",
        bio: "",
        bannerColor: "#000000",
        links: [],
        Shop: [],
    });

    // Fetch profile data on component mount
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/profile/me', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    // Merge fetched data with existing state
                    setProfile((prevProfile) => ({
                        ...prevProfile,
                        ...data,
                        links: data.links || prevProfile.links,
                        Shop: data.Shop || prevProfile.Shop,
                    }));
                } else {
                    throw new Error(data.message || "Failed to fetch profile data");
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

// Custom hook to use the profile context
export const useProfile = () => useContext(ProfileContext);