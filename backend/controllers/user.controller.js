
export const editProfile= async (req,res)=>{
  try {
     const {username,fullName,bio,profileImage}=req.body


     console.log(username)
     console.log(fullName)
     console.log(bio)
      console.log("checking the backend!")



     res.json("editprofile now ")
  } catch (error) {
   res.status(500).json({message:"Error Edit Profile"})
  }
}