import React from "react";
import { baseContext } from "./BaseContextProvider";
export const appContext = React.createContext();
export default function AppContextProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);
  const [singleTask, setSingleTask] = React.useState({
    taskTitle: "",
    taskDescription: "",
  });
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDescription, setTaskDescirption] = React.useState("");
  const { baseUrl } = React.useContext(baseContext);
  React.useEffect(() => {
    console.log(singleTask);
  }, [singleTask]);
  async function fetchTask() {
    try {
      const result = await fetch(`${baseUrl}/tasks`, {
        method: "GET",
        credentials: "include",
      });
      result.json().then((response) => {
        if (response.success) {
          setTasks(response.message);
        } else {
          console.log("No task are there");
        }
      });
    } catch (e) {
      console.log(e);
    } finally {
      console.log(tasks);
      console.log("Fetch the result of home page");
    }
  }
  async function createTask() {
    const data = {
      taskTitle,
      taskDescription,
    };
    await fetch(`${baseUrl}/create-task`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) =>
        response.json().then((response) => console.log(response))
      )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("execution complete");
      });
  }
  async function fetchSingleTask(id) {
    console.log(id);
    try {
      const params = new URLSearchParams({ id });
      const res = await fetch(`${baseUrl}/task?${params}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        setSingleTask(data.message);
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <appContext.Provider
      value={{
        fetchTask,
        createTask,
        taskTitle,
        setTaskTitle,
        taskDescription,
        setTaskDescirption,
        tasks,
        fetchSingleTask,
        singleTask,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
