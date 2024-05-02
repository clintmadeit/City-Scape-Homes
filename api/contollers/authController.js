import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { deleteUser } from "./userController.js";

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

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  if (!validateEmail(email)) {
    return next(errorHandler(400, "Invalid email format!"));
  }

  // check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(errorHandler(400, "User already exists!"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 12);
  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
    emailConfirmed: false,
  });

  try {
    await newUser.save();

    // Send email confirmation
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30m", // Token expires in 30 minutes
    });
    const confirmationLink = `${req.protocol}://${req.get(
      "host"
    )}/confirm-email/${token}`;

    await transporter.sendMail({
      from: `"Cityscape Homes" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Email Confirmation",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
      <h2 style="color: #0e2f4f;">Welcome to Cityscape Homes, ${userName}!</h2>
      <p>We're excited to have you on board. To get started, please confirm your email address.</p>
      <div style="margin: 20px 0;">
        <a href="${confirmationLink}" style="background-color: #f49d19; color: #fff; font-weight: bold; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Click here to confirm</a>
      </div>
      <p>This link is valid for up to 30 minutes before expiry. If you don't confirm now, you may be required to sign up again.</p>
      <p>Thank you,<br/>The Cityscape Homes Team</p>
    </div>
      `,
    });

    res.status(201).json("Confirmation link sent to your email!");
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

    // Update email confirmation status
    user.emailConfirmed = true;
    await user.save();

    // Redirect user to email confirmation page
    res.redirect(`/confirm-email/${token}`);
  } catch (error) {
    // handle invalid or expired token
    if (error instanceof jwt.TokenExpiredError) {
      const decodedToken = jwt.decode(token);
      const userId = decodedToken.userId;
      await deleteUser(userId);
      return next(errorHandler(400, "Expired token! Please sign up again."));
    } else if (error instanceof jwt.JsonWebTokenError) {
      return next(errorHandler(400, "Invalid token!"));
    }
    next(error);
    console.log(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { identifier, password } = req.body;

    //check if identifier is email or username
    const isEmail = validateEmail(identifier);
    let validUser;

    if (isEmail) {
      validUser = await User.findOne({ email: identifier });
    } else {
      validUser = await User.findOne({ userName: identifier });
    }

    if (!validUser) {
      return next(errorHandler(404, "Invalid credentials!"));
    }

    //check if email is confirmed
    if (!validUser.emailConfirmed) {
      return next(
        errorHandler(
          403,
          "Email not confirmed! Check your inbox for the confirmation link."
        )
      );
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid credentials!"));
    }
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
  const { email } = req.body;

  if (!validateEmail(email)) {
    return next(errorHandler(400, "Invalid email format!"));
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      // Ensure emailConfirmed is set to true
      user.emailConfirmed = true;
      await user.save();
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
        emailConfirmed: true, // Set emailConfirmed to true for new users
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

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ status: "User not found!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    user.resetPasswordToken = token;
    const expiryTime = Date.now() + 30 * 60 * 1000; // Token expires in 30 minutes
    user.resetPasswordExpires = expiryTime;
    await user.save();

    const expiryDate = new Date(expiryTime).toLocaleString(); // Convert to local date and time

    // Send the reset link to the user's email...
    const resetLink = `${req.protocol}://${req.get("host")}/reset-password/${
      user._id
    }/${token}`;

    transporter.sendMail({
      to: user.email,
      subject: "Password Reset",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
      <h2 style="color: #0e2f4f;">Hello, ${user.userName}!</h2>
      <p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
      <div style="margin: 20px 0;">
        <a href="${resetLink}" style="background-color: #f49d19; color: #fff; font-weight: bold; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Click here to reset password</a>
      </div>
      <p>This link is valid until ${expiryDate}. If you did not request this, please ignore this email and your password will remain unchanged.</p>
      <p>Thank you,<br/>The Cityscape Homes Team</p>
    </div>
    `,
    });

    res.status(200).send({ status: "Reset link sent!" });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  const { id, token } = req.params;
  const { password } = req.body;

  // Check if id, token, and password are provided
  if (!id || !token || !password) {
    return next(errorHandler(400, "Missing required parameters!"));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    const hash = bcryptjs.hashSync(password, 12);
    const user = await User.findByIdAndUpdate(id, { password: hash });

    if (!user) {
      throw new Error("User not found");
    }

    return res.send({ Status: "Success" });
  } catch (err) {
    next(err);
  }
};
