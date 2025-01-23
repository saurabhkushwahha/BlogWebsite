import {create} from 'zustand'
import axios from '../../lib/Axios/Axios.tsx'
import toast from 'react-hot-toast'

type User={
   email:string,
   password:string,
   fullName:string,
}

type LoginCredentials={
   email:string,
   password:string,
}

type UserStore={
   user : User | null,
   isLoading:boolean,
   isError:boolean,
   signup: ({email,password,fullName}:User)=>Promise<void>,
   login:({email,password}:LoginCredentials)=>Promise<void>,
   logout:()=>Promise<void>,
   checkAuth:()=>Promise<void>,
   editProfile:({username,fullName})=>Promise<void>,
}


export const useUserStore= create<UserStore>((set,_get)=>({

   // variable
   user:null,
   isLoading:false,
   isError:false,


   //Signup
   signup:async({email,password,fullName})=>{
      try {
        set({isLoading:true})

        const response= await axios.post('/auth/signup',{email,password,fullName})
        toast.success(response.data.message)
      } catch (err) {
        set({isError:true})
        console.log(`Error IN SignUP : ${err}`)
        toast.error("SignUp Failed.Try again!")
      }finally{
        set({isLoading:false})
      }
   },


   //Login
   login:async({email,password})=>{
      try {
         set({isLoading:true})
         const response=await axios.post('/auth/login',{email,password})
         set({user:response.data.user})

         toast.success(response.data.message)
      } catch (err) {
        set({isError:true})
        toast.error("Login Failed!")
      }
      finally{
         set({isLoading:false})
      }
   },

   // logout
   logout:async()=>{
      set({user:null})
      try {
          const response = await axios.get("/auth/logout")
         toast.success(response.data.message)
      } catch (err) {
        console.log("Error Logout!",err)

      }
   },

   //check-Auth
   checkAuth: async ()=>{
      try {
       const response= await axios.get('/auth/checkAuth')
       set({user:response.data.user})
      } catch (err) {
       console.log(err)
      }
   },

   //editProfile
   editProfile:async({username,fullName})=>{
      try {

         const response=await axios.post('/user/editProfile',{username,fullName})
         set({user:response})

      } catch (error) {
        set({isError:true})
        console.log("Error in Updating profile:",error)
      }

   },


}))
