import { useEffect } from "react";
import { useState } from "react"

function App() {

  const [count ,  setCount] = useState(0);

  /*useEffect(() => {

    //1: The code that we want to run
    //2: Optional Return statment
  }, []); //3:Dependancy <Array></Array>*/

  //No dependancy Use Effect

  useEffect(() => {

    alert("I am not dependancy");

  });

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <button onClick={() => {setCount(count - 1)}}>-</button>
    </>
  )
}

export default App
