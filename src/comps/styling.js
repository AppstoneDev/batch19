import { useState } from "react";
import "./style.css";

const mycustomstyle = {
  backgroundColor: "red",
  padding: 10,
  width: 200,
  borderRadius: 20
}

export default function Styling() {
  const [toggleColor, setToggleColor] = useState(false);
  function handleLogin() {
    setToggleColor(!toggleColor);
  }
  return (
    <div>
      <button onClick={handleLogin}>toggle</button>
      <div style={mycustomstyle}>
        this is my div 1
      </div>
      <div
        style={{
          backgroundColor: toggleColor === true ? "#00ff00" : "#ff0000",
          width: 300,
          borderRadius: toggleColor === true ? 5 : 50
        }}
      >
        this is my div 2
      </div>
      <div className="div3">
        this is my div 3
      </div>
    </div>
  )
}