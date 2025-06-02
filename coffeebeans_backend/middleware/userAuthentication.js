import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  // Get the Authorization header from the request
  const authHeader = req.headers.authorization;
  // Check if the header exists and starts with 'Bearer '
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, login again" });
  }
  // Extract the token from the header
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //decoded user ID from the JWT token
    req.user = { id: decoded.userId };

    // If everything is valid, proceed to the next middleware or route
    next();
  } catch (error) {
    const message =
      error.name === "TokenExpiredError"
        ? "Session expired, please login again"
        : "Not authorized";
    res.status(401).json({ success: false, message });
  }
};
