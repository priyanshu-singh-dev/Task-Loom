import React from "react";
import { baseContext } from "./BaseContextProvider";
export const appContext = React.createContext();
export default function AppContextProvider({ children }) {
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDescription, setTaskDescirption] = React.useState("");
  const { baseUrl } = React.useContext(baseContext);
  /* this is the fetch the task of the user*/
  async function fetchTask() {
    try {
      const result = await fetch(`${baseUrl}/home`, {
        method: "GET",
        credentials: "include",
      });
      console.log(result.json().then((response) => console.log(response)));
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Fetch the result of home page");
    }
  }
  /* this is to create the task by the user*/
  async function createTask() {
    console.log("function started");
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
    console.log("function ended");
  }
  const [taskId, setTaskId] = React.useState();
  const tempTaskData = [
    { id: 1, taskName: "Greeting", taskDescription: "Greeting to someOne" },
    { id: 2, taskName: "Greeting", taskDescription: "Greeting to someOne" },
    { id: 3, taskName: "Greeting", taskDescription: "Greeting to someOne" },
  ];
  return (
    <appContext.Provider
      value={{
        tempTaskData,
        setTaskId,
        fetchTask,
        createTask,
        taskTitle,
        setTaskTitle,
        taskDescription,
        setTaskDescirption,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
