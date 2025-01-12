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
   createPost:({title,image,content}:Post)=>Promise<void>
}

export const usePostStore= create<PostStore>((set,_get)=>({

  data:null,
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


}))