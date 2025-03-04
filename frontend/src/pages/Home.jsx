import React from 'react'
import analytImage from '../assets/images/analyt.png';
import greenboxes from '../assets/images/greenboxes.png'
import faces from "../assets/images/faces.png"
import flower from "../assets/images/flower.png"
import sparklogo from "../assets/images/sparklogo.png"
import {  useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const handleSignup = () => {
        navigate("/register") //see the path , not the name of the pages
    }
    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <div style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                backgroundColor: "#fafafa"
            }} >
                <div style={{
                    width: "full",
                    margin: "2vh",
                    height: "10vh",
                    paddingLeft: "2VW",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "black",
                    backgroundColor: "white",
                    border: "2px solid grey",
                    borderRadius: "20vw",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                    }}>
                        <img src={sparklogo} alt="" />
                        <h3 style={{ fontWeight: 500 }}>| Marketplace</h3> </div>

                    <button onClick={handleSignup} style={{ padding: "1px 20px", cursor: "pointer", marginRight: "0.7vw", border: "2px", borderRadius: "50px", backgroundColor: "#28A263" }}><h3 style={{ fontWeight: 500 }}>Sign up free</h3></button>
                </div>
                <div style={{
                    display: "flex",
                    gap: "2vw",
                    padding: "2vw",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div style={{
                        width: "40vw",
                        height: "60vh",



                    }}>
                        <h1 style={{ color: "black" }}>The easiest place to <br />
                            update and share your  <br />
                            Connection</h1>
                        <h4 style={{ color: "black", fontWeight: "500" }}>Help your followers discover everything you are sharing <br />
                            all over the internet, in one simple place. They"ll thank <br />
                            your for it!</h4>
                        <h4 onClick={handleSignup} style={{ padding: "2vh 1vw", cursor: "pointer", border: "1px solid", width: "fit-content", fontWeight: "300", borderRadius: "50px", backgroundColor: "#28A263" }}>Get your free spark</h4>
                    </div>
                    <div style={{
                        width: "40vw",
                        height: "60vh",

                    }}>
                        <img style={{ width: "100%", height: "100%" }} src={analytImage} alt="analytics" />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    gap: 0,
                    padding: "2vw",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div style={{
                        width: "40vw",
                        height: "60vh",

                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "12vw"


                    }}>
                        <img src={greenboxes} alt="greenboxes" />
                        <h4 style={{ marginLeft: "12vw", color: "black", fontWeight: "500" }}>Sell products and create payments. it's <br />
                            monetization made simple.</h4>
                    </div>
                    <div style={{
                        width: "35vw",
                        height: "60vh",

                        marginLeft: "15vw"
                    }}>
                        <h2 style={{ color: "black", }}>Analyze your audience <br />
                            and keep your followers <br />
                            engaged</h2>

                        <h4 style={{ color: "black", fontWeight: "500" }}>Track your engagement over time, monitor revenue and learn <br />
                            what's converting your audience. Make informed updates on the fly <br />
                            to keep them coming back</h4>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    gap: 0,
                    padding: "2vw",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div style={{
                        width: "45vw",
                        height: "50vh",

                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "12vw"
                    }}>
                        <h1>Share limitless content <br />
                            in limitless ways</h1>
                        <h4 style={{ fontWeight: "300" }}>Connect your content in all its forms and help followers find more of  what they’re looking for. Your TikToks, Tweets, YouTube videos,music, articles, recipes, podcasts and more… It all comes together in one powerful place</h4>
                    </div>
                    <div style={{
                        width: "40vw",
                        height: "50vh",
                        borderRadius: "2.5vw",
                        backgroundColor: "#C6C6C6",
                        marginLeft: "5vw",
                        paddingLeft: "5vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <img style={{
                            maxWidth: "100%",   // Ensures the image doesn't overflow
                            maxHeight: "100%",  // Maintains image proportions
                            objectFit: "contain",  // Ensures full visibility inside the div
                        }} src={faces} alt="" />
                        <h4 style={{ fontWeight: "300", color: "white", fontSize: "1.5vw" }}>Share your content in limitless ways <br /> on your spark</h4>
                    </div>
                </div>
                <div className='feedback' style={{

                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div style={{
                        width: "100vw",
                        height: "30vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{ padding: "2vw 8vw", display: "flex", flexDirection: "column" }}>
                            <h2 style={{ fontSize: "2vw", fontWeight: 500 }}>
                                Here's what our <span style={{ color: "#1DA35E" }}>customer</span> <br /> has to say
                            </h2>

                            <h4 style={{ color: "#1DA35E", border: "2px solid #1DA35E", borderRadius: "5vw", width: "fit-content", padding: "0.5vw 1vw" }}>Read customer stories</h4></div>
                        <div style={{ padding: "2vw 8vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "2px" }}>
                            <img style={{ height: "2vw", justifySelf: "center" }} src={flower} alt="" /><h4 style={{ fontSize: "2vh", fontWeight: 400 }}>[short description goes in here] lorem <br /> ipsum is a placeholder text to <br /> demonstrate.</h4></div>
                    </div>
                    <div
                        className="innerfeedback"
                        style={{
                            width: "100vw",
                            height: "70vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "2vh", // Adds spacing between rows
                        }}
                    >
                        {/* First Row */}
                        <div
                            style={{
                                width: "70vw",
                                height: "35vh",
                                marginTop: "8vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1vw", // Adds spacing between columns
                            }}
                        >
                            <div style={{ width: "40vw", height: "30vh", padding: "2.5vh ", borderRadius: "3vw", backgroundColor: "#DEDEDE", display: "flex", flexDirection: 'column' }}>
                                <h2 style={{ fontWeight: "400", fontSize: "3.5vh" }}>Amazing tool! Saved me months</h2>
                                <h4 style={{ fontWeight: "600", fontSize: "2vh" }}>This is a placeholder for your testimonials and what your client has to  say, put them here and make sure its 100% true and meaningful</h4>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}> <h4 style={{ backgroundColor: "#1DA35E", borderRadius: "50%", width: "2vw", height: "2vw" }}></h4> <div style={{ display: "flex", flexDirection: "column", height: "fit-content" }}><h4 style={{ marginBottom: "0", fontSize: "2vh", fontWeight: 500 }}>John master</h4><h5 style={{ marginTop: "0", fontSize: "2vh", fontWeight: 500 }}>Director, Spark.com</h5></div> </div>
                            </div>
                            <div style={{ width: "40vw", height: "30vh", padding: "2.5vh ", borderRadius: "3vw", backgroundColor: "white", display: "flex", flexDirection: 'column' }}>
                                <h2 style={{ fontWeight: "400", fontSize: "3.5vh" }}>Amazing tool! Saved me months</h2>
                                <h4 style={{ fontWeight: "600", fontSize: "2vh" }}>This is a placeholder for your testimonials and what your client has to  say, put them here and make sure its 100% true and meaningful</h4>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}> <h4 style={{ backgroundColor: "#1DA35E", borderRadius: "50%", width: "2vw", height: "2vw" }}></h4> <div style={{ display: "flex", flexDirection: "column", height: "fit-content" }}><h4 style={{ marginBottom: "0", fontSize: "2vh", fontWeight: 500 }}>John master</h4><h5 style={{ marginTop: "0", fontSize: "2vh", fontWeight: 500 }}>Director, Spark.com</h5></div> </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div
                            style={{
                                width: "70vw",
                                height: "35vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1vw",
                            }}
                        >
                            <div style={{ width: "40vw", height: "30vh", padding: "2.5vh ", borderRadius: "3vw", backgroundColor: "white", display: "flex", flexDirection: 'column' }}>
                                <h2 style={{ fontWeight: "400", fontSize: "3.5vh" }}>Amazing tool! Saved me months</h2>
                                <h4 style={{ fontWeight: "600", fontSize: "2vh" }}>This is a placeholder for your testimonials and what your client has to  say, put them here and make sure its 100% true and meaningful</h4>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}> <h4 style={{ backgroundColor: "#1DA35E", borderRadius: "50%", width: "2vw", height: "2vw" }}></h4> <div style={{ display: "flex", flexDirection: "column", height: "fit-content" }}><h4 style={{ marginBottom: "0", fontSize: "2vh", fontWeight: 500 }}>John master</h4><h5 style={{ marginTop: "0", fontSize: "2vh", fontWeight: 500 }}>Director, Spark.com</h5></div> </div>
                            </div>
                            <div style={{ width: "40vw", height: "30vh", padding: "2.5vh ", borderRadius: "3vw", backgroundColor: "#DEDEDE", display: "flex", flexDirection: 'column' }}>
                                <h2 style={{ fontWeight: "400", fontSize: "3.5vh" }}>Amazing tool! Saved me months</h2>
                                <h4 style={{ fontWeight: "600", fontSize: "2vh" }}>This is a placeholder for your testimonials and what your client has to  say, put them here and make sure its 100% true and meaningful</h4>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}> <h4 style={{ backgroundColor: "#1DA35E", borderRadius: "50%", width: "2vw", height: "2vw" }}></h4> <div style={{ display: "flex", flexDirection: "column", height: "fit-content" }}><h4 style={{ marginBottom: "0", fontSize: "2vh", fontWeight: 500 }}>John master</h4><h5 style={{ marginTop: "0", fontSize: "2vh", fontWeight: 500 }}>Director, Spark.com</h5></div> </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='footer' style={{
                    marginTop: "25vh",
                    width: "100vw",
                    height: "100vh",

                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <h1 style={{ alignSelf: "flex-start", marginLeft: "4vw" }}>All Link Apps and Integrations</h1>
                    <div style={{
                        width: "80vw",
                        margin: "auto",
                        padding: "2vw",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "2vw",
                        backgroundColor: "white"
                    }}>
                        {[
                            { icon: "🎵", title: "Audiomack", desc: "Add an Audiomack player to your Linktree" },
                            { icon: "🎫", title: "Bandsintown", desc: "Drive ticket sales by listing your events" },
                            { icon: "🔥", title: "Bonfire", desc: "Display and sell your custom merch" },
                            { icon: "📚", title: "Books", desc: "Promote books on your Linktree" },
                            { icon: "🎁", title: "Buy Me A Gift", desc: "Let visitors support you with a small gift" },
                            { icon: "🎭", title: "Cameo", desc: "Make impossible fan connections possible" },
                            { icon: "🎙️", title: "Clubhouse", desc: "Let your community in on the conversation" },
                            { icon: "📱", title: "Community", desc: "Build an SMS subscriber list" },
                            { icon: "📇", title: "Contact Details", desc: "Easily share downloadable contact details" }
                        ].map((item, index) => (
                            <div key={index} style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1vw",
                                backgroundColor: "#F9F9F9",
                                padding: "1vw",
                                borderRadius: "5px"
                            }}>
                                <div style={{
                                    width: "3vw",
                                    height: "3vw",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "1.5vw",
                                    borderRadius: "5px",
                                    backgroundColor: "#EDEDED"
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 style={{ margin: "0", fontSize: "1.2vw", fontWeight: "500" }}>{item.title}</h4>
                                    <p style={{ margin: "0", fontSize: "1vw", color: "#666" }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{
                        width: "100%",
                        background: "white",
                        marginTop: "5vh",
                        padding: "3vw 5vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)"
                    }}>
                        <div className='upperFooter' style={{
                            display: "flex",
                            gap: "2vw",
                            justifyContent: "space-evenly",
                            alignItems: "center"
                        }}>
                            {/* Buttons Section */}
                            <div onClick={handleLogin} style={{ display: "flex", gap: "1vw", marginBottom: "2vw" }}>
                                <button style={{
                                    width: "8vw",
                                    padding: "2vh"
                                }}>Log in</button>
                                <button onClick={handleSignup} style={{
                                    width: "8vw",
                                    background: "#1DA35E",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "15px",
                                    fontSize: "1vw",
                                    cursor: "pointer"
                                }}>Sign up free</button>
                            </div>

                            {/* Links Section */}
                            <div style={{
                                width: "100%",
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                textAlign: "left",
                                gap: "6vw",
                                paddingBottom: "2vw",
                                borderBottom: "1px solid #ccc"
                            }}>
                                <div>
                                    <h4>About Spark</h4>
                                    <p>Blog</p>
                                    <p>Press</p>
                                    <p>Social Good</p>
                                    <p>Contact</p>
                                </div>
                                <div>
                                    <h4>Careers</h4>
                                    <p>Getting Started</p>
                                    <p>Features and How-Tos</p>
                                    <p>FAQs</p>
                                    <p>Report a Violation</p>
                                </div>
                                <div>
                                    <h4>Terms and Conditions</h4>
                                    <p>Privacy Policy</p>
                                    <p>Cookie Notice</p>
                                    <p>Trust Center</p>
                                </div>
                            </div>
                        </div>


                        <div style={{
                            display: "flex",
                            justifyContent: 'space-between',
                            alignItems: "center",

                        }}>
                            {/* Acknowledgement Text */}
                            <p style={{
                                fontSize: "0.9vw",
                                fontWeight: "700",
                                color: "#333",
                                textAlign: "center",
                                marginTop: "2vw",
                                maxWidth: "70%"
                            }}>
                                We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present, and emerging.
                            </p>

                            {/* Social Media Icons */}
                            <div style={{ display: "flex", gap: "1.5vw", marginTop: "1.5vw" }}>
                                <i class="ri-twitter-fill"></i>
                                <i class="ri-instagram-fill"></i>
                                <i class="ri-youtube-fill"></i>
                                <i class="ri-tiktok-fill"></i>

                            </div>
                        </div>


                    </div>


                </div>
            </div>


        </div>
    )
}

export default Home