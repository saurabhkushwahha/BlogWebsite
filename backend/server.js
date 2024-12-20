import  express from 'express'
import { configDotenv } from 'dotenv'
import { ConnectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import postRoutes from './routes/post.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app=express()

configDotenv();
const PORT= process.env.PORT || 5000

app.use(express.json({limit:"10mb"}))
app.use(cookieParser())

//middleware

app.use(cors({
   origin:'http://localhost:5173',
   credentials:true
}))

//api
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/post',postRoutes)




app.listen(PORT,async()=>{
   try {

   await ConnectDB()
   console.log(`http://localhost:${PORT}`)

   } catch (err) {
        console.log("Database connection Error:",err)
        process.exit(1)
   }
})
