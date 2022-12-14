import { useState } from "react"

export default function Mapper() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const showLayout = (obj, i) => (
    <div
      style={{
        border: "3px solid green",
        margin: 10,
        width: 300
      }}
    >
      {obj.name}
      <button onClick={() => { handleDelete(i) }}>delete</button>
      <button onClick={() => { handleComplete(i) }}>completed</button>
    </div>
  )

  function handleDelete(index) {
    var temp = [...taskList];
    temp.splice(index, 1);
    setTaskList(temp);
    //code to delete from list
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

  function handleComplete(index) {
    //1. identify which element has to be removed
    //2. add that element to completed list
    //3. remove that element from task list 
  }

  return (
    <div>
      {/* LAYOUT TO ADD TASK */}
      <input placeholder="enter task" onChange={handleInput} />
      <button onClick={handleClick} >add</button>

      {/* TO DO LIST */}
      <h5>to do list</h5>
      {taskList.map(showLayout)}

      {/* COMPLETED LIST */}
      <h5>completed list</h5>
      {completedList.map((obj) => {
        return (
          <div>
            {obj.name}
          </div>
        )
      })}
    </div>
  )
}