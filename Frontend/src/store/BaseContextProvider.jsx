import React, { useEffect } from "react";
export const baseContext = React.createContext();
export default function BaseContextProvider({ children }) {
  const [taskId, setTaskId] = React.useState();
  const tempTaskData = [
    { id: 1, taskName: "Greeting", taskDescription: "Greeting to someOne" },
    { id: 2, taskName: "Greeting", taskDescription: "Greeting to someOne" },
    { id: 3, taskName: "Greeting", taskDescription: "Greeting to someOne" },
  ];
  return (
    <baseContext.Provider value={{ tempTaskData, setTaskId }}>
      {children}
    </baseContext.Provider>
  );
}
