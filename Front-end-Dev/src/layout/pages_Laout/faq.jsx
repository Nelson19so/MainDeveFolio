import { Link } from "react-router-dom";
import Button from "../../components/atoms/buttons/Button";
import Pagesheader from "../header/Pagesheader";

export default function Faq() {
  return (
    <>
      <div className="container-faq pt-5 pb-5">
        <div className="container">
          <Pagesheader
            classNameSubtitle="text-muted text-center"
            classNameTitle="text-white text-center"
            title="Most asked questions from my client"
            subtitle="_Faq"
          />

          <div className="row">
            <div className="col-lg-4 container-faq-">
              <h1 className="text-white">
                Frequently Asked <strong>Questions</strong>
              </h1>
              <p className="text-muted mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              {/* <Link to="/faq">
                <Button
                  text="Visit Faq Page"
                  className="mt-3 button-visit-faq pl-4 pr-4 p-3"
                />
              </Link> */}
            </div>
            <div className="col-lg container-faq-">
              <div className="container-items-faq p-3">
                <h5>
                  <span className="text-warning mr-3">01</span>
                  <span className="text-muted">
                    Non consectetur a erat nam at lectus urna duis?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium odio perspiciatis officia perferendis rerum quis?
                    Necessitatibus ipsum deleniti exercitationem quae?
                  </p>
                </div>
              </div>

              <div className="container-items-faq p-3 mt-3">
                <h5>
                  <span className="text-warning mr-3">02</span>
                  <span className="text-muted">
                    Non consectetur a erat nam at lectus urna duis?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium odio perspiciatis officia perferendis rerum quis?
                    Necessitatibus ipsum deleniti exercitationem quae?
                  </p>
                </div>
              </div>

              <div className="container-items-faq p-3 mt-3">
                <h5>
                  <span className="text-warning mr-3">03</span>
                  <span className="text-muted">
                    Non consectetur a erat nam at lectus urna duis?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium odio perspiciatis officia perferendis rerum quis?
                    Necessitatibus ipsum deleniti exercitationem quae?
                  </p>
                </div>
              </div>

              <div className="container-items-faq p-3 mt-3">
                <h5>
                  <span className="text-warning mr-3">04</span>
                  <span className="text-muted">
                    Non consectetur a erat nam at lectus urna duis?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium odio perspiciatis officia perferendis rerum quis?
                    Necessitatibus ipsum deleniti exercitationem quae?
                  </p>
                </div>
              </div>

              <div className="container-items-faq p-3 mt-3">
                <h5>
                  <span className="text-warning mr-3">05</span>
                  <span className="text-muted">
                    Non consectetur a erat nam at lectus urna duis?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium odio perspiciatis officia perferendis rerum quis?
                    Necessitatibus ipsum deleniti exercitationem quae?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
