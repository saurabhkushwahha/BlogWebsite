import postModel from "../model/postModel.js"
import cloudinary from "../lib/cloudinary.js";



export const createPost = async (req, res) => {
  try {
    const { id: postUserId } = req.user;
    const { title, image, content } = req.body;

    if(!title || !content ){
      return res.status(400).json({message:"Title & Content are required!"});
    }

    let uploadImage="";

    if (image) {
        try {
          const {url}= await cloudinary.uploader.upload(image,
            {
              folder:"BlogWebsiteUploadImage",
            });

            uploadImage=url;
        } catch (cloudinaryError) {
         console.error("Cloudinary Error:",cloudinaryError)
         res.status(500).json({message:"Image upload Failed.Try again later !"})
        }

    }

    // create post
  const response=await postModel.create({postUserId,title,uploadImage,content})
  return res.status(200).json({
     success:true,
     message:"Post created successfully",
     post:response,
  })

  } catch (err) {
    console.error("Post creation error:",err.message)
    res.status(500).json({ "message": err.message });
  }
}


