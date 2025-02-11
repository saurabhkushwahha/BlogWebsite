import Card from "@/components/Card";
import { usePostStore } from "@/store/post.store/usePostStore";
import { useEffect } from "react";
import Loding from "../Loding";


function Home() {
  const {data,getAllPostHome}=usePostStore()
  useEffect(()=>{
    getAllPostHome()
  },[])

 if(!data){
  return <Loding/>
 }
  return (
    <>
      <Card  data={data}/>
    </>
  )
}

export default Home;
