import React, { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, onClose, activeTab, setActiveTab, onSave }) => {
    const modalRef = useRef(null);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    // Close modal if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div ref={modalRef} style={styles.modal}>
                {/* Toggle buttons */}
                <div style={styles.tabContainer}>
                    <button style={activeTab === "link" ? styles.activeTab : styles.tab} onClick={() => setActiveTab("link")}>
                        Add Link
                    </button>
                    <button style={activeTab === "shop" ? styles.activeTab : styles.tab} onClick={() => setActiveTab("shop")}>
                        Add Shop
                    </button>
                </div>

                {/* Content Section */}
                <div style={styles.content}>
                    <p>Enter {activeTab === "link" ? "Link" : "Shop"} Details</p>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={`${activeTab} title`} style={styles.input} />
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder={`${activeTab} URL`} style={styles.input} />
                </div>

                {/* Footer with Save Button */}
                <div style={styles.footer}>
                    <button
                        onClick={() => {
                            if (title && url) {
                                onSave({ title, url, type: activeTab });
                                setTitle("");
                                setUrl("");
                            }
                        }}
                        style={styles.saveButton}
                    >
                        Save
                    </button>
                    <i className="ri-delete-bin-line" style={{ marginLeft: "1vw", cursor: "pointer" }}></i>
                </div>
            </div>
        </div>
    );
};

// Styles
const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modal: {
        backgroundColor: "white",
        padding: "2vw",
        borderRadius: "1vw",
        width: "30vw",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    },
    tabContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1vw",
    },
    tab: {
        flex: 1,
        padding: "0.8vw",
        border: "none",
        backgroundColor: "#ddd",
        borderRadius: "0.5vw",
        cursor: "pointer",
    },
    activeTab: {
        flex: 1,
        padding: "0.8vw",
        backgroundColor: "#1DA35E",
        color: "white",
        borderRadius: "0.5vw",
        cursor: "pointer",
    },
    content: {
        marginBottom: "1vw",
    },
    input: {
        width: "100%",
        padding: "0.8vw",
        border: "1px solid #ddd",
        borderRadius: "0.5vw",
        marginBottom: "1vw",
    },
    footer: {
        display: "flex",
        justifyContent: "flex-end",
    },
    saveButton: {
        backgroundColor: "#1DA35E",
        color: "white",
        padding: "0.8vw 1.5vw",
        border: "none",
        borderRadius: "0.5vw",
        cursor: "pointer",
    },
};

export default Modal;
