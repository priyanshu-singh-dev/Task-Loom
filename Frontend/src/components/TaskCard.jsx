import React from "react";
import styles from "./styles/TaskCard.module.css";
import MainButton from "./MainButton";
import { baseContext } from "../store/BaseContextProvider";
export default function TaskCard({ taskName, taskDescription, id }) {
  const { setTaskId } = React.useContext(baseContext);

  return (
    <div className={styles.mainContainer}>
      <h2>{taskName}</h2>
      <h3>{taskDescription}</h3>
      <div className={styles.buttonContainer}>
        <MainButton
          title={<h4>Read more</h4>}
          height={50}
          width={150}
          onClicked={() => {
            setTaskId(id);
          }}
          disabled={false}
        />
      </div>
    </div>
  );
}
