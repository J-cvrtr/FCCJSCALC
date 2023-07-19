import  { marked } from 'marked';
import './App.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/marked/5.1.1/marked.min.js';
import React from'react'
import { useState } from 'react'
function App () {
  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3
  **bold text**

  *italicized text*

  1. First item
  2. Second item
  3. Third item

  - First item
  - Second item
  - Third item

  \`code\`

  [title](https://www.example.com)

  ![alt text](image.jpg)

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  > blockquote
  
  `);

marked.setOptions({
  breaks: true
})

  return (
      
  <div className="App">

  <textarea
    id="editor" 
    onChange={(event)=> {
      setText(event.target.value);
    }}
    value={text}
    ></textarea>
  <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>

</div>
    )



}

export default App;
