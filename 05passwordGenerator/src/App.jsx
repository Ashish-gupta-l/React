import { useState,useCallback ,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState('8');
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef(null);

  let passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) str+='012456789';
    if(charAllowed) str+='!@#$%^&*()[]';

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char)
    }
    
    setPassword(pass);


  }, [length,numberAllowed,charAllowed,setPassword])

  const copyTextToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
   <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4   my-8 bg-gray-500 font-bold'>
      <h1 className='text-center text-white'> Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4 py-5'>
        <input
         type="text"
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly
         ref={passwordRef}
        />

        <button 
        onClick={copyTextToClipboard}
        
        className='text-white bg-blue-700 outline-none px-3 py-1 shrink-0'
        >Copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
   </>
  )
}

export default App
