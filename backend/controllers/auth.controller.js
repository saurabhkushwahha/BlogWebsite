import userModel from "../model/userModel.js";
import { generateToken } from "../lib/generateToken.js";

//signup
export const signup = async (req, res) => {
  const {email, password, fullName } = req.body;
  try {
    if (!email || !password) return res.json({ message: "All fields are required!" })

    const user = await userModel.findOne({ email })
    if (user) {
      return res.json({ message: "User AlreadyExisted!" })
    }

    await userModel.create({ email, password, fullName })
    res.status(201).json({ message: "User Created !" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }

}

//login
export const login = async (req, res) => {
  try {

    const { email, password } = req.body
    if (!email || !password) return res.json({ message: "All fields are required!" })

    const user = await userModel.findOne({ email })
    if (!user) return res.json({ message: "User Not found!" })

    if (user && (await user.comparePassword(password))) {

      // token generation
       const token= await generateToken(user._id)

       // set token to cookie
        res.cookie("token",token,{
          httpOnly:true,
          secure:true,
          samesite:'strict',
          maxAge: 15*60*1000
        })

      res.json({
        message: "User Login Successfully!",
        user: {
          _id: user._id,
          fullName:user.fullName,
          email: user.email,
          password: user.password,
        },
        token:token
      })

    }else{
       res.status(400).json({message:"Invalid email & passowrd"});
    }

  } catch (err) {
    res.status(500).json({ message: "Login Error" })
  }
}


//logout

export const logout= (req,res)=>{
   try {
    res.clearCookie("token")
    res.status(200).json({message:"Logout Successfully!"})

   } catch (err) {
  res.status(500).json({message:"Error LOgout!"})

   }
}


//checkAuth

export const checkAuth=(req,res)=>{
   try {
    res.status(200).json({message:"User Authorized!", user:req.user})
   } catch (err) {
     res.status(500).json({message:"Error AuthCheking!"})
   }
}