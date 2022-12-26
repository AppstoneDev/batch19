import { useEffect, useState } from "react"

export default function Child() {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);

  //when component is added to screen
  useEffect(() => {
    //API to fetch profile data 
    console.log("child is rendered on the screen");
  }, [])

  useEffect(() => {
    console.log("child is updated");
  }, [val])

  //when component is removed from screen
  useEffect(() => {
    //destry all values and variables
    return ()=>{
      console.log("child is being removed from screen")
    }
  }, [])

  return (
    <div>
      hi from child
      <button
        onClick={() => {
          setVal(val + 1);
        }}
      >
        inc
      </button>
    </div>
  )
}