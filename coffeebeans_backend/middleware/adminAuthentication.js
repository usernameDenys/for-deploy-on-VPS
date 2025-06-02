import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    // Get the Authorization header from the request
    const authHeader = req.headers.authorization;

    // Check if the header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized, login again" });
    }

    // Extract the token from the header
    const token = authHeader.split(" ")[1];

    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user has admin role and correct email
    if (decoded.role !== "admin" || decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ message: "Not authorized, login again" });
    }

    // If everything is valid, proceed to the next middleware or route
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
};

export default adminAuth;
