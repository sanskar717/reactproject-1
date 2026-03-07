import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAlloow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState('')

  // useRef-Hook
  const paswordRef = useRef(null)

  const passwordGenerater = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numAlloow) str += '0123456789'
    if (charAllow) str += '~!@#$%^&*()_+-={}[]|;:"<>,.?/'
    
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)   
    }

    setPassword(password)

  }, [length, numAlloow, charAllow, setPassword])
  
  const copyPasswordToClipBoard = useCallback(() => {
    paswordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password]) 

  useEffect(() => {
    passwordGenerater()
  }, [length, numAlloow, charAllow, passwordGenerater])
   
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-blue-700'>
      <h1 className='text-4xl text-center text-white font-serif my-3'>
        Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white font-mono'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly  
            ref={paswordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 cursor-pointer'
          > copy </button> 
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer bg-gray-300 w-32'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAlloow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" className='text-white'>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllow}
              id="charcterInput"
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}
            />
              <label htmlFor='charcterInput' className='text-white'>Character</label>   
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
