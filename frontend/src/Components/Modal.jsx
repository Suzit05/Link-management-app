import React, { useEffect, useRef, useState } from "react";
import "../styles/modal.css";

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
        <div className="modal-overlay">
            <div ref={modalRef} className="modal-container">
                {/* Toggle buttons */}
                <div className="tab-container">
                    <button
                        className={`tab-button ${activeTab === "link" ? "active" : ""}`}
                        onClick={() => setActiveTab("link")}
                    >
                        Add Link
                    </button>
                    <button
                        className={`tab-button ${activeTab === "shop" ? "active" : ""}`}
                        onClick={() => setActiveTab("shop")}
                    >
                        Add Shop
                    </button>
                </div>

                {/* Content Section */}
                <div className="modal-content">
                    <p>Enter {activeTab === "link" ? "Link" : "Shop"} Details</p>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={`${activeTab} title`}
                        className="modal-input"
                    />
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder={`${activeTab} URL`}
                        className="modal-input"
                    />
                </div>

                {/* Footer with Save Button */}
                <div className="modal-footer">
                    <button
                        onClick={() => {
                            if (title && url) {
                                onSave({ title, url, type: activeTab });
                                setTitle("");
                                setUrl("");
                            }
                        }}
                        className="save-button"
                    >
                        Save
                    </button>
                    <i className="ri-delete-bin-line delete-icon"></i>
                </div>
            </div>
        </div>
    );
};

export default Modal;