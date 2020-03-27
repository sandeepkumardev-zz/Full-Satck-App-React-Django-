import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import img from "./sandy.png";
import img2 from "./arrows.png";

export default function Header(props) {
  return (
    <React.Fragment>
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 pt-4">
                <h4 className="text-white">About</h4>
                <center>
                  <img
                    className="rounded my-3 img-thumbnail"
                    style={{ width: "200px" }}
                    src={img}
                    alt="img"
                  />
                </center>
                <p className="text-muted">
                  This application developed by Sandy Ji. He is React Js &
                  Django Developer ❤.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 pt-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled pt-3">
                  <li>
                    <a
                      href="mailto:sandeepypb@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Email me
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com/web.dev.sandy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/web.dev_sandy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Follow on Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/sandy-ji-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      My portfolio (Github)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand">ToDo App</div>
          <span>
            <img
              src={img2}
              alt="up down"
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
          </span>
        </nav>
      </header>
    </React.Fragment>
  );
}
