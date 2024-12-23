import { Link } from "react-router-dom";
import Button from "../../components/atoms/buttons/Button";
import Input from "../../components/atoms/input/Input";
import Pagesheader from "../header/Pagesheader";

// footer components layout for all blog web pages
// ----------------------------------------------->
export default function Footer() {
  return (
    <>
      <div className="container-footer">
        <footer>
          <div className="main-wrapper pb-3">
            <div className="container-items">
              <Pagesheader
                classNameSubtitle="text-center text-muted"
                classNameTitle="text-center text-white"
                subtitle="Get Latest Update"
                title="Subscribe for my News Letter"
              />

              <div className="container-fluid container-input">
                <Input
                  type="email"
                  placeholder="demo@example.com"
                  className="email-subscribe rounded-pill"
                />
                <Button
                  type="button"
                  text="Subscribe Now"
                  className="button-subscribe rounded-pill ml-3 btn"
                />
              </div>

              <div className="container-main-contact">
                <div className="container--contact">
                  <div className="container-i mr-3">
                    <i className="fa fa-phone text-white"></i>
                  </div>
                  <div className="container-details">
                    <h6>+11 234 4232 42323</h6>
                  </div>
                </div>

                <div className="container--contact">
                  <div className="container-i mr-3">
                    <i className="fa fa-envelope text-white"></i>
                  </div>
                  <div className="container-details">
                    <h6>+11 234 4232 42323</h6>
                  </div>
                </div>

                <div className="container--contact-2 ml-2">
                  <div className="container-i mr-4">
                    <i className="fa fa-whatsapp bold text-white"></i>
                  </div>
                  <div className="container-i mr-4">
                    <i className="fa fa-facebook bold text-white"></i>
                  </div>
                  <div className="container-i mr-4">
                    <i className="fa fa-instagram bold text-white"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-bottom d-flex justify-content-between">
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
