import React from "react";
import style from "./styles/Home.module.css";
import TaskCard from "../components/TaskCard";
import { appContext } from "../store/AppContextProvider";
export default function HomePage() {
  const { tempTaskData, fetchTask } = React.useContext(appContext);
  React.useEffect(() => {
    fetchTask();
  }, []);
  return (
    <main className={style.mainContainer}>
      <section className={style.mainSubContainer}>
        <aside className={style.taskCardMainContainer}>
          {tempTaskData.map((item, index) => {
            return (
              <TaskCard
                taskName={item.taskName}
                taskDescription={item.taskDescription}
                id={item.id}
                key={index}
              />
            );
          })}
        </aside>
        <section className={style.mainTaskContainer}></section>
      </section>
    </main>
  );
}
