import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const baseContext = React.createContext();

export default function BaseContextProvider({ children }) {
  const nav = useNavigate();
  /*
  Auth functionality
  */
  const baseUrl = "http://localhost:3000";
  const [userName, setUserName] = React.useState("hello");
  const [userEmail, setUserEmail] = React.useState("hello@gmail.com");
  const [userPassword, setUserPassword] = React.useState("hello");
  const [userCountry, setUserCountry] = React.useState("");
  const [userGender, setUserGender] = React.useState("");
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
      if (result.success) {
        nav("/home");
      }
    } catch (e) {
      console.error("we are facing some error while login ");
    } finally {
      setLoading(false);
    }
  }
  async function signInHandler(e) {
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
    } catch (e) {
      console.error("we are facing some error while signin");
    } finally {
      setLoading(false);
    }
  }
  return (
    <baseContext.Provider
      value={{
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
        isFormValid,
        loginHandler,
        signInHandler,
        baseUrl,
      }}
    >
      {children}
    </baseContext.Provider>
  );
}
