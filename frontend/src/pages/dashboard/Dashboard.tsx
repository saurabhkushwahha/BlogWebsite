import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { usePostStore } from '@/store/post.store/usePostStore';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
// const data = [
//   {
//     title: "Stars Shine at Night",
//     desc: "The beauty of the night sky is enhanced by the twinkling stars that captivate observers worldwide.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "15 Mar 2024",
//     tag: ["Astronomy", "Nature", "Universe", "Cosmos", "Night", "Space"]
//   },
//   {
//     title: "Advancements in AI",
//     desc: "Artificial intelligence is evolving rapidly, bringing innovation and transformation across various industries.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "10 Feb 2024",
//     tag: ["Technology", "AI", "Machine Learning", "Future", "Innovation", "Computing"]
//   },
//   {
//     title: "The Power of Meditation",
//     desc: "Daily meditation helps reduce stress and improve focus, leading to a healthier and more peaceful life.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "25 Dec 2023",
//     tag: ["Wellness", "Mindfulness", "Health", "Fitness", "Relaxation", "Peace"]
//   },
//   {
//     title: "Exploring the Deep Ocean",
//     desc: "The mysteries of the deep sea continue to astonish researchers, revealing new species and hidden wonders.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "5 Jul 2023",
//     tag: ["Ocean", "Discovery", "Marine Life", "Nature", "Science", "Exploration"]
//   },
//   {
//     title: "Revolutionizing Renewable Energy",
//     desc: "Solar and wind energy continue to disrupt traditional power sources, reducing dependence on fossil fuels.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "20 Apr 2023",
//     tag: ["Renewable Energy", "Technology", "Sustainability", "Future", "Green"]
//   },
//   {
//     title: "The Art of Minimalism",
//     desc: "Embracing minimalism in lifestyle and design helps people declutter their lives and focus on what truly matters.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "8 Sep 2023",
//     tag: ["Minimalism", "Lifestyle", "Design", "Productivity", "Simplicity"]
//   },
//   {
//     title: "Breakthroughs in Quantum Computing",
//     desc: "Quantum computing is set to revolutionize data processing, making calculations at an unprecedented speed.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "12 Jan 2024",
//     tag: ["Quantum Computing", "Technology", "Future", "AI", "Research"]
//   },
//   {
//     title: "The Rise of Electric Vehicles",
//     desc: "Electric cars are becoming the norm as more companies invest in sustainable transportation technology.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "6 Oct 2023",
//     tag: ["Electric Vehicles", "Technology", "Innovation", "Sustainability", "Future"]
//   },
//   {
//     title: "The Psychology of Colors",
//     desc: "Colors influence emotions and decision-making, shaping everything from marketing strategies to interior design.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "30 May 2023",
//     tag: ["Psychology", "Colors", "Design", "Marketing", "Influence"]
//   },
//   {
//     title: "Blockchain Beyond Cryptocurrency",
//     desc: "Blockchain technology is finding use cases beyond crypto, including supply chain management and secure transactions.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "14 Aug 2023",
//     tag: ["Blockchain", "Technology", "Security", "Finance", "Innovation"]
//   },
//   {
//     title: "The Importance of Mental Health",
//     desc: "More awareness is being raised about the significance of mental health and well-being in everyday life.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "2 Nov 2023",
//     tag: ["Mental Health", "Wellness", "Self-Care", "Happiness", "Mindfulness"]
//   },
//   {
//     title: "The Evolution of Smartphones",
//     desc: "Smartphones have evolved significantly, integrating AI, better cameras, and foldable screens for the future.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "9 Dec 2023",
//     tag: ["Smartphones", "Technology", "Innovation", "Future", "Gadgets"]
//   },
//   {
//     title: "The Future of Space Exploration",
//     desc: "Space agencies and private companies are planning missions to Mars, the Moon, and beyond.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "21 Jan 2024",
//     tag: ["Space", "NASA", "Exploration", "Mars", "Science"]
//   },
//   {
//     title: "The Impact of Social Media",
//     desc: "Social media continues to shape communication, marketing, and even mental well-being.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "18 Jun 2023",
//     tag: ["Social Media", "Marketing", "Influence", "Technology", "Culture"]
//   },
//   {
//     title: "AI-Powered Healthcare",
//     desc: "Artificial Intelligence is transforming healthcare with faster diagnoses and personalized treatments.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "27 Jul 2023",
//     tag: ["AI", "Healthcare", "Medicine", "Innovation", "Technology"]
//   },
//   {
//     title: "Sustainable Fashion Trends",
//     desc: "Eco-friendly fabrics and ethical production are reshaping the future of the fashion industry.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTUDrW-9tatUt5mHwF5eV8fBObeTuAynSVQ&s",
//     date: "5 Mar 2023",
//     tag: ["Fashion", "Sustainability", "Lifestyle", "Trends", "Green"]
//   }
// ];
const Dashboard:React.FC = () => {

const {getAllPost,data}=usePostStore()
useEffect(()=>{
 getAllPost()
},[])


 const formatDate=(isoDate)=>{
  return new Date(isoDate).toLocaleDateString("en-GB",{
    day:"numeric",
    month:"short",
    year:"numeric"
  })
 }
  return (
    <>
      {
        data?.map((item,idx) => (
          <Card key={idx} className='p-4 rounded-none cursor-pointer dark border-b border-b-zinc-900'>
            <CardTitle className='font-bold '>
                 {item.title}
            </CardTitle>
            <CardContent className=' flex flex-col  sm:flex-row space-x-2 space-y-2 items-center sm:items-start mt-2 p-1 overflow-hidden'>
              <div className='mt-1'>
              <p>{item.desc}</p>
               { /* TODO: USE THE TAGS WHEN ho databasae mai*/ }
               {/* {item.tag?.map((t)=>(
                <button key={t} className='hidden sm:inline-block mr-1 mb-1 px-1 text-slate-100  rounded-full bg-blue-500'>#{t}</button>
              ))} */}
              </div>
              <img src={item.uploadImage}  width={200} className='sm:block hidden object-contain' />
            </CardContent>
            <CardFooter className='p-0 sm:p-2 flex justify-between'>
              <span className='font-semibold italic '>
              {formatDate(item.createdAt)}
              </span>
              <Link  to={`/editPost/${item._id}`} className='font-semibold italic hover:underline'>
                Edit Post
              </Link>
            </CardFooter>
          </Card>

        ))
      }
    </>
  )
}

export default Dashboard