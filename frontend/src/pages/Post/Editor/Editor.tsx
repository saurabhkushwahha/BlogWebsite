import { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import {Tool} from  './ToolComponents.tsx'
function Editor() {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'textEditor',
      data: '',
      placeholder: 'Let me tell you something....',
      tools:Tool,


    });

  }, []);

  return <div id="textEditor" ></div>;
}

export default Editor;
