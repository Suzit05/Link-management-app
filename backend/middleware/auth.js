const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from header
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        console.log("Token received:", token); // Log the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify token
        console.log("Decoded token:", decoded); // Log the decoded token
        req.user = decoded; // Attach user data to the request
        next();
    } catch (err) {
        console.error("Token verification error:", err); // Log the error
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;