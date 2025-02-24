import React from 'react'
import sparklogo from "../assets/images/sparklogo.png"
import woman from "../assets/images/woman.png"

const Register = () => {
    return (
        <div style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#F5F5F5"
        }}>
            {/* Left Side - Form Section */}
            <div style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: "20vw"
            }}>
                {/* Logo */}
                <div style={{ width: "fit-content", marginLeft: "-60vw" }}>
                    <img src={sparklogo} alt="" />
                </div>

                {/* Heading */}
                <h1 style={{ fontSize: "2.5vw", fontWeight: "bold", marginBottom: "1vw", letterSpacing: "-3px" }}>Sign up to your Spark</h1>
                {/*subheading */}
                <p style={{ fontSize: "1.5vw", marginBottom: "2vw" }}>
                    Create an account
                    <span style={{ marginLeft: "15vw", fontSize: "2vh", color: "#28A263", cursor: "pointer", borderBottom: "2px solid #28A263" }}>
                        Sign in instead
                    </span>
                </p>

                {/* Form */}
                <form style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1vw" }}>
                    <input type="text" placeholder="First name" style={inputStyle} />
                    <input type="text" placeholder="Last name" style={inputStyle} />
                    <input type="email" placeholder="Email" style={inputStyle} />
                    <input type="password" placeholder="Password" style={inputStyle} />
                    <input type="password" placeholder="Confirm Password" style={inputStyle} />

                    {/* Terms Checkbox */}
                    <label style={{ fontSize: "1vw", display: "flex", alignItems: "center", gap: "0.5vw" }}>
                        <input type="checkbox" />
                        By creating an account, I agree to the <span style={{ color: "blue", cursor: "pointer" }}>Terms of Use</span> and <span style={{ color: "blue", cursor: "pointer" }}>Privacy Policy</span>
                    </label>

                    {/* Submit Button */}
                    <button style={buttonStyle} disabled>Create an account</button>
                </form>

                {/* Footer */}
                <p style={{ fontSize: "0.8vw", marginTop: "2vw", color: "#777" }}>
                    This site is protected by reCAPTCHA and the <span style={{ color: "blue", cursor: "pointer" }}>Google Privacy Policy</span> and <span style={{ color: "blue", cursor: "pointer" }}>Terms of Service</span> apply.
                </p>
            </div>

            {/* Right Side - Image Section */}
            <div style={{
                width: "40%",
                height: "100%"
            }}> {/* Image */}
                <img style={{ width: "100%", height: "100%" }} src={woman} alt="" />
            </div>
        </div >
    );
};

// Input Style
const inputStyle = {
    width: "100%",
    padding: "1vw",
    fontSize: "1vw",
    border: "1px solid #ccc",
    borderRadius: "5px"
};

// Button Style
const buttonStyle = {
    width: "100%",
    padding: "1vw",
    fontSize: "1.2vw",
    backgroundColor: "#BDBDBD",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed"
};


export default Register