import { useState } from 'react'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)
  function addVal(){
    setCount(count+1)
  }
  function removeVal(){
    setCount(count-1)
  }
  return (
    <>
     <h1> Counter </h1>
     <h1>Count : {count}</h1>
     <button onClick={addVal}>Add Value</button>
     <button onClick={removeVal}>Remove Value</button>
    </>
  );
}

export default App
