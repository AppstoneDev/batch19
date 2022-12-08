import { useState } from "react"

export default function Mapper() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function showLayout(obj) {
    return (
      <div
        style={{
          border: "3px solid green",
          margin: 10,
          width: 300
        }}
      >
        {obj.name}
        <button>delete</button>
        <button>completed</button>
      </div>
    )
  }

  function handleInput(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    var temp = [...taskList];
    temp.push({ name: task });
    setTaskList(temp);
    // setTaskList([...taskList, { name: task }]);
  }

  return (
    <div>
      <input placeholder="enter task" onChange={handleInput} />
      <button onClick={handleClick} >add</button>
      <h5>to do list</h5>
      {/*  array.function  */}
      {taskList.map(showLayout)}

      <h5>completed list</h5>
    </div>
  )
}