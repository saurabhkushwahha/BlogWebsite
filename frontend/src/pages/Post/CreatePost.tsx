import {useEffect, useRef,useState} from 'react'
import Navbar from './NavbarEditor/NavbarEditor'
import defaultBlogBanner from '../../resources/Images/BlogBanner.png'
import Editor from './Editor/Editor'

function CreatePost() {

  const uploadRef=useRef()

  //TODO: using the state to change the ( New_Post ==> BlogTitle) use something useRef If it's possible.....

  const [navTitle,setNavTitle]=useState();
  // useEffect



  const handlekeydown=(e)=>{
    if (e.key==='Enter'||e.keyCode==13)
    {
      e.preventDefault()
    }
  }

  const handleTitleChange=(e)=>{
      let input =e.target

     console.log(input.scrollHeight)
    //  input.style.height='auto'
     input.style.height=`${input.scrollHeight}px`
     setNavTitle(e.target.value)
  }


  const handleUpload= async(e)=>{
     let Image= null
     const file=e.target.files[0]
     if(file){
        const reader=new FileReader()
        reader.onloadend=async()=>{
          uploadRef.current.src= reader.result
          Image=reader.result
        }
        reader.readAsDataURL(file)
     }

  }



  return (
    <>
    <Navbar navTitle={navTitle}/>
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
           className='outline-none  text-4xl font-medium placeholder:opacity-40  resize-none px-4 py-3 h-16 w-full leading-tight bg-transparent rounded ml-5  mt-16 '
           />

         {/* Editor */}
        <Editor/>

      </div>
    </div>
    </>
  )
}

export default CreatePost