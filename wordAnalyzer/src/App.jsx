import { useEffect, useState } from 'react'
import Header from './Header'
import Alert from './Components/Alert'

import './App.css'

function App() {
  const [text, setText] = useState("")
  const [mode, setMode] = useState('black')
 const [alert, setAlert] = useState(null)
 
const showAlert = (message, type) =>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
  setAlert(null)
  },2000)
}


  const toggleMode = ()=>{
    if(mode=== 'black'){
      setMode('gray')
      showAlert("Light Mode Enabled", "success")
    }
    else{
      setMode('black')
      showAlert("Dark Mode Enabled", "success")
    }
  }


  const handleLowerCase = ()=>{
    setText(text.toLocaleLowerCase())
    if(text){
    showAlert("Text Converted To LowerCase", "success")
    }
  }
const textChange = (e)=>{
  setText(e.target.value)
}
const handleUpperCase = ()=>{
  setText(text.toUpperCase())
  if(text){
  showAlert("Text Converted To UpperCase", "success")
  }
}
const wordCount = text.split(" ").filter(Boolean).length;  //The Boolean function converts each element to a boolean value (true or false). It removes any falsy values (such as empty strings, null, or undefined).
const lettersCount = text.trim().length
 
let minutesRead =  wordCount * 0.0008

  return (
    <>
    <Header mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert} />
 <h1>Text Analyzer</h1>
 <div>
 <textarea value={text} onChange={textChange} autoFocus />
 </div>
<button onClick={handleUpperCase}>UpperCase</button>
<span> </span> 
<button onClick={handleLowerCase}>LowerCase</button>
 <p>Number of words:{wordCount} Number of letters:{lettersCount} </p>
 <h3> {minutesRead} Minutes Read</h3> 

    </>
  )
}

export default App
