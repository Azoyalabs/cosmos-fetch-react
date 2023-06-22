import "./index.css";
import "./app.css";

import { HelloWorld } from "./components/HelloWorld";
import reactLogo from "@/assets/react.svg";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <img
          alt="React logo"
          className="logo"
          src={reactLogo}
          width="120"
          height="120"
        />

        <div className="wrapper">
          <HelloWorld msg="Welcome to Web3!"></HelloWorld>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            {/* <RouterLink to="/">Home</RouterLink> */}
            {/* <RouterLink to="/about">About</RouterLink> */}
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default App;
