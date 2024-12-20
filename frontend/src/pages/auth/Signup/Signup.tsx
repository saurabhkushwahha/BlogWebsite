import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useUserStore } from '@/store/auth.store/useUserStore'
function SignUp() {

  const [fullName,SetFullName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const {signup}= useUserStore();


  const handleSignUp=async(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
     await signup({email,fullName,password})

    console.log({email,fullName,password})
  }

  return (
    <div className='max-w-sm mx-auto'>
    <motion.div
     initial={{opacity:0.1,scale:0}}
     animate={{opacity:1,scale:1}}
     transition={{duration:0.8
      ,delay:0,ease:"easeInOut"}}
    className='bg-transparent sm:bg-black text-black w-full h-full rounded-md md:shadow-2xl lg:backdrop-blur-xl p-8 mx-auto mt-40 '

    >
      <h1 className='font-light text-2xl text-white  font-serif'>Sign Up</h1>
      <p className='mb-8 mt-1 font-serif text-sm tracking-wider sm:text-md sm:text-zinc-400'>Create a new account to get started.</p>
         <form onSubmit={handleSignUp}>

          <input
          type="text"
          placeholder='Full Name'
          className='w-full px-4 py-2 rounded mb-6 text-white bg-transparent placeholder:font-light font-semibold outline-none ring-1 ring-gray-500 hover:ring-1 hover:ring-white '
          value={fullName}
          autoFocus
          onChange={(e)=>SetFullName(e.target.value)}
          />


          <input
          type="email"
           placeholder='you@example.com'
           className='w-full px-4 py-2 rounded mb-6 sm:text-white bg-transparent placeholder:font-light font-semibold outline-none ring-1 ring-gray-500 hover:ring-1 hover:ring-white '
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           />

          <input
          type="password"
          placeholder='Password'
          className='w-full px-4 py-2 rounded mb-6 sm:text-white bg-transparent placeholder:font-light font-semibold outline-none ring-1 ring-gray-500 hover:ring-1 hover:ring-white '
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />

          <motion.button
           type='submit'
           whileTap={{scale:0.9}}
           className=' w-full outline-none bg-slate-100 text-black font-medium sm:text-md px-4 py-2 rounded shadow-xl'>Create Account</motion.button>
         </form>
         < Link to="/login" className=' text-right mt-4 text-xs tracking-wider leading-none hover:underline text-zinc-400 cursor-pointer'>Already have an Account ?</Link>
    </motion.div>
</div>
  )
}

export default SignUp