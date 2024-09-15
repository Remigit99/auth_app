import express from "express";
import {signupController, loginController, logoutController} from  "../controller/controller.js"

const authRoutes = express.Router()


authRoutes.get("/signup", signupController)

authRoutes.get("/login", loginController)

authRoutes.get("/logout", logoutController)

export default authRoutes;