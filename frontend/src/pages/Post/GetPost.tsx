import { useEffect,useState, useRef } from 'react'
import axiosInstance from '@/lib/Axios/Axios'
import { useParams } from 'react-router-dom'
import EditorJS from '@editorjs/editorjs'
import { Tool } from './Editor/ToolComponents'
const GetPost = () => {
  const editorRef = useRef(null)
  const uploadRef=useRef(null)
  const [isLoading, setLoading] = useState(true)
  const [editorData, setEditorData]=useState();
  const [isError, setError] = useState()
  const  {id}=useParams()
  const [title,setTitle]=useState()


  useEffect(() => {
    let isMounted = true


    async function fetchData() {
      setLoading(true)
      try {
        const response= await axiosInstance.get(`http://localhost:3000/api/post/getPost?id=${id}`)
        if (isMounted) {
          setEditorData(response.data.content)
          setTitle(response.data.title)
           uploadRef.current.src=response.data.uploadImage
        }

      } catch (error) {
        if (isMounted) {
          setError(true)
          console.log("Error:", error)
        }
      }
      finally {
        if (isMounted) {
          setLoading(false)
        }
      }

    }

    fetchData()
    return () => {
      isMounted = false
    }

  }, [id])

  useEffect(() => {

    if (!editorRef.current && editorData) {
      editorRef.current = new EditorJS({
        holder: "textEditor",
        data: editorData,
        tools:Tool,
        readOnly: true
      })
    }


    // return () => {
    //   if(editorRef.current){
    //   editorRef.current.destory();
    //   editorRef.current = null
    //   }
    // }

  }, [editorData])

  return (
    <>
      <div className='blogBanner relative aspect-video hover:bg-opacity-80 border border-slate-300/5 rounded '>
          <img src="" ref={uploadRef} />
      </div>
      <h1 className='font-bold text-3xl sm:text-5xl text-muted-foreground text-center sm:text-start my-4'>{title}</h1>
      <div id="textEditor"></div>
    </>
  )



}

export default GetPost