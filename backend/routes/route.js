import express from "express";
import {signupController, loginController, logoutController} from  "../controller/controller.js"

const authRoutes = express.Router()


authRoutes.post("/signup", signupController)

authRoutes.post("/login", loginController)

authRoutes.post("/logout", logoutController)

export default authRoutes;