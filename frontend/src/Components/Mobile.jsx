import React from 'react';
import sparklogo from "../assets/images/sparklogo.png";
import { useProfile } from "../Context/ProfileContext";
import { useAppearance } from '../Context/AppearanceContext';
import { useAnalytics } from '../Context/AnalyticsContext';



const Mobile = () => {
    const { profile } = useProfile();
    const userId = profile?.userId; // ✅ Extract userId from profile
    const { profileImage, bannerColor, profileTitle, links = [], Shop = [] } = profile;
    const { clickCounts, trackClick } = useAnalytics(); // Use analytics
    const { appearance, buttonColor, buttonFontColor, themeBackgroundColor } = useAppearance();
    const { layout } = appearance;

    console.log("Current layout type:", layout.type);
    console.log("Current theme background color:", themeBackgroundColor);

    const layoutType = layout.type;

    // Apply layout styles dynamically
    const layoutStyle = {
        display: layoutType === "carousel" ? "flex" : layoutType === "grid" ? "grid" : "flex",
        flexDirection: layoutType === "carousel" ? "row" : layoutType === "stack" ? "column" : "initial",
        alignItems: "center",
        justifyContent: layoutType === "carousel" ? "center" : "initial",
        gap: layoutType === "grid" ? "1vw" : layoutType === "carousel" ? "0.5vw" : "0.8vw",
        gridTemplateColumns: layoutType === "grid" ? "repeat(2, 1fr)" : "none",
        width: "100%",
    };

    const buttonStyle = {
        width: layoutType === "carousel" ? "18vw" : layoutType === "grid" ? "7vw" : "90%",
        height: layoutType === "carousel" ? "12vw" : layoutType === "grid" ? "3vw" : "3.5vw",
        fontSize: layoutType === "carousel" ? "1vw" : layoutType === "grid" ? "0.9vw" : "1vw",
        backgroundColor: buttonColor,  // ✅ Dynamic color from context
        color: buttonFontColor,  // ✅ Dynamic font color from context
        border: "none",
        borderRadius: layoutType === "stack" ? "1vw" : "0.5vw",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    };



    return (
        <div style={{
            flex: "0.3", borderRadius: "1vw", textAlign: "center",

        }}>
            <div style={{
                width: "16vw",
                height: "38vw",
                border: "1vw solid black",
                borderRadius: "5vw",
                padding: 0,
                backgroundColor: themeBackgroundColor  // ✅ Background updates correctly now// ✅ Dynamic background from selected theme
            }}>
                <div className="mobile-banner" style={{
                    width: "100%",
                    height: "12vw",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: bannerColor || "#342B26",
                    margin: 0,
                    padding: 0,
                    borderRadius: "3.9vw",
                }}>
                    <div className="dp" style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "4vw",
                        marginLeft: "5vw",
                        borderRadius: "50%",
                        height: '12vh',
                        width: "5vw",
                        backgroundImage: profileImage ? `url(${profileImage})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}></div>
                    <h3 style={{ fontSize: "1vw", color: "white" }}>{profileTitle || "profile"}</h3>
                </div>

                <div style={{
                    width: "fit-content",
                    marginLeft: "3.5vw",
                    marginTop: "1vw",
                    display: "flex",
                    gap: "0",
                    backgroundColor: "#ddd",
                    borderRadius: "1vw"
                }}>
                    <button style={{
                        backgroundColor: "#1DA35E",
                        border: "none",
                        borderRadius: "2vw",
                        padding: "0.6vw 1.2vw",
                    }}>
                        Link
                    </button>
                    <button style={{
                        backgroundColor: "#ddd",
                        border: "none",
                        borderRadius: "2vw",
                        padding: "0.6vw 1.2vw",
                    }}>
                        Shop
                    </button>
                </div>

                <div style={{
                    maxHeight: "15vw", overflowX: "auto", overflowY: "auto", paddingRight: "0.5vw", padding: "1vw", scrollbarWidth: "none", // Hides scrollbar in Firefox
                    msOverflowStyle: "none", // Hides scrollbar in IE/Edge
                    "&::-webkit-scrollbar": { // Hides scrollbar in WebKit browsers (Chrome, Safari, etc.)
                        display: "none",
                    },
                }}>
                    <div style={layoutStyle}>
                        {links.map((link, index) => (
                            <button key={index} style={buttonStyle}
                                onClick={() => trackClick(userId, "link", link.id || `link-${index}`)}
                            >
                                📺 {link.title}
                            </button>
                        ))}
                    </div>
                    <div style={layoutStyle}>
                        {Shop.map((shop, index) => (
                            <button key={index} style={buttonStyle}
                                onClick={() => trackClick(userId, "shop", shop.id || `shop-${index}`)}
                            >
                                🛍️ {shop.title}
                            </button>
                        ))}
                    </div>
                </div>


                <button style={{
                    marginTop: "2vw",
                    padding: "0.5vw",
                    width: "80%",
                    backgroundColor: "#1DA35E",
                    color: "#fff",
                    border: "none",
                    borderRadius: "1vw"
                }} onClick={() => trackClick(userId, "cta", "cta-button")}>
                    Get Connected
                </button>
            </div>
        </div >
    );
};

export default Mobile;
