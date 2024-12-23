import { Link } from "react-router-dom";

export default function Gobackbtn() {
  return (
    <>
      <div className="go-back-button">
        <Link to={-1}>
          <button className="btn">Go back</button>
        </Link>
      </div>
    </>
  );
}
