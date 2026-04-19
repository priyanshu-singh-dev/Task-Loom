import React from "react";
import styles from "./styles/Welcome.module.css";
import MainButton from "../components/MainButton";

export default function WelcomePage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.glow}></div>

      <section className={styles.card}>
        <h1>Task Loom</h1>

        <p>
          Weave your tasks into a clear, focused workflow. Plan smarter, stay
          organized, and turn ideas into completed work—one thread at a time.
        </p>

        <div className={styles.buttonContainer}>
          <MainButton title="Enter the Loom" />

          <button className={styles.joinTheLoomButton}>
            <p>Want to join the loom</p>
          </button>
        </div>
      </section>
    </main>
  );
}
