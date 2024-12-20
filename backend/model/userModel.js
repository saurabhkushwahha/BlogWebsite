import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = new mongoose.Schema({
   username:{
    type:String,
    default: "@Anonymous_User"
   },

     fullName:{
      type:String,
      required:true
   },

  email: {
    type: String,
    required: [true, "Email is required !"],
    unique: true
  },

  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: [4, "Password must be at least 4 character long"]
  },

  profileImage:{
    type:String,
    default:"https://drive.google.com/file/d/1zq7KZUKC-hL6HYlBfymX-SE6c3V71PVb/view?usp=sharing"
  },

  bio:{
    type:String,
    default:""
  },

   followers:[
     {
       type: mongoose.Schema.Types.ObjectId,
       ref:"User",
       default:[],
     },
   ],

   following:[
     {
       type:mongoose.Schema.Types.ObjectId,
       ref:"User",
       default:[]
     }
   ]


}, { timestamps: true })



// prev-hooks and middleware run  when
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()

  } catch (err) {
    next(err)
  }
})

//method and attached to instance of document

userSchema.methods.comparePassword= async function (password) {
  return await bcrypt.compare(password,this.password)  // it will True or False
}

const userModel = mongoose.model('User', userSchema)


export default userModel