import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from '@/components/godshiv.png'
import { Link } from 'react-router-dom';
// const data=[
//   {
//    username:"@saurabhKushwaha",
//   uploadImage:Image,
//   title:"The Moon in the sky of ocean with dark light",
//   description:"About Today is a song by the indie rock band The National. It was released on July 20, 2004 on the album Cherry Tree. You can listen to the song on Spotify or watch the music video on YouTube",
//   date:"2 Jan 2024",
//   }
// ]
const data = [
  {
    username: "@johnDoe",
    uploadImage: Image,
    title: "A Serene Sunset Over the Mountain Peaks",
    description:
      "Mountain Glory is a poem by renowned poet Emily Brontë. Published in the 19th century, it captures the essence of solitude and beauty. You can find the poem in 'The Complete Poems of Emily Brontë' or read it online on various literature platforms.",
    date: "678c9f7f209397b12d95aeb7",
  },
  {
    username: "@janeSmith",
    uploadImage: Image,
    title: "Raindrops on Glass with a City View",
    description:
      "Rain Melody is an instrumental track by artist Ludovico Einaudi. Featured on the album 'Divenire,' it evokes feelings of calm and introspection. Stream it on Apple Music or watch the live performance on YouTube.",
    date: "678582630b3cd711bf41a494",
  },
  {
    username: "@alexTraveler",
    uploadImage: Image,
    title: "A Majestic Lion Roaming the Savannah",
    description:
      "The King of Savannah is a wildlife documentary narrated by Sir David Attenborough. Released in 2023, it explores the life of lions in the African plains. Watch it now on National Geographic or stream it on Disney+.",
    date: "10 Apr 2024",
  },
  {
    username: "@natureLover",
    uploadImage: Image,
    title: "The Beauty of Cherry Blossoms in Spring",
    description:
      "Blossom Dreams is a photography collection showcasing cherry blossoms from Japan. Captured in 2022, it celebrates the fleeting beauty of spring. Visit the gallery at naturelovers.com or buy prints online.",
    date: "5 May 2024",
  },
  {
    username: "@adventureSeeker",
    uploadImage: Image,
    title: "Climbing the Rocky Mountains at Dawn",
    description:
      "Rocky Trails is a travel blog by outdoor enthusiast Chris Adams. It details the challenges and joys of climbing the Rockies. Read it on rockytrailsblog.com or follow Chris on Instagram for live updates.",
    date: "12 Jul 2024",
  },
  {
    username: "@foodieLife",
    uploadImage: Image,
    title: "A Gourmet Plate of Italian Pasta",
    description:
      "Pasta Perfection is a recipe book by Chef Maria Conti. It features over 50 authentic Italian pasta dishes. Available on Amazon and in select bookstores.",
    date: "25 Aug 2024",
  },
  {
    username: "@techGuru",
    uploadImage: Image,
    title: "A Futuristic Smartphone with Holographic Display",
    description:
      "Future Tech is a YouTube series that reviews cutting-edge gadgets. This episode features a holographic smartphone prototype. Watch it on the TechGuru channel or read the review at techguru.com.",
    date: "30 Sep 2024",
  },
  {
    username: "@historyBuff",
    uploadImage: Image,
    title: "The Ancient Ruins of Machu Picchu",
    description:
      "Mysteries of the Incas is a historical documentary exploring Machu Picchu. Released in 2021, it delves into the history and culture of the Inca civilization. Watch it on Discovery+ or Netflix.",
    date: "10 Oct 2024",
  },
  {
    username: "@musicVibes",
    uploadImage: Image,
    title: "A Crowd Enjoying a Live Music Festival",
    description:
      "Festival Nights is a playlist featuring live performances from global music festivals. Stream it now on Spotify or watch the videos on YouTube.",
    date: "18 Nov 2024",
  },
  {
    username: "@urbanArtist",
    uploadImage: Image,
    title: "Graffiti Art on the Streets of New York",
    description:
      "Street Art Chronicles is a coffee table book showcasing urban art from around the world. Published in 2024, it includes interviews with renowned graffiti artists. Buy it on urbanartbooks.com.",
    date: "22 Dec 2024",
  },
  {
    username: "@wanderlust",
    uploadImage: Image,
    title: "A Quiet Cabin in the Snowy Woods",
    description:
      "Cabin Retreats is a travel guide for serene winter getaways. It features remote cabins across North America. Get your copy at wanderlustguides.com.",
    date: "1 Jan 2025",
  },
];

const Cardblog = () => {

  return (
    <>
      {data.map((ele) => (
        <>
          <Card className="bg-black text-white cursor-alias border-b-2 border-zinc-900/55 rounded-none ">
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
                <Link to={`/getPost/${ele.date}`}>Read more</Link>
              </div>
            </CardFooter>
          </Card>
        </>

      ))}
    </>
  )
}

export default Cardblog