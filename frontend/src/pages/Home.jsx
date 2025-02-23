import React from 'react'
import analytImage from '../assets/images/analyt.png';
import greenboxes from '../assets/images/greenboxes.png'
import faces from "../assets/images/faces.png"
import flower from "../assets/images/flower.png"

const Home = () => {
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
                backgroundColor: "purple"
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
                    border: "5px solid grey",
                    borderRadius: "20vw",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                    }}>
                        <svg width="100" height="25" viewBox="0 0 100 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_198_817)">
                                <path d="M19.3992 8.00433C19.2327 7.84251 18.9991 7.76898 18.7705 7.80657C18.5414 7.84402 18.3436 7.98782 18.2374 8.19417C17.8719 8.90408 17.4078 9.55648 16.8617 10.1332C16.9161 9.71658 16.9435 9.29749 16.9435 8.87728C16.9435 8.07098 16.8355 7.24124 16.6222 6.41082C15.9211 3.68323 14.0828 1.37654 11.5786 0.0822567C11.3606 -0.0303898 11.1008 -0.0264348 10.8863 0.0928035C10.6718 0.212091 10.5313 0.430792 10.5121 0.675421C10.3169 3.15413 9.04014 5.40921 7.00728 6.8639C6.98037 6.88328 6.95366 6.90291 6.92695 6.92244C6.87163 6.96292 6.81948 7.0012 6.77075 7.03333C6.76313 7.03841 6.75557 7.04358 6.74815 7.04891C5.46963 7.96429 4.4147 9.1845 3.69727 10.578C2.96826 11.9954 2.59863 13.5165 2.59863 15.0988C2.59863 15.9048 2.70669 16.7346 2.91982 17.5651C4.04458 21.9429 7.98423 25.0004 12.5003 25.0004C17.9599 25.0004 22.4015 20.5585 22.4015 15.0988C22.4015 12.4064 21.3353 9.88685 19.3992 8.00433Z" fill="#28A263" />
                                <ellipse cx="11.7649" cy="14.7048" rx="2.94118" ry="2.94118" fill="white" />
                            </g>
                            <path d="M95.4 6V4.78H95.022V4.51H96.082V4.78H95.71V6H95.4ZM96.2355 6V4.51H96.5355L97.0935 5.25H96.9535L97.4955 4.51H97.7955V6H97.4855V4.852L97.6095 4.88L97.0355 5.62H96.9955L96.4415 4.88L96.5455 4.852V6H96.2355Z" fill="black" />
                            <path d="M34.74 21.24C33.8067 21.24 32.9267 21.0733 32.1 20.74C31.2867 20.3933 30.58 19.9067 29.98 19.28C29.3933 18.6533 28.9533 17.9133 28.66 17.06L31.2 15.92C31.5733 16.7333 32.0867 17.3733 32.74 17.84C33.4067 18.3067 34.14 18.54 34.94 18.54C35.3667 18.54 35.7333 18.4733 36.04 18.34C36.3467 18.2067 36.5867 18.0267 36.76 17.8C36.9333 17.56 37.02 17.28 37.02 16.96C37.02 16.6133 36.9133 16.32 36.7 16.08C36.4867 15.8267 36.1533 15.6267 35.7 15.48L32.78 14.52C31.5933 14.1333 30.7 13.5867 30.1 12.88C29.5 12.16 29.2 11.3 29.2 10.3C29.2 9.42 29.4133 8.64667 29.84 7.98C30.28 7.31333 30.8867 6.79333 31.66 6.42C32.4467 6.04667 33.3467 5.86 34.36 5.86C35.2533 5.86 36.08 6.01333 36.84 6.32C37.6 6.62667 38.2533 7.06 38.8 7.62C39.36 8.18 39.78 8.85333 40.06 9.64L37.54 10.78C37.26 10.0867 36.84 9.54667 36.28 9.16C35.72 8.76 35.08 8.56 34.36 8.56C33.9467 8.56 33.58 8.62667 33.26 8.76C32.94 8.89333 32.6933 9.08667 32.52 9.34C32.3467 9.58 32.26 9.86 32.26 10.18C32.26 10.5267 32.3733 10.8333 32.6 11.1C32.8267 11.3533 33.1667 11.5533 33.62 11.7L36.48 12.62C37.68 13.0067 38.5733 13.5467 39.16 14.24C39.76 14.9333 40.06 15.78 40.06 16.78C40.06 17.6467 39.8333 18.42 39.38 19.1C38.9267 19.7667 38.3 20.2933 37.5 20.68C36.7133 21.0533 35.7933 21.24 34.74 21.24ZM42.2692 21V6.1H47.9892C49.0159 6.1 49.9226 6.28 50.7092 6.64C51.5092 7 52.1359 7.53333 52.5892 8.24C53.0426 8.94667 53.2692 9.82 53.2692 10.86C53.2692 11.8733 53.0359 12.7333 52.5692 13.44C52.1159 14.1467 51.4892 14.6867 50.6892 15.06C49.9026 15.42 49.0026 15.6 47.9892 15.6H45.3692V21H42.2692ZM45.3692 12.9H48.0092C48.4492 12.9 48.8292 12.8133 49.1492 12.64C49.4692 12.4667 49.7159 12.2267 49.8892 11.92C50.0759 11.6133 50.1692 11.26 50.1692 10.86C50.1692 10.4467 50.0759 10.0867 49.8892 9.78C49.7159 9.47333 49.4692 9.23333 49.1492 9.06C48.8292 8.88667 48.4492 8.8 48.0092 8.8H45.3692V12.9ZM52.9661 21L58.0061 6.1H62.1261L67.1661 21H63.7861L62.7861 17.96H57.3261L56.3261 21H52.9661ZM58.1861 15.26H61.9261L59.6461 8.22H60.4861L58.1861 15.26ZM68.7145 21V6.1H74.4145C75.4412 6.1 76.3479 6.28 77.1345 6.64C77.9345 7 78.5612 7.53333 79.0145 8.24C79.4679 8.94667 79.6945 9.82 79.6945 10.86C79.6945 11.8733 79.4612 12.74 78.9945 13.46C78.5279 14.1667 77.9012 14.7 77.1145 15.06L80.5145 21H77.0345L73.3545 14.42L75.3545 15.6H71.8145V21H68.7145ZM71.8145 12.9H74.4345C74.8745 12.9 75.2545 12.8133 75.5745 12.64C75.8945 12.4667 76.1412 12.2267 76.3145 11.92C76.5012 11.6133 76.5945 11.26 76.5945 10.86C76.5945 10.4467 76.5012 10.0867 76.3145 9.78C76.1412 9.47333 75.8945 9.23333 75.5745 9.06C75.2545 8.88667 74.8745 8.8 74.4345 8.8H71.8145V12.9ZM82.0544 21V6.1H85.1544V13.56L84.2944 13.26L90.2544 6.1H94.1344L88.2344 13.22L88.4144 11.02L94.2544 21H90.6344L86.9944 14.7L85.1544 16.92V21H82.0544Z" fill="black" />
                            <defs>
                                <clipPath id="clip0_198_817">
                                    <rect width="25" height="25" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <h3 style={{ fontWeight: 500 }}>| Marketplace</h3> </div>

                    <button style={{ padding: "1px 20px", border: "2px solid", borderRadius: "50px", backgroundColor: "#28A263" }}><h3 style={{ fontWeight: 500 }}>Sign up free</h3></button>
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
                        backgroundColor: "yellow",


                    }}>
                        <h1 style={{ color: "black" }}>The easiest place to <br />
                            update and share your  <br />
                            Connection</h1>
                        <h4 style={{ color: "black", fontWeight: "500" }}>Help your followers discover everything you are sharing <br />
                            all over the internet, in one simple place. They"ll thank <br />
                            your for it!</h4>
                        <h4 style={{ padding: "2vh 1vw", border: "1px solid", width: "fit-content", fontWeight: "300", borderRadius: "50px", backgroundColor: "#28A263" }}>Get your free spark</h4>
                    </div>
                    <div style={{
                        width: "40vw",
                        height: "60vh",
                        backgroundColor: "yellow"
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
                        backgroundColor: "yellow",
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
                        backgroundColor: "yellow",
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
                        backgroundColor: "yellow",
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
                    backgroundColor: "lavender",
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
                    marginTop: "15vh",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "red",
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <h1 style={{ justifySelf: "flex-start" }}>All Link Apps and Integrations</h1>
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

                </div>
            </div>


        </div>
    )
}

export default Home