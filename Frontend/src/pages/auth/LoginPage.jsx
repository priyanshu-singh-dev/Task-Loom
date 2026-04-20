import React from "react";
import styles from "./LoginPage.module.css";
import MainButton from "../../components/MainButton";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const baseUrl = "http://localhost:3000";
  const [userEmail, setUserEmail] = React.useState("hello111@gmail.com");
  const [userPassword, setUserPassword] = React.useState("hello");
  const [loading, setLoading] = React.useState(false);
  const isFormValid = userEmail.trim() && userPassword.trim();
  async function loginHandler(event) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    const data = { userEmail, userPassword };
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className={styles.mainContainer}>
      <div className={styles.glow}></div>
      <section className={styles.card}>
        <h1>Welcome back</h1>
        <p>Log in to continue weaving your tasks into progress.</p>
        <form className={styles.form} onSubmit={loginHandler}>
          <div className={styles.inputGroup}>
            <label htmlFor="userEmail">User Email</label>
            <input
              type="email"
              id="userEmail"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              autoComplete="on"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="userpassword">Password</label>
            <input
              type="password"
              id="userpassword"
              placeholder="Enter your password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              autoComplete="on"
              required
            />
          </div>
          <MainButton
            title={loading ? "Logging in..." : "Log in"}
            disabled={!isFormValid || loading}
            onClicked={loginHandler}
          />
          <span className={styles.bottomText}>
            New here? <Link to="/signin">Create an account</Link>
          </span>
        </form>
      </section>
    </main>
  );
}
