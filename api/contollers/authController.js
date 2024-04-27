import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 12);
  const newUser = new User({ userName, email, password: hashedPassword });
  try {
    await newUser.save();

    // Send email confirmation
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d", // Token expires in 1 day
    });
    const confirmationLink = `${req.protocol}://${req.get(
      "host"
    )}/api/confirm-email/${token}`;

    await transporter.sendMail({
      from: `"Cityscape Homes" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Email Confirmation",
      html: `
        <p>Please confirm your email address by clicking the link below:</p>
        <p><a href="${confirmationLink}">${confirmationLink}</a></p>
      `,
    });

    res
      .status(201)
      .json("Confirmation link sent to your email! Please confrim to sign in.");
  } catch (error) {
    next(error);
  }
};

export const confirmEmail = async (req, res, next) => {
  const token = req.params.token;

  try {
    // Verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    // Find user by userId and update email confirmation status
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, "User not found!"));
    }

    user.emailConfirmed = true;
    await user.save();

    // Redirect user to sign-in page
    res.redirect("/sign-in");
  } catch (error) {
    next(error);
  }
};

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (email && !validateEmail(email)) {
    return next(errorHandler(400, "Invalid email format!"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "Invalid credentials!"));

    // Check if email is confirmed
    if (!validUser.emailConfirmed) {
      return next(
        errorHandler(
          403,
          "Email not confirmed! Check your inbox for the confirmation link."
        )
      );
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid credentials!"));

    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 12);
      const newUser = new User({
        userName:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        photo: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been signed out!");
  } catch (error) {
    next(error);
  }
};
