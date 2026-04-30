import React from "react";
import styles from "./styles/TaskCard.module.css";
import MainButton from "./MainButton";
import { appContext } from "../store/AppContextProvider";
export default function TaskCard({ taskName, taskDescription, id }) {
  const { fetchSingleTask, singleTask } = React.useContext(appContext);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.taskTitle} title={taskDescription}>
        {taskName}
      </h2>

      <h3 className={styles.taskDescription}>{taskDescription}</h3>
      <div className={styles.buttonContainer}>
        <MainButton
          title={
            <h4
              style={{
                fontSize: "15px",
              }}
            >
              {singleTask._id == id ? "Reading" : "Read More"}
            </h4>
          }
          height={"fit-content"}
          width={"fit-content"}
          onClicked={() => {
            fetchSingleTask(id);
          }}
          disabled={singleTask._id == id ? true : false}
        />
      </div>
    </div>
  );
}
