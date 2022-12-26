import { useState } from "react";
import Child from "./child";

export default function Parent() {
  const [showChild, setShowChild] = useState(false);

  return (
    <div>
      {showChild === true ? <Child /> : "child is not shown"}

      <button
        onClick={() => {
          setShowChild(!showChild);
        }}
      > click me </button>
    </div>
  )
}