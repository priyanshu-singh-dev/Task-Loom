import { Outlet } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <header
          style={{
            order: 2,
            // minHeight: "60px",
            // height: "5vh",
            maxHeight: "60px",
            height: "50px",
            backgroundColor: "var(--accent-color)",
          }}
        >
          This is my header
        </header>
        <Outlet />
      </div>
      <footer style={{ display: "none" }}>This is my footer</footer>
    </>
  );
}

export default App;
