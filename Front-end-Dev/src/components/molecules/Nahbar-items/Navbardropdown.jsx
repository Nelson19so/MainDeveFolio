import { Link } from "react-router-dom";

export default function Navbardropdown({ className }) {
  return (
    <>
      <div className={className}>
        <div className="dropdown show">
          <Link
            className="btn dropdown-toggle"
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
            <span className="text-info dropdown-item">Languages</span>

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

            <span className="text-info dropdown-item">Frameworks</span>

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
      </div>
    </>
  );
}
