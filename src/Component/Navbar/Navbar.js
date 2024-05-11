import "./navbar.css";
import { Nav } from "../Assent/Data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <header>
      <div className="container">
        <nav>
          <h1>ch</h1>

          {toogle ? (
            <IoCloseCircleSharp onClick={() => setToogle(!toogle)} />
          ) : (
            <FaBars onClick={() => setToogle(!toogle)} />
          )}
          
            <ul>
              {Nav.map((el) => {
                return (
                  <li key={el.id}>
                    <a href="home" >{el.title}</a>
                  </li>
                );
              })}
              <button>Sign in</button>
            </ul>
         
          {toogle && (
            <ul className="navbar">
              {Nav.map((el) => {
                return (
                  <li key={el.id}>
                    <a href="/">{el.title}</a>
                  </li>
                );
              })}
              <button>Sign in</button>
            </ul>)}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
