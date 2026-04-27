import { Outlet } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AppContextProvider from "./store/AppContextProvider";
import Header from "./components/Header";

function App() {
  return (
    <>
      <AppContextProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Header />
          <Outlet />
        </div>
        <footer style={{ display: "none" }}>This is my footer</footer>
      </AppContextProvider>
    </>
  );
}

export default App;
