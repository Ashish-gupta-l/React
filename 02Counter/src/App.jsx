import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);

  //  let counter =5;
   const AddValue = () =>{
    console.log(counter);   
    // counter +=1;
    if(counter<20){
      setCounter(counter + 1);
    }
   }

   const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
   }

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={AddValue}
      >Add</button>
      <br />
      <button
      onClick={removeValue}
      >Remove</button>
    </>
  )
}

export default App
