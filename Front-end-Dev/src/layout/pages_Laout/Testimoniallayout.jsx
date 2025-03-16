import Pagesheader from "../header/Pagesheader";
import mainImg from "../../../images/lee-campbell-DtDlVpy-vvQ-unsplash.jpg";
import { useEffect, useState } from "react";

export default function Testimoniallayout({
  showcarousel,
  showpagesheader,
  closePptst,
}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/app/testimonial/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <>
      <div className="container-testimonials">
        <div className="container pb-5 pt-5">
          <div>
            {showpagesheader && (
              <Pagesheader
                classNameSubtitle="text-muted text-center"
                classNameTitle="text-white text-center"
                title="What my clients thinks about me"
                subtitle="Testimonials"
              />
            )}
          </div>

          <center>
            <div
              className={
                showcarousel
                  ? "container-testimonial-items mt-5 carousel slide carousel-dark text-center"
                  : "container-testimonial-items text-center mt-5"
              }
              id="carouselExampleControls"
              data-ride="carousel"
            >
              {showcarousel && (
                <>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </>
              )}
              {/* inner */}
              <div className="carousel-inner py-4">
                <div className={showcarousel && "carousel-item active"}>
                  <div className="row container--items">
                    <div className="col-lg-4 h-100 mb-3">
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <img src={mainImg} alt="" />
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
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

                    <div
                      className={
                        showcarousel
                          ? "col-lg-4 d-none d-lg-block h-100 mb-3"
                          : "col-lg-4 d-block h-100 mb-3"
                      }
                    >
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <i className="fa fa-user mt-4 text-white"></i>
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
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

                    <div
                      className={
                        showcarousel
                          ? "col-lg-4 d-none d-lg-block h-100 mb-3"
                          : "col-lg-4 d-block h-100 mb-3"
                      }
                    >
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <i className="fa fa-user mt-4 text-white"></i>
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
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
                  </div>
                </div>

                <div className={showcarousel && "carousel-item"}>
                  <div className="row container--items mt-3">
                    <div className="col-lg-4 h-100 mb-3">
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <i className="fa fa-user mt-4 text-white"></i>
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
                            </p>
                          </article>
                        </div>

                        <div className="bottom-items">
                          <center>
                            <h6 className="text-white">Austin pelista</h6>
                            <span
                              className="text-muted"
                              style={{ fontSize: "smaller" }}
                            >
                              software Developer
                            </span>
                          </center>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        showcarousel
                          ? "col-lg-4 d-none d-lg-block h-100 mb-3"
                          : "col-lg-4 d-block h-100 mb-3"
                      }
                    >
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <i className="fa fa-user mt-4 text-white"></i>
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
                            </p>
                          </article>
                        </div>

                        <div className="bottom-items">
                          <center>
                            <h6 className="text-white">Austin pelister</h6>
                            <span
                              className="text-muted"
                              style={{ fontSize: "smaller" }}
                            >
                              software Developer
                            </span>
                          </center>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        showcarousel
                          ? "col-lg-4 d-none d-lg-block h-100 mb-3"
                          : "col-lg-4 d-block h-100 mb-3"
                      }
                    >
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <i className="fa fa-user mt-4 text-white"></i>
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
                            </p>
                          </article>
                        </div>

                        <div className="bottom-items">
                          <center>
                            <h6 className="text-white">Austin pelista</h6>
                            <span
                              className="text-muted"
                              style={{ fontSize: "smaller" }}
                            >
                              software Developer
                            </span>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row container--items">
                    <div className="col-lg-4 h-100 mb-3">
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <i className="fa fa-user mt-4 text-white"></i>
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
                            </p>
                          </article>
                        </div>

                        <div className="bottom-items">
                          <center>
                            <h6 className="text-white">junior Duke</h6>
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

                    <div
                      className={
                        showcarousel
                          ? "col-lg-4 d-none d-lg-block h-100 mb-3"
                          : "col-lg-4 d-block h-100 mb-3"
                      }
                    >
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <i className="fa fa-user mt-4 text-white"></i>
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
                            </p>
                          </article>
                        </div>

                        <div className="bottom-items">
                          <center>
                            <h6 className="text-white">junior Duke</h6>
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

                    <div
                      className={
                        showcarousel
                          ? "col-lg-4 d-none d-lg-block h-100 mb-3"
                          : "col-lg-4 d-block h-100 mb-3"
                      }
                    >
                      <div className="container h-100 p-4 shadow-lg">
                        <center>
                          <div className="top-container">
                            <div className="wrapper-img">
                              <i className="fa fa-user mt-4 text-white"></i>
                            </div>
                          </div>
                        </center>
                        <div className="container-articles mt-3">
                          <article>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Atque, numquam. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Modi, quos. Lorem
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Illum, voluptas!
                            </p>
                          </article>
                        </div>

                        <div className="bottom-items">
                          <center>
                            <h6 className="text-white">junior Duke</h6>
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
                  </div>
                </div>
              </div>

              {/* users testimonials */}
              {closePptst && (
                <div className="container--items">
                  {data.length ? (
                    <>
                      {data.map((testimonial) => (
                        <div className="items h-100 mb-3" key={testimonial.id}>
                          <div className="container h-100 p-4 shadow-lg">
                            <center>
                              <div className="top-container">
                                <div className="wrapper-img">
                                  {testimonial.profile ? (
                                    <img
                                      src={`http://127.0.0.1:8000${testimonial.profile}`}
                                      alt="profile"
                                    />
                                  ) : (
                                    <i className="fa fa-user mt-4 text-white"></i>
                                  )}
                                </div>
                              </div>
                            </center>
                            <div className="container-articles mt-3 mb-3">
                              <article>
                                <p className="text-muted">
                                  {testimonial.testimonial}
                                </p>
                              </article>
                            </div>

                            <div className="bottom-items">
                              <center>
                                <h6 className="text-white">
                                  {testimonial.name}
                                </h6>
                                <span
                                  className="text-muted"
                                  style={{ fontSize: "smaller" }}
                                >
                                  {testimonial.work}
                                </span>
                              </center>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <div>
                        <h4 className="text-warning mt-5">
                          All data were found
                        </h4>
                      </div>
                    </>
                  )}
                </div>
              )}
              {/* users testimonials ends */}
              {/*  */}
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
