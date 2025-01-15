import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Pagesheader from "../header/Pagesheader";
import Subscribeform from "../../components/molecules/forms/Subscribeform";
import { useState } from "react";

// footer components layout for all blog web pages
// ----------------------------------------------->
export default function Footer() {
  const [alert, setAlert] = useState(false);

  // Handle copy details
  const handlecopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("copied", text, "to clipboard");
    });
    setAlert(true);
  };

  return (
    <>
      <div className="container-footer pt-5">
        <footer>
          <div className="main-wrapper pb-3">
            <div className="container-items mb-5">
              <Pagesheader
                classNameSubtitle="text-center text-muted"
                classNameTitle="text-center text-white"
                subtitle="Get Latest Update"
                title="Subscribe for my News Letter"
              />

              <div className="container-fluid container-input">
                <Subscribeform />
              </div>

              <div className="container-main-contact mt-5 container pr-3 pl-3">
                <div className="row">
                  <div className="col-lg container-items-footer">
                    <div className="row">
                      <Link
                        to=""
                        className="Icon"
                        onClick={() => handlecopy("nelsonsomto19@gmail.com")}
                      >
                        <FontAwesomeIcon icon="fa fa-phone" />
                      </Link>
                      <div className="col text-white mt-3">
                        <h3>nelsonsomto19@gmail.com</h3>
                      </div>
                    </div>
                  </div>
                  {/* Phone no */}
                  <div className="col-lg container-items-footer ---2">
                    <div className="row">
                      <Link
                        to=""
                        className="Icon"
                        onClick={() => handlecopy("+234 8036 1317 21")}
                      >
                        <i className="fa fa-phone text-white"></i>
                      </Link>
                      <div className="col text-white mt-3">
                        <h3>+234 8036 1317 21</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 container-items-footer ---2 mt-3">
                    <div className="row">
                      <Link to="" className="Icon-">
                        <i className="fa fa-facebook-f text-white"></i>
                      </Link>
                      <Link to="" className="ml-4 Icon-">
                        <i className="fa fa-x-twitter text-white"></i>
                      </Link>
                      <Link className="ml-4 Icon-">
                        <i className="fa fa-instagram text-white"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-bottom d-flex justify-content-between mt-5">
              <div>
                2024 website made with{" "}
                <i className="fa fa-heart text-danger"></i> by{" "}
                <Link to="https://github.com/Nelson19so">Nelson</Link>
              </div>
              <div>
                <p>NelsonWebDevSite</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
