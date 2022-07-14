import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const Navigate = useNavigate()
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark navbar-dark text-center"
      style={{ fontFamily: "Oxygen" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          style={{ cursor: "pointer" }}
          onClick={useNavigate("/")}
        >
          Mycronations
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => Navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={useNavigate("/")}
              >
                Browse
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ cursor: "pointer" }}
                href="https://discord.gg/UnQBWwZnzT"
                target="_blank"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-light"
            style={{ marginRight: "4px", fontWeight: "bold" }}
            onClick={() => Navigate("/login")}
          >
            Login
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-dark text-white"
            style={{ fontWeight: "normal" }}
            onClick={() => Navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
