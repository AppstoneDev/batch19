import { useState } from "react"


export default function Comparison(){
  const [a, setA] = useState("10");
  const [b, setB] = useState(10);

  function showComparison(){
    if(a === b){
      return "condition satisfied";
    }else {
      return "condition failed";
    }
  }

  return(
    <div>
      {showComparison()}
    </div>
  )
}