import mongoose from "mongoose";

export const connectDb = async () =>{
 const conn = await mongoose.connect(process.env.MONGODB_URI)
 console.log("Connection to MongoDb Successful")
}