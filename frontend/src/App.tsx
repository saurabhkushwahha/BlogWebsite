import Login from "./pages/auth/Login/Login.tsx"
import SignUp from "./pages/auth/Signup/Signup.tsx"
import Home from './pages/Home/Home.tsx'
import CreatePost from "./pages/Post/CreatePost.tsx"
import { Toaster } from 'react-hot-toast'
import { Route, Routes, Navigate } from "react-router-dom"
import { useUserStore } from "./store/auth.store/useUserStore.tsx"
import { useEffect } from "react"
import Dashboard from "./pages/dashboard/Dashboard.tsx"
import Profile from "./pages/profile/profile.tsx"
import Layout from "./pages/Layout.tsx"
import GetPost from "./pages/Post/GetPost.tsx"

function App() {
  const { user, isLoading, checkAuth } = useUserStore();

  useEffect(() => {
    checkAuth()
  }, [])


  //  TODO:  implements loader here
  // if(isLoading) return <h1> ................Lodaing </h1>

  return (
    <>
      <div className='relative  bg-zinc-950  overflow-hidden   text-white min-h-screen '>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" replace />} />

          <Route path="/" element={user ? <Layout/> : <Navigate to="/login" replace />} >
            <Route index path="/" element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="createPost" element={<CreatePost/>}/>
            <Route path="getPost/:id" element={<GetPost/>}/>
          </Route>

        </Routes>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
            },
          }}
        />
      </div>

    </>
  )
}

export default App
