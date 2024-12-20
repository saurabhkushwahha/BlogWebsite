import userModel from '../model/userModel.js'
import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

export const protectedRoute= async(req,res,next)=>{
 try {
   const token=req.cookies?.token
  if(!token) return res.status(401).json({messege:"Unauthorized: Token Not Provided!"})

    const decoded=jwt.verify(token,process.env.TOKEN)
    if(!decoded) return res.status(401).json({messege:"Unauthorized: Invalid Token!"})

      const user= await userModel.findById(decoded.userId).select("-password")
      if(!user) return res.status(404).json({message:"User Not Found!"})
      req.user=user
      next()

 } catch (err) {
   res.status(500).json({message:"Error in Middleware"})
 }

}

