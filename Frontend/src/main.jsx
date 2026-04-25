import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignInPage from "./pages/auth/SignInPage.jsx";
import Base from "./Base.jsx";
import HomePage from "./pages/HomePage.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Base />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "home",
        element: <App />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
