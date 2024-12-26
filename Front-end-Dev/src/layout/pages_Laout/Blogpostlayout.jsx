import { Link } from "react-router-dom";
import Button from "../../components/atoms/buttons/Button";
import Pagesheader from "../header/Pagesheader";

export default function Blogpostlayout({ pagesheader }) {
  return (
    <>
      <div className="container-tricks-and-tips shadow pt-5 pb-5">
        <div className="container-fluid container-items">
          {pagesheader && (
            <Pagesheader
              title="List of my Blog Post List"
              classNameTitle="text-white text-center"
              classNameSubtitle="text-muted text-center"
              subtitle="Blog List"
            />
          )}

          {/*  */}

          <div className="container-items container">
            <div className="container-tricks-and-tips shadow">
              <div className="container-img"></div>
              <div className="container-text--">
                <span className="-">
                  <p className="p-1 mr-1">Business -</p>
                  <p className="p-2">08 March 2024</p>
                </span>
                <h6>
                  Don't wait untill you officially started business to line
                  these up
                </h6>
              </div>
              <div className="container-btn">
                <Link to="/blogdetails">
                  <Button
                    text="Read More"
                    showiconThree={true}
                    className="btn button-to-blog-details pt-4 pb-4 pl-4 pr-4"
                    type="button"
                  />
                </Link>
              </div>
            </div>

            <div className="container-tricks-and-tips shadow">
              <div className="container-img"></div>
              <div className="container-text--">
                <span className="-">
                  <p className="p-1 mr-1">Business -</p>
                  <p className="p-2">08 March 2024</p>
                </span>
                <h6>
                  Don't wait untill you officially started business to line
                  these up
                </h6>
              </div>
              <div className="container-btn">
                <Link to="/blogdetails">
                  <Button
                    text="Read More"
                    showiconThree={true}
                    className="btn button-to-blog-details pt-4 pb-4 pl-4 pr-4"
                    type="button"
                  />
                </Link>
              </div>
            </div>

            <div className="container-tricks-and-tips shadow">
              <div className="container-img"></div>
              <div className="container-text--">
                <span className="-">
                  <p className="p-1 mr-1">Business -</p>
                  <p className="p-2">08 March 2024</p>
                </span>
                <h6>
                  Don't wait untill you officially started business to line
                  these up
                </h6>
              </div>
              <div className="container-btn">
                <Link to="/blogdetails">
                  <Button
                    text="Read More"
                    showiconThree={true}
                    className="btn button-to-blog-details pt-4 pb-4 pl-4 pr-4"
                    type="button"
                  />
                </Link>
              </div>
            </div>

            <div className="container-tricks-and-tips shadow">
              <div className="container-img"></div>
              <div className="container-text--">
                <span className="-">
                  <p className="p-1 mr-1">Business -</p>
                  <p className="p-2">08 March 2024</p>
                </span>
                <h6>
                  Don't wait untill you officially started business to line
                  these up
                </h6>
              </div>
              <div className="container-btn">
                <Link to="/blogdetails">
                  <Button
                    text="Read More"
                    showiconThree={true}
                    className="btn button-to-blog-details pt-4 pb-4 pl-4 pr-4"
                    type="button"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
