import { Outlet } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <header>This is my header</header>
      <Outlet />
      <footer>This is my footer</footer>
    </>
  );
}

export default App;
