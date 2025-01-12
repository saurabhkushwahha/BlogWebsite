import { useEffect, useRef, useState } from 'react'
import Navbar from './NavbarEditor/NavbarEditor'
import defaultBlogBanner from '../../resources/Images/BlogBanner.png'
import Editor from './Editor/Editor'
import { Tool } from './Editor/ToolComponents'
import EditorJS from '@editorjs/editorjs';
import { usePostStore } from '@/store/post.store/usePostStore'

function CreatePost() {

  const uploadRef = useRef()

  const {createPost}=usePostStore()
  const [navTitle, setNavTitle] = useState();
  const [image, setImage] = useState()

  // useEffect
  const editorRef = useRef()
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'textEditor',
      placeholder: 'Let me tell you something....',
      tools: Tool,
    });

    editorRef.current = editor

    return () => {
      editor.destroy()
    }

  }, []);


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
     await createPost({
      title:navTitle,
      image:image,
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
            placeholder='Blog Title'
            onChange={handleTitleChange}
            onKeyDownCapture={handlekeydown}
            className='outline-none  text-4xl font-medium placeholder:opacity-40  resize-none px-0 md:px-4 py-3 h-16 w-full leading-tight bg-transparent rounded md:ml-5  mt-16 '
          />

          {/* Editor */}
          <Editor />
        </div>
      </div>
    </>
  )
}

export default CreatePost