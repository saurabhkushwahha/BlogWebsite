import mongoose from "mongoose";

const postSchema= new mongoose.Schema({

  postUserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Users',
    required:true
  },

  uploadImage:{
    type:String,
    required:true
  },

   title:{
    type:String,
    required:true,
    trim:true
   },

   description:{
     type:String,
     required:true,
     trim:true
   },

   content:{
    type:String,
    required:true,
    trim:true
   },

   tags:{
    type:[String],
     default:[]
   },

   likes:{
     type:Number,
     default:0
   },

   createdAt:{
      type:Date,
      default:Date.now
   }



})


 const postModel= mongoose.model("Products",postSchema)


export default postModel