import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUserStore } from "@/store/auth.store/useUserStore"
import { useState } from "react"

const Profile = () => {
  const { user,editProfile } = useUserStore()
  console.log(user,"Bas dekhne kai liya")
  const [username,setUsername]=useState()
  const[fullName,setFullName]=useState()

  const handleSubmit=  (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    editProfile({username,fullName})

  }
    return (
      <form onSubmit={handleSubmit}>
        <Input className="border-none outline-0 bg-transparent placeholder:text-muted-foreground"
        placeholder="Username"
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
        />

        <Input className="border-none outline-0 bg-transparent placeholder:text-muted-foreground"
        placeholder="Full Name"
        value={fullName}
        onChange={(e)=>setFullName(e.target.value)}
        />

        <Button>submit</Button>

      </form>
  )
}

export default Profile