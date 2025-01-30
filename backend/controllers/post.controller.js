import postModel from "../model/postModel.js"
import cloudinary from "../lib/cloudinary.js";
import mongoose from "mongoose";



export const createPost = async (req, res) => {
  try {
    const { id: postUserId } = req.user;
    const { title, image, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title & Content are required!" });
    }

    let uploadImage = "";

    if (image) {
      try {
        const { url } = await cloudinary.uploader.upload(image,
          {
            folder: "BlogWebsiteUploadImage",
          });

        uploadImage = url;
      } catch (cloudinaryError) {
        console.error("Cloudinary Error:", cloudinaryError)
        res.status(500).json({ message: "Image upload Failed.Try again later !" })
      }

    }

    // create post
    const response = await postModel.create({ postUserId, title, uploadImage, content })
    return res.status(200).json({
      success: true,
      message: "Post created successfully",
      post: response,
    })

  } catch (err) {
    console.error("Post creation error:", err.message)
    res.status(500).json({ "message": err.message });
  }
}

// editPost
export const editPost = async (req, res) => {
  try {
    const { id: postUserId } = req.user  // ye id user ki hogi jo ki postModel mai save hoga
    const { id, title, image, content } = req.body; // ismai mai

    let uploadImage = "";
    if (image) {
      try {
        const { url } = await cloudinary.uploader.upload(image, {
          folder: "BlogWebsiteUploadImage",
        })

        uploadImage = url;

      } catch (cloudinaryError) {
        console.log("Error in editing post:", cloudinaryError)
        res.status(500).json({ "message": cloudinaryError.message })
      }
    }


    const editData = {
      postUserId,
      title,
      uploadImage,
      content
    }

    const response = await postModel.findOneAndUpdate(
      { _id: id },
      { $set: editData },
      { new: true }
    )

    res.status(200).json(response)

  } catch (err) {
    console.error("Post Editing error", err.message)
    res.status(500).json({ "message": err.message })
  }
}

export const deletePost = async (req, res) => {
  try {
    const {id}=req.query
    const response= await postModel.findByIdAndDelete(id)
    const {uploadImage}=response
    if(uploadImage){
          const fileName=uploadImage.split('/').pop()
          const publicId= fileName.split('.')[0]
          await cloudinary.uploader.destroy(`BlogWebsiteUploadImage/${publicId}`)
    }
    res.status(200).json({
      success:true,
      message:"Post Deleted Successfully",
      post:response
    })
  } catch (err) {
    console.error("Error in Deleting the post", err.message)
    res.status(500).json({ "message": err.message })
  }
}


//singlepost
export const singlePost = async (req, res) => {
  try {
    const { id: postId } = req.query
    const response = await postModel.findById(postId).populate('postUserId')
    res.status(200).json(response)

  } catch (err) {
    console.error("Error getting Post:", err.message)
    res.status(500).json({ "message": err.message })
  }
}

//getAllPost by specific user not work if you not use the query parameter ?userId=6780ce65bee0ce415af7a3a2
export const getAllPost = async (req, res) => {
  try {
    const { _id: userId } = req.user
    // const response= await postModel.find({postUserId:userId},{_id:1,title:1})


    // userId is string type so we need to change the string to object type
    const objectId = new mongoose.Types.ObjectId(userId)
    const response = await postModel.aggregate([
      {
        $match: { postUserId: objectId },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          uploadImage: 1,
          description: 1,
          content: 1,
          tags: 1,
          likes: 1,
          createdAt: 1,
        }
      }
    ]).sort({ "createdAt": -1 })

    res.status(200).json(response)

  } catch (err) {
    console.error("Error getting all post", err.message)
    res.status(500).json({ "messgae ": err.message })

  }
}


export const getAllPostHome = async (req, res) => {
  try {
    // const {_id:userId}=req.user    we are not using thing just use for authentication user valid or not
    const response = await postModel.find({}).sort({ "createdAt": -1 }).populate("postUserId") // recent Post
    res.status(200).json(response)
  } catch (error) {
    console.error("Error getting all post on home:", error.message)
    res.status(500).json({ "message ": error.message })
  }
}