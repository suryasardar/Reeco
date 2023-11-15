import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white" href="/">
          Reeco
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-white" href="/store">
              store
            </a>
            <a className="nav-link text-white" href="/order">
              order
            </a>
          </div>
            <a className="nav-link text-white" href="/Analytics">
              Analytics
            </a>
          <div className="navbar-nav ms-auto p-2 bd-highlight">
            <a
              className="nav-link disabled text-white"
              href="/email"
              tabIndex="-1"
            >
              HelloSurya
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
