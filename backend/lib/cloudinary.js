import { v2 as cloudinary } from 'cloudinary'
import { configDotenv } from 'dotenv'
configDotenv()

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  secert_key:process.env.CLOUDINARY_SECERET_KEY,
})


export default cloudinary