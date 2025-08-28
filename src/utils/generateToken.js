import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (userId, response) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  response.cookie("jwt", token, {
    httpOnly: true, // prevent client-side JavaScript from accessing the cookie, also helps mitigate XSS attacks
    sameSite: "none", // helps prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    secure: process.env.NODE_ENV === "production", // set to true if using HTTPS
  });
  return token;
};