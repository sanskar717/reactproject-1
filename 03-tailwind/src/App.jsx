import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)
  let myVar = {
    username: 'Ustad~Dante',
    age: 69,
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-yellow-300 text-purple-700 p-4 rounded-xl'> tailwind testu  </h1>
      <Card username="sans" btnText="click me"/>
      <Card username= "Dante" />
    </>
  )
}

export default App
