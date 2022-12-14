import { useState } from "react"


export default function Fetcher() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => (res.json()))
      .then((resJson) => {
        console.log(resJson.data);
      })
  }

  return (
    <div>
      <button onClick={getUsers}>get users</button>
    </div>
  )
}