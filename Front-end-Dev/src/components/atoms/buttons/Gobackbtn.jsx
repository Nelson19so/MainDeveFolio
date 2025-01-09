import { Link } from "react-router-dom";

export default function Gobackbtn({ text, className, displayIcon }) {
  return (
    <>
      <div className="go-back-button">
        <Link to={-1}>
          <button className={className}>
            {displayIcon && (
              <span className="text-white mr-2">
                <i className="fa fa-arrow-left"></i>
              </span>
            )}
            {text}
          </button>
        </Link>
      </div>
    </>
  );
}
