import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AvatarProfile from "../AvatarProfile/AvatarProfile"
import { useUserStore } from '@/store/auth.store/useUserStore'

function DropDownMenu() {
  const { logout, user } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest('.dropdown-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, [isOpen]);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div className="relative inline-block text-left cursor-pointer dropdown-container" onClick={toggleDropdown}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AvatarProfile fullName={user?.fullName} profileImage={user?.profileImage} />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute right-0 mt-2 bg-black ring-1 ring-zinc-800 font-mono w-40 px-2 py-1 text-white shadow-lg backdrop-blur-md rounded-md overflow-hidden"
          >
            <ul className="py-1">
              <motion.li variants={itemVariants} className='w-full px-2 py-2 cursor-pointer hover:bg-zinc-800 rounded transition-colors duration-200'>
                <Link to="/dashboard" className='block p-2'>Dashboard</Link>
              </motion.li>
              <motion.li variants={itemVariants} className='w-full px-2 py-2 cursor-pointer hover:bg-zinc-800 rounded transition-colors duration-200'>
                <Link to="/profile" className='block p-2'>Profile</Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className='w-full px-2 py-2 cursor-pointer hover:bg-zinc-800 rounded transition-colors duration-200'
              >
                <a className='block p-2' onClick={(e) => { e.stopPropagation(); logout(); }}>Logout</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropDownMenu

