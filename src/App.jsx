import { Outlet, Link } from "@tanstack/react-router";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
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
