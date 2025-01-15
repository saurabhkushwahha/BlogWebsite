import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "@/components/ResuableComponents/Navbar/Navbar"
import Container from "@/components/Container"
const Layout = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Navbar  isOpen={isOpen} setOpen={setOpen} />
      <Container isOpen={isOpen} setOpen={setOpen}>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout