import React from "react";
import styles from "./styles/CreateTask.module.css";
import MainButton from "../components/MainButton";
import { appContext } from "../store/AppContextProvider";
export default function CreateTask() {
  const {
    createTask,
    taskTitle,
    setTaskTitle,
    taskDescription,
    setTaskDescirption,
  } = React.useContext(appContext);
  function handleCreateTask() {
    console.log("this is the handle create task function");
  }
  return (
    <>
      <main className={styles.mainContainer}>
        <section className={styles.innerContainer}>
          <div style={{ width: "100%" }}>
            <h1 title="Task title" aria-label="task title">
              Task title
            </h1>
            <input
              type="text"
              value={taskTitle}
              onChange={(event) => setTaskTitle(event.target.value)}
            />
          </div>
          <div>
            <h2 title="Task Description" aria-label="Task Description">
              Task description
            </h2>
            <textarea
              rows={7}
              value={taskDescription}
              onChange={(event) => setTaskDescirption(event.target.value)}
            />
          </div>
          <div className={styles.inserFile}>
            <h3 title="Insert file" aria-label="Task Description">
              Inser file
            </h3>
            <input type="file" title="insert file" disabled={true} />
          </div>
          <MainButton title="Create task" onClicked={createTask} />
        </section>
      </main>
    </>
  );
}
