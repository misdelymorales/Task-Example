import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //nombre del contexto

export function TaskContextProvider(props) {
  //componente que engloba todo (TaskContextProvider)

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    //y creo el componente
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
