import { useState } from "react";
//TRIGGERS
//1. onClick 
//2. onChange

//component
export default function First(){
  //State variables
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  function handleClick(){
    console.log("hello");
    setNum(200);
  }

  function handleInput(){
    console.log("hi from input");
  }

  function handleInput2(){
    setNum2(num2);
  }

  //layout
  return(
    <div>
      <input 
        onChange={handleInput}
        value={num}
      />
      <input 
        onChange={handleInput2}
        placeholder="enter the value of num 2"
      />
      <button onClick={handleClick}>click me</button>
      <br />
      {num}
      <br />
      {num2}
    </div>
  )
}