import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from 'react-router-dom';


const Cardblog = ({data}) => {
  return (
    <>
      {data?.map((ele) => (
        <>
          <Card key={ele._id}   className="bg-black text-white cursor-alias border-b-2 border-zinc-900/55 rounded-none ">
            <CardHeader className="flex gap-1 sm:justify-center md:flex-row">
              <div className="flex gap-1 flex-col">

                <Link to={`/getPost/${ele.date}`}>
                  <CardTitle className="hover:underline">{ele.title}</CardTitle>
                </Link>
                <CardDescription>{ele.description}</CardDescription>
              </div>
              <img src={ele.uploadImage} alt="image" className=" rounded-sm object-cover w-64 mx-auto" />

            </CardHeader>
            <CardFooter className="justify-between">
              <p className="font-light italic text-zinc-500 text-sm">{ele.date}</p>
              <div className="font-light italic flex gap-2 text-zinc-500 text-sm hover:underline cursor-pointer">
                <span className="text-zinc-600">
                  {ele.username}
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