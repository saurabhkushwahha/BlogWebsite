import postModel from "../model/postModel.js"
import cloudinary from "../lib/cloudinary.js";



export const createPost=async(req,res)=>{
   try {
    const {postUserId,title, Image,description,content}=req.body
    if(Image){
       const cloudinary_response= await cloudinary.uploader.upload(uploadImage,{folder:"BlogWebsiteUploadImage"})
        //FIXME: image fixed and the  cloudinary_response?.url ? cloudinary_response.url:""

     const uploadImage=cloudinary_response?.url ? cloudinary_response.url : ""
     const post= await postModel.create({postUserId,title,uploadImage,description,content})
      res.status(201).json(post)
    }


   } catch (err) {
     res.status(500).json({"message":err.message});
   }
}


