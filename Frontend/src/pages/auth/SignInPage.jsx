import React from "react";
import styles from "./SignInPage.module.css";
import MainButton from "../../components/MainButton";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userCountry, setUserCountry] = React.useState("");
  const [userGender, setUserGender] = React.useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log({ userName, userEmail, userPassword, userCountry, userGender });
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.glow}></div>

      <section className={styles.card}>
        <h1>Create account</h1>
        <p>Start organizing your tasks with Task Loom.</p>

        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.inputGroup}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              placeholder="Enter username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              id="userEmail"
              placeholder="Enter email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              placeholder="Enter password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="selectCountry">Country</label>
            <select
              id="selectCountry"
              value={userCountry}
              onChange={(e) => setUserCountry(e.target.value)}
            >
              <option value="">Select country</option>
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="Australia">Australia</option>
              <option value="UK">United Kingdom</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Gender</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setUserGender(e.target.value)}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setUserGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>

          <MainButton title="Create account" onClicked={submitHandler} />

          <span className={styles.bottomText}>
            Already have an account? <Link to="/login">Log in</Link>
          </span>
        </form>
      </section>
    </main>
  );
}
