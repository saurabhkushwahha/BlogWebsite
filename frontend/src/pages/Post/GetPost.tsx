import { useEffect, useRef } from 'react'
import axiosInstance from '@/lib/Axios/Axios'
import EditorJS from '@editorjs/editorjs'
import Editor from './Editor/Editor'
import { Tool } from './Editor/ToolComponents'
const GetPost = () => {
  const editorRef = useRef(null)
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [isError, setError] = useState()
  const id = "15%20%2024"
  useEffect(() => {
    let isMounted = true


    async function fetchData() {
      setLoading(true)
      try {
        const response = await axiosInstance.get(`/api/post/getPost/${id}`)
        if (isMounted) {
          setData(response.data)
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

    if (!editorRef.current && data) {
      editorRef.current = new EditorJS({
        holder: "textEditor",
        data: editorData,//yaha mai bacha hai
        readOnly: true
      })
    }


    return () => {
      editorRef.current.destroy();
      editorRef.current = null
    }

  }, [data])

  return (
    <div>
      <div className='blogBanner relative aspect-video hover:bg-opacity-80 border border-slate-300/55 rounded '>
          <img src={defaultBlogBanner} ref={uploadRef} />
      </div>
    </div>
  )



}

export default GetPost