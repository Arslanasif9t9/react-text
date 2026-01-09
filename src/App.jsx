import { useState } from "react"
import Form from "./Form"
import Nav from "./Nav"
// import './App.css'

function App() {
  const [msgBox, setMsgBox] = useState('')
  const handleMsgBox = (msg) => {
    setMsgBox(msg)
    setTimeout(() => {
        setMsgBox('')
      }, 3000);
  }

  return (
    <>
      <div className="min-h-screen w-[98.9vw] bg-slate-900 flex flex-col font-sans text-slate-200">
        <div
          id="msgBox"
          className={`fixed top-5 right-5 z-[99] ${msgBox ? "" : "hidden"} items-center gap-2 bg-green-500 text-white px-4 py-3 rounded shadow-lg`}>
          {msgBox}
        </div>
        <Nav />
        <Form handle={handleMsgBox} />
      </div>
    </>
  )
}

export default App
