import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized!"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Invalid token!"));
    req.user = user;
    next();
  });
};

export const isAdmin = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err); // Forward error to error handler if token verification fails

    if (req.user.isAdmin) {
      next(); // User is an admin, proceed to the next middleware
    } else {
      return res.status(403).json({ message: "Admin access required" });
    }
  });
};
