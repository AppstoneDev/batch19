import { useState } from "react";
import Processor from "./processor";
//triggers
//1. onClick
//2. onChange

export default function Calculator(){
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function handleInput1(e){
    setNum1(parseInt(e.target.value));
  }

  function handleInput2(e){
    setNum2(parseInt(e.target.value));
  }

  function handleClick(){
    setResult(num1+num2);
  }

  return(
    <div>
      Number 1: 
      <input
        id="inputFirst"
        placeholder="enter num 1"
        type={"number"}
        onChange={handleInput1}
      />
      <br />
      Number 2: 
      <input
        id="inputSecond"
        placeholder="enter num 2"
        type={"number"}
        onChange={handleInput2}
      />
      <br />

      <Processor type="Add" a={num1} b={num2} setResult={setResult} />
      <Processor type="Subtract" a={num1} b={num2} setResult={setResult}/>
      <Processor type="Multiply" a={num1} b={num2} setResult={setResult}/>
      <Processor type="Divide" a={num1} b={num2} setResult={setResult}/>
      <br />
      result: {result}
    </div>
  )
}