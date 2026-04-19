import React from "react";
import styles from "./styles/Welcome.module.css";
import MainButton from "../components/MainButton";
import { Link, useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const nav = useNavigate();
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
          <MainButton title="Enter the Loom" onClicked={() => nav("login")} />

          <Link
            to="/signin"
            style={{ textDecoration: "none" }}
            className={styles.joinTheLoomButton}
          >
            <p>Want to join the loom</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
