import { Link } from 'react-router-dom'
import { CircleFadingPlusIcon } from 'lucide-react'
import DropDownMenu from '../DropDownMenu/DropDownMenu.tsx'

function Navbar() {

  return (
    <div className=' fixed left-0 top-0 w-full  bg-opacity-0 sm:backdrop-blur-md shadow-md z-40 transition-all duration-300 border-b border-zinc-800/40'>
      <div className='container mx-auto sm:px-4 py-2 px-1 sm:py-2'>
        <div className='flex items-center justify-between flex-wrap'>
          {/* Logo */}
          <Link to="/" className='flex items-center shadow-md backdrop-blur-lg justify-center' >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
              <circle cx="50" cy="45" r="8" fill="white" />
              <path d="M20,50 Q50,80 80,50 Q65,70 50,70 Q35,70 20,50 Z" fill="white" /></svg>
          </Link>
          <nav className='flex items-center flex-wrap gap-4'>
            <Link to='/createPost' className="inline-flex gap-2 px-3 py-1  items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:100%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <CircleFadingPlusIcon size={22} className='' />
              <span className=' font-semibold sm:block hidden transition-all duration-300'>
                Post
              </span>
            </Link>
            {/* Drop down menu */}
            <DropDownMenu />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar