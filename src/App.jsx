import { useContext, useEffect } from "react";
import "./App.css";
import TaskCreate from "./compnents/TaskCreate";
import TaskList from "./compnents/TaskList";
import  TasksContext  from "./context/task";

function App() {
  const {fetchTasks} = useContext(TasksContext)
  useEffect(()=>{
    fetchTasks();
  },[])

 

  return (
    <div className="App">
      <TaskCreate></TaskCreate>
      <h1>Görevler</h1>
      <TaskList/>
    </div>
  );
}

export default App;
