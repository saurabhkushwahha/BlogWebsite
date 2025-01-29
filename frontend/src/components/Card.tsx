import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HeartIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const formatDate=(isoDate)=>{
  return new Date(isoDate).toLocaleDateString("en-GB",{
    day:'numeric',
    month:"short",
    year:"numeric"
  })
}

const Cardblog = ({data}) => {
  return (
    <>
      {data?.map((ele) => (
        <>
          <Card key={ele._id}   className="bg-black text-white cursor-alias border-b-2 border-zinc-900/55 rounded-none ">
            <CardHeader className="flex  md:flex-row  gap-1 sm:justify-center">
              <div className="flex gap-1 flex-col w-fit">
                <Link to={`/getPost/${ele.date}`}>
                  <CardTitle className="hover:underline">{ele.title}</CardTitle>
                </Link>
                <CardDescription>{ele.description}</CardDescription>
              </div>
              <img src={ele.uploadImage} alt="image" className=" rounded-sm object-cover w-64 mx-auto" />
            </CardHeader>
            <CardFooter className="justify-between">
              <p className="font-light italic text-zinc-200 text-sm"> {ele.postUserId.username} {formatDate(ele.createdAt)}</p>
              <div className=" font-semibold flex gap-2 text-zinc-500 text-sm hover:underline cursor-pointer">
                <span className="text-white">
                  <HeartIcon className="inline ml-1" size={18}/>
                </span>
                <Link to={`/getPost/${ele._id}`}>Read more</Link>
              </div>
            </CardFooter>
          </Card>
        </>

      ))}
    </>
  )
}

export default Cardblog