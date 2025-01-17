import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const item = [
  { path: '/', name: "Home" },
  { path: "/profile", name: "Profile" },
  { path: "/editPost", name: "Edit Post" },
  { path: "/createPost", name: "Create Post" },
  { path: "/setting", name: "Setting" },
]


const Sidebar = ({isOpen,setOpen}) => {
  const sidebarRef= useRef(null);
  return isOpen && (
    <motion.div
     ref={sidebarRef}

      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{duration:0.5, delay:0.1 ,ease:"easeInOut"}}
      className="fixed left-0 top-14 h-screen w-64  shadow-xl ring-1 ring-zinc-800 ">
      <motion.nav
       className="flex flex-col  ">
        { item.map((element, i) => (
          <Link to={element.path} key={i} className="block py-3 px-8 text-md  font-semibold  outline-white hover:bg-zinc-900 transition-all">{element.name}</Link>
        ))}
      </motion.nav>
    </motion.div>
  )
}

export default Sidebar