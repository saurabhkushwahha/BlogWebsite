import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
type AvatarProfileProps={
   profileImage:string,
  fullName:string,

}
function AvatarProfile({profileImage,fullName}:AvatarProfileProps) {
  return (
    <Avatar>
      <AvatarImage src={profileImage} />
      <AvatarFallback>{fullName}</AvatarFallback>
    </Avatar>

  )
}

export default AvatarProfile