import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center pt-6">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} /> //el valor de la propiedad es la tarea que se este recorriendo en ese momento
      ))}
    </div>
  );
}

export default TaskList;
