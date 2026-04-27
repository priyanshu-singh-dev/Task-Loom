import React from "react";
import styles from "./SignInPage.module.css";
import MainButton from "../../components/MainButton";
import { Link } from "react-router-dom";
import { baseContext } from "../../store/BaseContextProvider";

export default function SignInPage() {
  const {
    signInHandler,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userCountry,
    setUserCountry,
    userGender,
    setUserGender,
    loading,
    setLoading,
  } = React.useContext(baseContext);
  const isFormValid =
    userName.trim() &&
    userEmail.trim() &&
    userPassword.trim() &&
    userCountry &&
    userGender;
  return (
    <main className={styles.mainContainer}>
      <div className={styles.glow}></div>

      <section className={styles.card}>
        <h1 title="Create account" aria-label="Signin Page">
          Create account
        </h1>
        <p>Start organizing your tasks with Task Loom.</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              id="userEmail"
              value={userEmail}
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              value={userPassword}
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="selectCountry">Country</label>
            <select
              id="selectCountry"
              value={userCountry}
              required
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
                  required
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
          <MainButton
            title={loading ? "Creating..." : "Create account"}
            disabled={!isFormValid || loading}
            onClicked={signInHandler}
          />

          <span className={styles.bottomText}>
            Already have an account?{" "}
            <Link title="login page" to="/login">
              Log in
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
}
