import axios from "@/lib/Axios/Axios";
import {create } from 'zustand'

type Post={
   title:string,
   image:string,
   content:string,
}
interface PostStore{
   data:any,
   isLoading:boolean,
   isError:boolean,
   createPost:({title,image,content}:Post)=>Promise<void>,
   getAllPost:()=>Promise<void>,
}

//  const datask=[
//   {
//    username:"@saurabhKushwaha",
//   uploadImage:Image,
//   title:"The Moon in the sky of ocean with dark light",
//   description:"About Today is a song by the indie rock band The National. It was released on July 20, 2004 on the album Cherry Tree. You can listen to the song on Spotify or watch the music video on YouTube",
//   date:"2 Jan 2024",
//   }
// ]
export const usePostStore= create<PostStore>((set,_get)=>({

  data:false,
  isLoading:false,
  isError:false,

  createPost:async({title,image,content})=>{
       try {
        set({isLoading:true})
        const response= await axios.post('/post/createPost',{title,image,content})
        set({data:response.data.post})
       } catch (error) {
        set({isError:true})
        console.log("Error in Creating Post",error)
       }finally{
        set({isLoading:false})
       }
  },


  getAllPost:async()=>{
    try {
      set({isLoading:true})
      const response=await axios.get('/post/getAllPost')
      console.log("Response from the frontend",response)
      set({data:response.data})
    } catch (error) {
      set({isError:true})
      console.log("Error in GetAllPost",error)
    }
    finally{
      set({isLoading:false})
    }
  },

}))