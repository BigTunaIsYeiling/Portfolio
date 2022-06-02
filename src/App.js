import AnimatedRoutes from "./components/AnimatedRoutes";
import "./scss/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, NavLink,HashRouter } from "react-router-dom";
import { useState } from "react";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  return (
    <HashRouter>
      <div className="page">
        <div className="page-content d-flex flex-column p-5">
          <div className="container">
            <header className="d-flex align-items-center justify-content-between flex-row">
              <div className="logo">Big Tuna</div>
              <nav className="d-md-block d-none navie">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="rounded-pill laca">
                    <a href={require("./assets/aa.pdf")} download>
                      CV
                      <FontAwesomeIcon
                        icon="fa-solid fa-circle-arrow-down"
                        className="ms-1"
                        color="black"
                        opacity={0.7}
                      />
                    </a>
                  </li>
                </ul>
              </nav>
              {isOpen && (
                <nav className="nav d-md-none d-flex">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="rounded-pill laca">
                      <a href={require("./assets/aa.pdf")} download>
                        CV
                        <FontAwesomeIcon
                          icon="fa-solid fa-circle-arrow-down"
                          className="ms-1"
                          color="black"
                          opacity={0.7}
                        />
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
              <div onClick={toggleMenu} className="burger d-flex d-md-none">
                <div className={isOpen ? "bar close" : "bar"}></div>
                <div className={isOpen ? "bar close" : "bar"}></div>
                <div className={isOpen ? "bar close" : "bar"}></div>
              </div>
            </header>
          </div>
          <AnimatedRoutes />
        </div>
      </div>
    </HashRouter>
  );
}
