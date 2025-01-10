import { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import {Tool} from  './ToolComponents.tsx'
function Editor() {
  let editorInstance ;

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'textEditor',
      data: '',
      placeholder: 'Let me tell you something....',
      tools:Tool,


    });

    editorInstance=editor

    return ()=>[
      editor.destroy()
    ]


  }, []);


  const handleSave=async()=>{
    try {
    const response= await editorInstance?.save()
    console.log(response)

    } catch (error) {
     console.log("Error in saving data",error)
    }

  }


  return <div id="textEditor" className=' selection:text-lime-300 selection:bg-slate-500/35'></div>;
}

export default Editor;
