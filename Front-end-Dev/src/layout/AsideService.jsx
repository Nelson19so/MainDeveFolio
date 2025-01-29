import { Link } from "react-router-dom";
import imgOne from "../../images/b.jpg";

export default function AsideService() {
  return (
    <>
      <div className="main-container-aside pt-5 pb-5">
        <center>
          <div className="container">
            <div className="container-img-aside">
              <img src={imgOne} alt="" />
              <div className="back-drop--">
                <h1 className="text-white">
                  Start your own project by hiring me to freelance/work for you.
                </h1>
                <h5 className="text-white mb-5">
                  I hope my skills matches your companies requirement
                </h5>
                <Link>Hire Nelson</Link>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
