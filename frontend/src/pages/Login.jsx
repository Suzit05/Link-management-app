import React from 'react'
import sparklogo from "../assets/images/sparklogo.png"
import woman from "../assets/images/woman.png"

const Login = () => {
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
        padding: "10vw"
      }}>
        {/* Logo */}
        <div style={{ width: "fit-content", position: "absolute", marginLeft: "-60vw", marginBottom: "44vw" }}>
          <img src={sparklogo} alt="" />
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "2.5vw", fontWeight: "bold", marginBottom: "1vw", letterSpacing: "-3px" }}>Sign up to your Spark</h1>

        {/* Form */}
        <form style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1vw" }}>
          <input type="text" placeholder="Spark/Username" style={inputStyle} />

          <input type="password" placeholder="Password" style={inputStyle} />




          {/* Submit Button */}
          <button style={buttonStyle} disabled>Login</button>
        </form>

        {/* Footer */}
        <p style={{ fontSize: "0.8vw", marginTop: "2vw", color: "#777" }}>
          Dont have an account , <span style={{ color: "#28A263", borderBottom: "2px solid  #28A263" }}>Sign up</span>
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
  backgroundColor: "#E0E2D9",
  border: "1px solid #ccc",
  borderRadius: "5px"
};

// Button Style
const buttonStyle = {
  width: "100%",
  padding: "1vw",
  marginTop: "3vw",
  marginLeft: "1vw",
  fontSize: "1.2vw",
  backgroundColor: "#BDBDBD",
  color: "white",
  border: "none",
  borderRadius: "15px",

};



export default Login