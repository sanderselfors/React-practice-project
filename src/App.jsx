import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>Created with ❤️ by Monde</small>
      </footer>
    </>
  );
}

export default App;
