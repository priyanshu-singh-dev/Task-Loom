import React from "react";
import styles from "./LoginPage.module.css";
import MainButton from "../../components/MainButton";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  function loginHandler(event) {
    event.preventDefault();
    console.log({ userEmail, userPassword });
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.glow}></div>

      <section className={styles.card}>
        <h1>Welcome back</h1>
        <p>Log in to continue weaving your tasks into progress.</p>

        <form className={styles.form} onSubmit={loginHandler}>
          <div className={styles.inputGroup}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <label htmlFor="userEmail">UserEmail</label>
            </div>
            <input
              type="text"
              id="userEmail"
              placeholder="Enter your userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              autoComplete="on"
            />
          </div>

          <div className={styles.inputGroup}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <label htmlFor="userpassword">Password</label>
            </div>

            <input
              type="password"
              id="userpassword"
              placeholder="Enter your password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              autoComplete="on"
            />
          </div>

          <MainButton title="Log in" onClicked={loginHandler} />

          <span className={styles.bottomText}>
            New here? <Link to="/signin">Create an account</Link>
          </span>
        </form>
      </section>
    </main>
  );
}
