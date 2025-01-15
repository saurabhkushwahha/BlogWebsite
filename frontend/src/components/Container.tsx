import Sidebar from "./Sidebar"
const Container = ({ children,isOpen,setOpen }) => {
  return (
    <div className=" min-h-screen relative px-10 pt-14 overflow-hidden max-w-3xl mx-auto  bg-transparent bg-opacity-0 ">
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      {children}
    </div>
  )
}

export default Container