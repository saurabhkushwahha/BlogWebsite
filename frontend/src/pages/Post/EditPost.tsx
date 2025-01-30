import { useEffect, useRef, useState } from 'react'
import Navbar from './NavbarEditor/NavbarEditor'
import defaultBlogBanner from '../../resources/Images/BlogBanner.png'
import { Tool } from './Editor/ToolComponents'
import EditorJS from '@editorjs/editorjs';
import { usePostStore } from '@/store/post.store/usePostStore'
import { useParams } from 'react-router-dom'
import axiosInstance from '@/lib/Axios/Axios';

function EditPost() {

  const uploadRef = useRef()
  const titleRef=useRef()
  const {id}=useParams()
  const {editPost,getSinglePost,data}=usePostStore()  // TODO: USE the usePostStore to call the data and use it
  const [navTitle, setNavTitle] = useState();
  const [image, setImage] = useState()

  const editorRef = useRef()

  // useEffect
  useEffect(() => {

    const init=async()=>{
      //  await getSinglePost({id})
        const response=  await axiosInstance.get(`/post/getPost?id=${id}`)
       if(response?.data){
        setNavTitle(response.data?.title)
        titleRef.current.value=response.data?.title
        uploadRef.current.src=response.data?.uploadImage
        initilizedEditorJs(response.data?.content);
       }
    }

      init();

    // return () => {
    //      if(editorRef.current){
    //         editor.destroy();
    //      }
    // }

  }, [id]);




   const initilizedEditorJs=async(content)=>{
     if(!editorRef.current){
      const editor = new EditorJS({
      holder: "textEditor",
      data:content,
      tools: Tool,
      });

      editorRef.current = editor
     }
   }


  const handleSave = async () => {
    try {
      const response = await editorRef.current?.save()
      return response;
    } catch (error) {
      console.log("Error in saving data", error)
    }

  }


  const handlePost = async () => {

    const savedData = await handleSave()
       console.log("________________EditPost_______________")

       await editPost({
        id,
        title:navTitle,
        image,
        content:savedData,
      })

  }

  const handlekeydown = (e) => {
    if (e.key === 'Enter' || e.keyCode == 13) {
      e.preventDefault()
    }
  }

  const handleTitleChange = (e) => {
    let input = e.target

    //  console.log(input.scrollHeight)
    //  input.style.height='auto'
    input.style.height = `${input.scrollHeight}px`
    setNavTitle(e.target.value)
  }


  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (file) {

      if (!file.type.startsWith('image/')) {
        alert("Please Upload an image file");
        return;
      }

      const reader = new FileReader()

      reader.onloadend = async () => {
        if (uploadRef.current) {
          uploadRef.current.src = reader.result
        }
        setImage(reader.result)

      }

      reader.onerror = () => {
        console.log("There is an error uploading the banner")
        alert("Uploading Banner Error!")
      }

      reader.readAsDataURL(file)
    }

  }



  return (
    <>
      <Navbar navTitle={navTitle} handlePost={handlePost} />
      <div className='relative overflow-hidden text-white mx-auto px-4 pt-16 bg-transparent bg-opacity-0'>
        <div className='container  mx-auto  py-4 px-4 max-w-3xl  '>
          <div className='blogBanner relative aspect-video hover:bg-opacity-80 border border-slate-300/55 rounded '>

            <label htmlFor="blogBanner">

              <img src={defaultBlogBanner} ref={uploadRef} />
              <input
                type="file"
                accept='image/*'
                id='blogBanner'
                hidden
                onChange={handleUpload}
              />
            </label>
          </div>

          <textarea
            name="title"
            id="title"
            ref={titleRef}
            placeholder='Blog Title'
            onChange={handleTitleChange}
            onKeyDownCapture={handlekeydown}
            className='outline-none  text-4xl font-medium placeholder:opacity-40  resize-none px-0 md:px-4 py-3 h-16 w-full leading-tight bg-transparent rounded md:ml-5  mt-16 '
          />

          {/* Editor */}
         <div id="textEditor"></div>
        </div>
      </div>
    </>
  )
}

export default EditPost