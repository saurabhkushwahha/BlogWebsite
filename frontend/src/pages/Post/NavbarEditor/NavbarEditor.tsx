import DropDownMenu from '../../../components/ResuableComponents/DropDownMenu/DropDownMenu.tsx'
import Logo from '../../../components/ResuableComponents/logo/logo.tsx'
import {motion} from 'framer-motion'
interface props{
  navTitle:string,
  handlePost: ()=>Promise<void>
}
function Navbar({navTitle,handlePost}:props) {

  return (
    <div className=' fixed left-0 top-0 w-full  bg-opacity-0 sm:backdrop-blur-md shadow-md z-40 transition-all duration-300 border-b border-zinc-800/40'>
      <div className='container mx-auto sm:px-4 py-2 px-1 sm:py-2'>
        <div className='flex items-center justify-between flex-wrap'>
          {/* Logo */}
          <div className='flex gap-4 justify-center items-center'>
         <Logo/>
          <h1 className='text-white line-clamp-1 max-w-xs font-semibold font-serif'>
             {navTitle ? navTitle: "New Post"}
          </h1>

          </div>
          <nav className='flex items-center flex-wrap gap-4'>
          <motion.button whileTap={{scale:0.7}} whileHover={{scale:1.02}} transition={{type:"spring" ,stiffness:300,damping:24}} className='rounded-full px-3 py-1 border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:100%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50' onClick={handlePost}>Publish</motion.button>
            {/* Drop down menu */}
            <DropDownMenu />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar