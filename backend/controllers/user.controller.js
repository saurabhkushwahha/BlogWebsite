import userModel from "../model/userModel.js"

export const editProfile = async (req, res) => {
  try {
    const { username, fullName } = req.body
    const { _id: userId } = req.user

    // Get the updated document using findOneAndUpdate

    const response = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { username, fullName } },
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