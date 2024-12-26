import { Link } from "react-router-dom";
import Navbardropdown from "./Navbardropdown";
import { useEffect, useRef, useState } from "react";
import Button from "../../atoms/buttons/Button";

export default function Navbarbody() {
  const Navbar = useRef(null);
  const [FixedNavbar, setFixedNavbar] = useState(false);

  const scrolltop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop < 90
      ) {
        setFixedNavbar(false);
      } else {
        setFixedNavbar(true);
      }
    };
  }, []);

  return (
    <>
      {/* Global Navbar for all pages -- */}
      <nav
        className={
          FixedNavbar
            ? "navbar navbar-expand-lg navbar-light w-100 Navbar-fixed pt-3 pb-3 shadow"
            : "navbar navbar-expand-lg navbar-light w-100 Navbar-expand"
        }
        ref={Navbar}
      >
        <div className="container">
          <Link className="navbar-brand mr-5" onClick={scrolltop}>
            Navbar
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-5">
              <li className="nav-item">
                <Link className="nav-link" onClick={scrolltop} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={scrolltop} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <div
                  className="dropdown-menu bg-dark"
                  style={{ borderRadius: "6px" }}
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link
                    className="dropdown-item"
                    to="/Service"
                    onClick={scrolltop}
                  >
                    Services
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/servicesdetails"
                    onClick={scrolltop}
                  >
                    ServicesDetails
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </Link>
                <div
                  className="dropdown-menu bg-dark"
                  style={{ borderRadius: "6px" }}
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link
                    className="dropdown-item"
                    to="/blogpost"
                    onClick={scrolltop}
                  >
                    Blog List
                  </Link>
                  <Link className="dropdown-item" to="#" onClick={scrolltop}>
                    Blog
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <div
                  className="dropdown-menu bg-dark"
                  style={{ borderRadius: "6px" }}
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" href="#">
                    Project
                  </Link>
                  <Link className="dropdown-item" href="#">
                    404 page
                  </Link>
                  <Link className="dropdown-item" href="#">
                    FAQ
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={scrolltop} to="/">
                  Contact
                </Link>
              </li>
            </ul>

            {/*  */}
            <Navbardropdown />
            <Button
              text="Hire me"
              className="rounded-pill"
              showiconThree={true}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
