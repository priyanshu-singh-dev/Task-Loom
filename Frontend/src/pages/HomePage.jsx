import React from "react";
import styles from "./styles/Home.module.css";
import TaskCard from "../components/TaskCard";
import Header from "../components/Header";
import { appContext } from "../store/AppContextProvider";
import MainButton from "../components/MainButton";

export default function HomePage() {
  const { fetchTask, tasks, singleTask, setSingleTask } =
    React.useContext(appContext);

  React.useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      <div className={styles.taskLayout}>
        <main className={styles.taskLayout__container}>
          <aside className={styles.taskList}>
            {tasks.map((item) => {
              return (
                <TaskCard
                  key={item._id}
                  taskName={item.taskTitle}
                  taskDescription={
                    item.taskDescription.slice(
                      0,
                      item.taskDescription.length / 2 > 30 ? 50 : 10
                    ) + "..."
                  }
                  id={item._id}
                />
              );
            })}
          </aside>
          {singleTask.taskTitle !== "" ? (
            <section className={styles.taskViewer}>
              <div style={{ margin: "10px 10px" }}>
                <h1 className={styles.taskViewer__title}>
                  {singleTask.taskTitle}
                </h1>
                <p className={styles.taskViewer__description}>
                  {singleTask.taskDescription}
                </p>{" "}
              </div>
              <div>
                <MainButton title={"Delete"} bgColor={"var(--danger-red)"} />
                <MainButton title={"Edit"} />
              </div>
            </section>
          ) : (
            ""
          )}
        </main>
      </div>
    </>
  );
}
