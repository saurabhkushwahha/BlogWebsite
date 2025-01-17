import Code   from '@editorjs/code'
import  Header from '@editorjs/header'
// import  Image from  '@editorjs/image'
import  Embed from  '@editorjs/embed'
import  Link from  '@editorjs/link'
import  InlineCode  from '@editorjs/inline-code'
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
         defaultLevel:2,
       }
    },

    embed : {
        class:Embed,
        config:{
           services:{
             youtube:true,
             twitter:true,
           },
        },
    },

    link :{
        class:Link,
        inlineToolbar:true,
    } ,

    inlineCode:{
      class:InlineCode,
    },

    marker: {
        class:Marker,
        inlineToolbar:true,
    },

    list: {
        class: List,
        inlineToolbar: true,
        config: {
            defaultStyle: 'unordered', // Use 'ordered' for numbered lists
            defaultItem: {
                text: 'List item', // Default text for a new list item
                counterType: 'decimal', // For ordered lists (optional)
            },
        },
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
            shortcut: 'CMD+SHIFT+Q', // Optional shortcut for quick insertion
        },
    },
    simpleImage:SimpleImage,


}

