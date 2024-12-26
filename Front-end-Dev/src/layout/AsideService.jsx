import { Link } from "react-router-dom";
import imgOne from "../../images/Drop-1.jpg";

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
                  Let's make build up/manage your project for you.
                </h5>
                <Link>Click me to get started</Link>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
