import { Link } from "react-router-dom";

export default function Navbardropdown() {
  return (
    <>
      <div className="dropdown show mr-2">
        <Link
          className="btn dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Skills
        </Link>

        <div
          className="dropdown-menu bg-dark shadow"
          style={{ borderRadius: "6px" }}
          aria-labelledby="dropdownMenuLink"
        >
          <Link className="dropdown-item">
            <span>Languages</span>
          </Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" href="#">
            HTML / CSS
          </Link>
          <Link className="dropdown-item" href="#">
            Javascript
          </Link>
          <Link className="dropdown-item" href="#">
            Python
          </Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item">
            <span>Frameworks</span>
          </Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" href="#">
            React
          </Link>
          <Link className="dropdown-item" href="#">
            Django
          </Link>
          <Link className="dropdown-item" href="#">
            Django-rest-framework
          </Link>
          <Link className="dropdown-item" href="#">
            Node.js & Express
          </Link>
        </div>
      </div>
    </>
  );
}
