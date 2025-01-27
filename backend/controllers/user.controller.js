import userModel from "../model/userModel.js"
import cloudinary from "../lib/cloudinary.js"

export const editProfile = async (req, res) => {
  try {
    const { username, fullName, bio, profileImage } = req.body
    const { _id: userId } = req.user

    let image = ""
    if (profileImage) {
      try {
        const { url } = await cloudinary.uploader.upload(profileImage, {
          folder: "BlogWebsiteProfileImage",
        })
        image = url
      } catch (cloudinaryError) {
        console.error("Cloudinary Error:", cloudinaryError)
        return res.status(500).json({ message: "Image upload Failed. Try again later!" })
      }
    }

    if (username === "undefined" || fullName === "undefined" || bio === "undefined") {
      return res.status(400).json("Required fields are missing")
    }

    // Prepare update object
    const updateData = { username, fullName, bio }
    if (image) {
      updateData.profileImage = image
    }

    // Get the updated document using findOneAndUpdate
    const response = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: updateData },
      { new: true }
    )

    // Alternative way using aggregation pipeline
    // const response = await userModel.aggregate([
    //   { $match: { _id: userId } },
    //   { $set: { username, fullName } }
    // ])

    res.status(200).json(response)
  } catch (error) {
    console.error("Error in edit Profile:", error)
    res.status(500).json({ message: "Error Edit Profile" })
  }
}