import {Link} from 'react-router-dom'
export default function logo() {
  return (
    <Link to="/" className='flex items-center shadow-md backdrop-blur-lg justify-center' >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
        <circle cx="50" cy="45" r="8" fill="white" />
        <path d="M20,50 Q50,80 80,50 Q65,70 50,70 Q35,70 20,50 Z" fill="white" /></svg>
    </Link>
  )
}
