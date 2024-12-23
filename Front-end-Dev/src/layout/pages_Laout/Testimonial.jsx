import Itemheader from "../header/Itemheader,";
import Pagesheader from "../header/Pagesheader";

export default function Testimonial() {
  return (
    <>
      <div className="container-testimonials">
        <div className="container pb-5 pt-5">
          <div>
            <Pagesheader
              classNameSubtitle="text-muted text-center"
              classNameTitle="text-white text-center"
              title="What my clients thinks about me"
              subtitle="Testimonials"
            />
          </div>

          <div className="container-testimonial-items mt-5">
            <div className="row container--items">
              <div className="col-sm h-100 mb-3">
                <div className="container h-100 p-4">
                  <center>
                    <div className="top-container">
                      <div className="wrapper-img">
                        <i className="fa fa-user text-white"></i>
                      </div>
                    </div>
                  </center>
                  <div className="container-articles mt-3">
                    <article>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque, numquam. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Modi, quos. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Illum, voluptas!
                      </p>
                    </article>
                  </div>

                  <div className="bottom-items">
                    <center>
                      <h6 className="text-white">Morgan Duke</h6>
                      <span
                        className="text-muted"
                        style={{ fontSize: "smaller" }}
                      >
                        Web Developer
                      </span>
                    </center>
                  </div>
                </div>
              </div>

              <div className="col-sm h-100 mb-3">
                <div className="container h-100 p-4">
                  <center>
                    <div className="top-container">
                      <div className="wrapper-img">
                        <i className="fa fa-user text-white"></i>
                      </div>
                    </div>
                  </center>
                  <div className="container-articles mt-3">
                    <article>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque, numquam. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Modi, quos. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Illum, voluptas!
                      </p>
                    </article>
                  </div>

                  <div className="bottom-items">
                    <center>
                      <h6 className="text-white">Morgan Duke</h6>
                      <span
                        className="text-muted"
                        style={{ fontSize: "smaller" }}
                      >
                        Web Developer
                      </span>
                    </center>
                  </div>
                </div>
              </div>

              <div className="col-sm h-100 mb-3">
                <div className="container h-100 p-4">
                  <center>
                    <div className="top-container">
                      <div className="wrapper-img">
                        <i className="fa fa-user text-white"></i>
                      </div>
                    </div>
                  </center>
                  <div className="container-articles mt-3">
                    <article>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque, numquam. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Modi, quos. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Illum, voluptas!
                      </p>
                    </article>
                  </div>

                  <div className="bottom-items">
                    <center>
                      <h6 className="text-white">Morgan Duke</h6>
                      <span
                        className="text-muted"
                        style={{ fontSize: "smaller" }}
                      >
                        Web Developer
                      </span>
                    </center>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
