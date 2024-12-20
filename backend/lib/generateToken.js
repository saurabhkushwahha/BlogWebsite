import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

export const  generateToken= (userId)=>{
   return  jwt.sign({userId},process.env.TOKEN,{expiresIn:'15m'})
}