import { useState } from "react"


export default function Conditional(){
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(){
    setLoggedIn(!loggedIn);
    // if(loggedIn === true){
    //   setLoggedIn(false);
    // } else{
    //   setLoggedIn(true);
    // }
  }

  return(
    <div>
      {loggedIn === true ? <button onClick={handleLogin}>logout</button> : <button onClick={handleLogin}>login</button> }
      {loggedIn === true ? "you are logged in" : "you are logged out" }
      {/* if(loggedIn === true){ <button> logout </button>}else{ <button>login</button> } */}
    </div>
  )
}