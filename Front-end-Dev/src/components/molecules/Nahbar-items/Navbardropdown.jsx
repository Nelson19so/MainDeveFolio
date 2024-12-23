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
          className="dropdown-menu bg-dark"
          style={{ borderRadius: "6px" }}
          aria-labelledby="dropdownMenuLink"
        >
          <Link className="dropdown-item" href="#">
            Action
          </Link>
          <Link className="dropdown-item" href="#">
            Another action
          </Link>
          <Link className="dropdown-item" href="#">
            Something else here
          </Link>
        </div>
      </div>
    </>
  );
}
