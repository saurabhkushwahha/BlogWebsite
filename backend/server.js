import  express from 'express'
import dotenv from 'dotenv'
import { ConnectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import postRoutes from './routes/post.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import customError from './utils/customErrorHandler.js';

const app=express()

dotenv.config()

const PORT= process.env.PORT || 5000

app.use(express.json({limit:"30mb"}))
app.use(express.urlencoded({extended:true,limit:"30mb"}))

app.use(cookieParser())


app.use(cors({
   origin:'http://localhost:5173',
   credentials:true
}))

//api

app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/post',postRoutes)





// Catch all route handler for undefined routes
app.all('*',(req,res,next)=>{
    return next( new customError(404,`Path Not Found ${req.originalUrl} on Server`))
})







app.listen(PORT,async()=>{
   try {

   await ConnectDB()
   console.log(`http://localhost:${PORT}`)

   } catch (err) {
        console.log("Database connection Error:",err)
        process.exit(1)
   }
})
