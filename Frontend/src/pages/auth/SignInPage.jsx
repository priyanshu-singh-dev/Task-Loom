import React from "react";
import styles from "./SignInPage.module.css";
import MainButton from "../../components/MainButton";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const baseUrl = "http://localhost:3000";

  const [userName, setUserName] = React.useState("hello");
  const [userEmail, setUserEmail] = React.useState("hello@gmail.com");
  const [userPassword, setUserPassword] = React.useState("hello");
  const [userCountry, setUserCountry] = React.useState("");
  const [userGender, setUserGender] = React.useState("");

  const [loading, setLoading] = React.useState(false); // ✅ loading state

  const isFormValid =
    userName.trim() &&
    userEmail.trim() &&
    userPassword.trim() &&
    userCountry &&
    userGender;

  async function submitHandler(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const data = {
      userName,
      userEmail,
      userPassword,
      userCountry,
      userGender,
    };

    try {
      const response = await fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        <h1>Create account</h1>
        <p>Start organizing your tasks with Task Loom.</p>

        <form className={styles.form} onSubmit={submitHandler}>
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
          />

          <span className={styles.bottomText}>
            Already have an account? <Link to="/login">Log in</Link>
          </span>
        </form>
      </section>
    </main>
  );
}
