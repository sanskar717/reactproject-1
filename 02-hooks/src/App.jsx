import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  
  const addValue = () => {
    if (counter === 7) {
      return
    }
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // setCounter(counter + 1)
  }   

  const removeValue = () => {
    if (counter === 0) {
      return
    }   
    setCounter(counter - 1)
  }
  

  return (
    <>
      <h1>spt</h1>
      <h2>count value: {counter} </h2>
      <button
        onClick={addValue}
        counter
      >click to add value</button>
      <br />
      <button
        onClick={removeValue}
      >click to decrease value</button>
    </>
  )
}

export default App
