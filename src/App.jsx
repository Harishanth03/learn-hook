import { useEffect } from "react";
import { useState } from "react"

function App() {

  const [count ,  setCount] = useState(0);

  const [times , setTimes] = useState(0);

  /*useEffect(() => {

    //1: The code that we want to run
    //2: Optional Return statment
  }, []); //3:Dependancy <Array></Array>*/

  //No dependancy Use Effect

  /*useEffect(() => {

    alert("I am not dependancy");

  });

  //Use Effect with dependency array (Empty dependancy array)

  useEffect(() => {

    console.log("This is Empty dependancy array");

  }, [count]);*/

  useEffect(() => {

    console.log("Mounted");

    return () => console.log("Un-Mounted");

  }, []);


  return (
    <>
      <h3>Count : {count}</h3>
      <h3>Times : {times}</h3>
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <button onClick={() => {setCount(count - 1)}}>-</button>
      <button onClick={() => {setTimes(times  + 1)}}>T</button>
    </>
  )
}

export default App
