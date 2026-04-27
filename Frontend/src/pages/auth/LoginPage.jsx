import React from "react";
import styles from "./LoginPage.module.css";
import MainButton from "../../components/MainButton";
import { Link } from "react-router-dom";
import { baseContext } from "../../store/BaseContextProvider";

export default function LoginPage() {
  const {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    loading,
    setLoading,
    isFormValid,
    loginHandler,
  } = React.useContext(baseContext);
  return (
    <main className={styles.mainContainer}>
      <div className={styles.glow}></div>
      <section className={styles.card}>
        <h1 title="Welcome back" aria-label="Login page">
          Welcome back
        </h1>
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
            New here?{" "}
            <Link title="sigin page" to="/signin">
              Create an account
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
}
