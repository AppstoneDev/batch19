import { useState } from "react"

//receive values 
//calculate result
//send back result
export default function Processor({ a, b, setResult, type }) {

  function handleProcess() {
    if (type === "Add") {
      setResult(a + b);
    } else if (type === "Subtract") {
      setResult(a - b);
    } else if (type === "Multiply") {
      setResult(a * b);
    } else if (type === "Divide") {
      setResult(a / b);
    }
  }
  return (
    <div>
      <button onClick={handleProcess}>
        {type}
      </button>
    </div>
  )
}