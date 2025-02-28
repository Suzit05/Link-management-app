import React from 'react'
import Sidebar from "../Components/Sidebar";
import Mobile from "../Components/Mobile";

const Settings = () => {
    return (
        <div style={{ display: "flex", height: "100%", backgroundColor: "#f3f3f1", width: "100vw" }}>
            <Sidebar></Sidebar>
            {/* Main Content */}
            <div style={{ flex: 1, padding: "2vw", }}>
                {/* Header */}
                <h2 style={{ fontSize: "1.8vw", marginBottom: "0.5vw" }}>Hi, Jenny Wilson!</h2>
                <p style={{ color: "gray", marginBottom: "2vw" }}>Congratulations. You got a great response today.</p>

                {/** */}
                <div style={{ backgroundColor: "#fff", padding: "2vw", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", maxWidth: "600px", margin: "auto" }}>
                    {/* Edit Profile Header */}
                    <h3 style={{ marginBottom: "1.5vw", fontSize: "1.2vw", color: "green", borderBottom: "2px solid green", display: "inline-block" }}>
                        Edit Profile
                    </h3>

                    {/* Form Fields */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5vw" }}>

                        {/* First Name */}
                        <div>
                            <label style={{ fontSize: "1vw", color: "#333", display: "block", marginBottom: "0.5vw" }}>First name</label>
                            <input type="text" value="Jenny" style={{
                                width: "100%",
                                height: "2.5vw",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "0.5vw",
                                fontSize: "1vw",
                                outline: "none"
                            }} />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label style={{ fontSize: "1vw", color: "#333", display: "block", marginBottom: "0.5vw" }}>Last name</label>
                            <input type="text" value="Wilson" style={{
                                width: "100%",
                                height: "2.5vw",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "0.5vw",
                                fontSize: "1vw",
                                outline: "none"
                            }} />
                        </div>

                        {/* Email */}
                        <div>
                            <label style={{ fontSize: "1vw", color: "#333", display: "block", marginBottom: "0.5vw" }}>Email</label>
                            <input type="email" value="JennyWilson08@gmail.com" style={{
                                width: "100%",
                                height: "2.5vw",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "0.5vw",
                                fontSize: "1vw",
                                outline: "none"
                            }} />
                        </div>

                        {/* Password */}
                        <div>
                            <label style={{ fontSize: "1vw", color: "#333", display: "block", marginBottom: "0.5vw" }}>Password</label>
                            <input type="password" value="************" style={{
                                width: "100%",
                                height: "2.5vw",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "0.5vw",
                                fontSize: "1vw",
                                outline: "none"
                            }} />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label style={{ fontSize: "1vw", color: "#333", display: "block", marginBottom: "0.5vw" }}>Confirm Password</label>
                            <input type="password" value="************" style={{
                                width: "100%",
                                height: "2.5vw",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "0.5vw",
                                fontSize: "1vw",
                                outline: "none"
                            }} />
                        </div>
                    </div>
                </div>


                <div style={{ display: "flex", padding: "1vw", alignItems: "center", justifyContent: "flex-end" }}>
                    {/* Save Button */}
                    <button style={{ marginTop: "2vw", padding: "0.4vw 2.2vw", width: "6vw", backgroundColor: "#1DA35E", color: "#fff", border: "none", borderRadius: "0.5vw" }}>Save</button>
                </div>


            </div>
        </div >
    )
}

export default Settings