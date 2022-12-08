import { useState } from "react"


export default function Conditional() {
  const [val, setVal] = useState(false);
  return (
    <div
      style={{
        height: 100,
        width: 100,
        backgroundColor: val === true ? "green" : "red",
        borderRadius: val === true ? 5 : "50%"
      }}
    >
      {val === true ? "you are true" : "you are false"}
    </div>
  )
}