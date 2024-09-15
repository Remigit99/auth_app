import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    isVerified:{
        type: Boolean,

    },
    verificationToken: String,
    verificationTokenExpireAt: new Date.now
}, {timestamps: true})

