import { useState, useEffect } from "react"

function App() {
  const [colors, setColors] = useState("white") 

  useEffect(() => {
    const savedColor = localStorage.getItem("bgColor")
    if (savedColor) {
      setColors(savedColor)
    }
  }, [])

  const handelChangeColor = (color) => {
    setColors(color)
    localStorage.setItem("bgColor", color)
  }
  
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: colors}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl cursor-pointer"
          >
            <button
              onClick={() => setColors("cyan")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" 
              style={{backgroundColor: "cyan"}}
            >Cyan</button>
           
            <button
              onClick={() => setColors("yellow")}
              className="outline-none px-4 py-1 rounded-full text-amber-600 shadow-xl cursor-pointer" 
              style={{backgroundColor: "yellow"}}
            >Yellow</button>
           
            <button
              onClick={() => setColors("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" 
              style={{backgroundColor: "purple"}}
            >Purple</button>
           
            <button
              onClick={() => setColors("Lavender")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" 
              style={{backgroundColor: "lavender"}}
            >Lavender</button>
           
            <button
              onClick={() => setColors("Pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" 
              style={{backgroundColor: "pink"}}
            >Pink</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
