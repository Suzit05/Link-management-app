import React, { useRef } from 'react';
import { useProfile } from "../Context/ProfileContext";
import { useAppearance } from '../Context/AppearanceContext';
import { useAnalytics } from '../Context/AnalyticsContext';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/Mobile.css";

const Mobile = () => {
    const { profile } = useProfile();
    const { profileImage, bannerColor, profileTitle, links = [], Shop = [] } = profile;
    const { setlinkCount, setShopCount, setctaCount } = useAnalytics();
    const { appearance, buttonColor, buttonFontColor, themeBackgroundColor } = useAppearance();
    const { layout } = appearance;

    const layoutType = layout.type;
    const mobileRef = useRef(null);

    const linkCounter = () => setlinkCount(prev => prev + 1);
    const shopCounter = () => setShopCount(prev => prev + 1);
    const ctaCounter = () => setctaCount(prev => prev + 1);

    // Normalize URL
    const normalizeUrl = (url) => {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return `https://${url}`;
        }
        return url;
    };

    // 🔹 SHARE AS SINGLE-PAGE BEAUTIFUL PDF
    const handleShareAsPDF = async () => {
        const element = mobileRef.current;

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        /* ---------- TITLE ---------- */
        let y = 15;
        pdf.setFontSize(18);
        pdf.text(profileTitle || "Profile", pageWidth / 2, y, { align: "center" });

        /* ---------- MOBILE IMAGE ---------- */
        const imageScale = 0.40; // smaller to leave space for links
        const imgWidth = pageWidth * imageScale;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const x = (pageWidth - imgWidth) / 2;
        y += 8;

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
        y += imgHeight + 10; // move below image

        /* ---------- LINKS ---------- */
        pdf.setFontSize(14);
        pdf.text("click on the Links:", 10, y);
        y += 6;
        pdf.setFontSize(12);

        links.forEach(link => {
            if (link.title && link.url) {
                const text = `• ${link.title}`;
                const url = normalizeUrl(link.url);

                pdf.text(text, 12, y);
                pdf.link(12, y - 5, pdf.getTextDimensions(text).w, 6, { url });

                y += 6;
            }
        });

        /* ---------- SHOP ---------- */
        if (Shop.length) {
            y += 8;
            pdf.setFontSize(14);
            pdf.text("Shop", 10, y);
            y += 6;
            pdf.setFontSize(12);

            Shop.forEach(item => {
                if (item.title && item.url) {
                    const text = `• ${item.title}`;
                    const url = normalizeUrl(item.url);

                    pdf.text(text, 12, y);
                    pdf.link(12, y - 5, pdf.getTextDimensions(text).w, 6, { url });

                    y += 6;
                }
            });
        }

        pdf.save("profile-share.pdf");
    };

    return (
        <div className="mobile-container">
            <div
                className="mobile-inner"
                style={{ backgroundColor: themeBackgroundColor }}
                ref={mobileRef}
            >
                {/* Banner */}
                <div className="mobile-banner" style={{ backgroundColor: bannerColor || "#342B26" }}>
                    <div
                        className="dp"
                        style={{ backgroundImage: profileImage ? `url(${profileImage})` : "none" }}
                    />
                    <h3 className="profile-title">{profileTitle || "profile"}</h3>
                </div>

                {/* Tabs */}
                <div className="tab-buttons">
                    <button className="tab-button active">Link</button>
                    <button className="tab-button inactive">Shop</button>
                </div>

                {/* Content */}
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

                {/* CTA */}
                <button className="cta-button" onClick={ctaCounter}>
                    Get Connected
                </button>

                {/* SHARE */}
                <button
                    className="cta-button"
                    style={{ marginTop: "1vw" }}
                    onClick={handleShareAsPDF}
                >
                    Share
                </button>
            </div>
        </div>
    );
};

export default Mobile;
