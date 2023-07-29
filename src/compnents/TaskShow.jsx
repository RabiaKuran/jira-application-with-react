import { useState } from "react";
import TaskCreate from "./TaskCreate";
import  TasksContext  from "../context/task";
import { useContext } from "react";

function TaskShow({ task}) {
  const {deleteTaskById, editTaskById} = useContext(TasksContext)

  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(true);
  };
  
  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id,updatedTitle,updatedTaskDesc )
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate= {handleSubmit} ></TaskCreate>
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
