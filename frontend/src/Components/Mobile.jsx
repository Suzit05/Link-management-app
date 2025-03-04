import React from 'react';
import { useProfile } from "../Context/ProfileContext";
import { useAppearance } from '../Context/AppearanceContext';
import { useAnalytics } from '../Context/AnalyticsContext';
import "../styles/Mobile.css";

const Mobile = () => {
    const { profile } = useProfile();
    const userId = profile?._id || profile?.userId; // Adjust this based on how user data is stored
    const { profileImage, bannerColor, profileTitle, links = [], Shop = [] } = profile;
    const { linkCount, shopCount, setlinkCount, setShopCount, totalCount, ctaCount, setctaCount } = useAnalytics(); // Use analytics
    const { appearance, buttonColor, buttonFontColor, themeBackgroundColor } = useAppearance();
    const { layout } = appearance;

    console.log("Current layout type:", layout.type);
    console.log("Current theme background color:", themeBackgroundColor);

    const layoutType = layout.type;

    const linkCounter = () => {
        setlinkCount(prevCount => prevCount + 1); // Use functional update
        console.log(linkCount);
        console.log(`totalcount:${totalCount}`);
    };

    const shopCounter = () => {
        setShopCount(prevCount => prevCount + 1); // Use functional update
        console.log(shopCount);
    };

    const ctaCounter = () => {
        setctaCount(prevCount => prevCount + 1);
    };

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
        <div className="mobile-container">
            <div className="mobile-inner" style={{ backgroundColor: themeBackgroundColor }}>
                {/* Mobile Banner */}
                <div className="mobile-banner" style={{ backgroundColor: bannerColor || "#342B26" }}>
                    <div className="dp" style={{ backgroundImage: profileImage ? `url(${profileImage})` : "none" }}></div>
                    <h3 className="profile-title">{profileTitle || "profile"}</h3>
                </div>

                {/* Link and Shop Buttons */}
                <div className="tab-buttons">
                    <button className="tab-button active">Link</button>
                    <button className="tab-button inactive">Shop</button>
                </div>

                {/* Links and Shop Items */}
                <div className="links-container">
                    <div className={`layout-style ${layoutType}`}>
                        {links.map((link, index) => (
                            <button
                                key={index}
                                className={`link-button ${layoutType}`}
                                style={{ backgroundColor: buttonColor, color: buttonFontColor }}
                                onClick={linkCounter}
                            >
                                📺 {link.title}
                            </button>
                        ))}
                    </div>
                    <div className={`layout-style ${layoutType}`}>
                        {Shop.map((shop, index) => (
                            <button
                                key={index}
                                className={`link-button ${layoutType}`}
                                style={{ backgroundColor: buttonColor, color: buttonFontColor }}
                                onClick={shopCounter}
                            >
                                🛍️ {shop.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <button className="cta-button" onClick={ctaCounter}>
                    Get Connected
                </button>
            </div>
        </div>
    );
};

export default Mobile;