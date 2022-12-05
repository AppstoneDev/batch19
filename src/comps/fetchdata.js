import { useState } from "react";

export default function FetchData(){
  const [userList, setUserList] = useState([]);

  const handleClick = () => {
    fetch("https://reqres.in/api/users?page=2")
    .then((res)=> res.json())
    .then((resJson)=>{
      setUserList(resJson.data);
    })
  }

  return(
    <div>
      <button onClick={handleClick}>get data</button>
    </div>
  )
}

