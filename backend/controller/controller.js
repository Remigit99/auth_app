import mongoose from "mongoose";
import {User} from "../models/userModel.js"
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookie } from "../utlis/generateTokenAndSetCookie.js";

export const signupController = async (req, res) => {
  //Destructure the req body
  const { name, email, password } = req.body;

  console.log("Request body:", req.body);
  try {
    // Check if user details exists
    if (!name || !email || !password) {
      throw new Error("All User Info must be added");
    }
    

    //Check if user exists
    const userExists = await User.findOne({email})
    if (userExists) {
        console.log("User already exists with this email:", email); 
     return res.status(400).json({success: false, message: "User Already Exists"});
    }


    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10)

    //Generate verification token
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()
    // console.log(verificationToken)


    //Create new User 
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        verificationToken,
        verificationTokenExpiresAt:  Date.now() + 24 * 60 * 60 * 1000
    })

   const savedUser = await newUser.save()
   console.log("User Saved Successfully: ", savedUser)

    //JWT
    generateTokenAndSetCookie(res, savedUser._id)

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user:{
            ...savedUser._doc,
            password: undefined
        }

    })

  } catch (error) {
    res.status(400).json({success: false, message: "User Already Exists"});
    
  }
};





export const loginController = async (req, res) => {
  res.send("This is the Login Page");
};
export const logoutController = async (req, res) => {
  res.send("This is the Logout Page");
};
