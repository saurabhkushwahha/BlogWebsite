import axios from "@/lib/Axios/Axios";
import toast from "react-hot-toast";
import { create } from 'zustand'

type Post = {
  title: string,
  image: string,
  content: string,
}
interface PostStore {
  data: Array<object> | null,
  isLoading: boolean,
  isError: boolean,
  createPost: ({ title, image, content }: Post) => Promise<void>,
  editPost:({title,image,content}:Post)=>Promise<void>,
  deletePost:(id)=>Promise<void>,
  getAllPost: () => Promise<void>,
  getAllPostHome: () => Promise<void>,
  getSinglePost:({id}:{id:string})=>Promise<void>,


}


export const usePostStore = create<PostStore>((set, _get) => ({

  data: null,
  isLoading: false,
  isError: false,

  createPost: async ({ title, image, content }) => {
    try {
      set({ isLoading: true })
      const response = await axios.post('/post/createPost', { title, image, content })
      set({ data: response.data.post })
      toast.success("Post Created Successfully!")
    } catch (error) {
      set({ isError: true })
      console.log("Error in Creating Post", error)
    } finally {
      set({ isLoading: false })
    }
  },

  editPost:async({id,title,image,content})=>{
   try {
    set({isLoading:true})
    const response=await axios.post(`/post/editPost`,{id,title,image,content})
    console.log(response.data)
    toast.success("Post Edited!!")

   } catch (error) {
     set({isError:true})
     console.log("Error in editing Post:",error)
   }finally{
    set({isLoading:false})
   }
  },

  deletePost:async(id)=>{
    console.log(id,"usePoststroe")
     try {
       set({isLoading:true})
        const response=await axios.delete(`post/deletePost?id=${id}`)
        console.log(response)
        toast.success("Post Deleted!!")
     } catch (error) {
       set({isError:true})
       console.log("Error in Deleting the Post",error)
     }
     finally{
      set({isLoading:false})
     }
  },

  getAllPost: async () => {
    try {
      set({ isLoading: true })
      const response = await axios.get('/post/getAllPost')
      set({ data: response.data })
    } catch (error) {
      set({ isError: true })
      console.log("Error in GetAllPost", error)
    }
    finally {
      set({ isLoading: false })
    }
  },
  getAllPostHome: async () => {
    try {
      set({ isLoading: true })
      const response = await axios.get('/post/getAllPostHome')
      set({ data: response.data })

    } catch (error) {
      set({ isError: true })
      console.log("Error in Getting All Post on Home :", error)
    } finally {
      set({ isLoading: false })
    }
  },
  getSinglePost:async({id})=>{
      try {
        set({isLoading:true})
        const response =await axios.get(`/post/getPost?id=${id}`)
        set({data:response.data})
      } catch (error) {
        set({isError:true})
        console.error("Error in getting Single Post :",error)
      }finally{
        set({isLoading:true})
      }
  }

}))