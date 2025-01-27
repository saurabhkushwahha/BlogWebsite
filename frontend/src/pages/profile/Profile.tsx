import { Button } from "@/components/ui/button"
import {Avatar,AvatarImage} from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import { useUserStore } from "@/store/auth.store/useUserStore"
import { ChangeEvent, useState,useRef } from "react"
import { CameraIcon } from "lucide-react"

const Profile:React.FC = () => {
  const profileImageRef= useRef()
  const { user, editProfile } = useUserStore()
  const [userData, setUserData] = useState({
    profileImage:user?.profileImage || "",
    username: user?.username || "",
    fullName: user?.fullName || "",
    bio: user?.bio || "",
  })


  const handleChange = (e: ChangeEvent) => {
    e.preventDefault()
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleProfileImage=(e)=>{
     const file= e.target.files[0]
     if(file){
         if(!file.type.startsWith('image/')){
          alert("Please Upload an image file");
          return;
         }

        const reader= new FileReader()
        reader.onloadend=async()=>{
            if(profileImageRef.current){
              profileImageRef.current.src=reader.result
            }
            setUserData((prev)=>({...prev, profileImage:reader.result}))

        }

        reader.onerror=()=>{
           console.log("There is an error in uploading the profile Image")
           alert("Uploding Profile Imge Error!")
        }
        reader.readAsDataURL(file)



     }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    editProfile(userData)
    console.log(userData)

  }
  return (
    <>
      <Card className="mx-auto sm:p-10 flex flex-col gap-4 dark ">

        <input type="file" accept="image/*" className="hidden" id="profileImage" onChange={handleProfileImage} />

        <label htmlFor="profileImage" className="relative rounded-full group  mx-auto w-28 h-28">
        <Avatar className="w-full h-full group-hover:border group-hover:border-white">
         <AvatarImage  src={userData.profileImage} className="object-cover"/>
        </Avatar>
         <CameraIcon className="absolute z-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
        </label>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="username"
              name="username"
              id="username"
              type="text"
              value={userData.username}
              onChange={handleChange}
            />

            <Input
              placeholder="FullName"
              name="fullName"
              id="fullName"
              type="text"
              value={userData.fullName}
              onChange={handleChange}
            />

            <Textarea
              placeholder="Bio..."
              name="bio"
              id="bio"
              value={userData.bio}
              onChange={handleChange}
            />
            <Button type="submit" className="mx-auto w-full" >Edit Profile</Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default Profile