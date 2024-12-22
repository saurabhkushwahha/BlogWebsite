import Code   from '@editorjs/code'
import  Header from '@editorjs/header'
import  Image from  '@editorjs/image'
import  Embed from  '@editorjs/embed'
import  Link from  '@editorjs/link'
import  InlineTool  from '@editorjs/inline-code'
import Marker from '@editorjs/marker'
import List  from '@editorjs/list'
import Quote from  "@editorjs/quote"
import   SimpleImage   from "@editorjs/simple-image"

export  const Tool={
    code : {
        class:Code,
        inlineToolbar:true,
    },
    header :{
       class:Header,
       config:{
         levels:[2,3],
         default:2
       }
    },

    embed : Embed,
    link : Link,
    inlineTool : InlineTool,
    marker: Marker,
    list:{
        class:List,
        inlineToolbar:true
    },
    quote:{
        class:Quote,
        inlineToolbar:true
    },
    simpleImage:SimpleImage,


}

