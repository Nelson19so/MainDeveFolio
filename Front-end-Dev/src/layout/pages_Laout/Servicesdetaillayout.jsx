import { Link } from "react-router-dom";
import Button from "../../components/atoms/buttons/Button";
import serviceOne from "../../images/Services-1.jpg";
import Itemheader from "../header/Itemheader,";
import Pagesheader from "../header/Pagesheader";

export default function Servicesdetaillayout() {
  return (
    <>
      <div className="container-service-layout pt-5 pb-5">
        <div className="container container--">
          <div className="row container-two-box">
            <div className="col-sm-4 container-left mb-5">
              <div className="row w-100">
                <center>
                  <div className="col-*-* top-container p-5 mb-5">
                    <h3 className="text-white text-center mb-5">Category</h3>
                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white">
                        <h5>Front-end Development</h5>{" "}
                        <span>
                          <i className="fa fa-chevron-right"></i>
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </div>
                    </Link>

                    {/*  */}
                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white mt-3">
                        <h5>Back-end Development</h5>{" "}
                        <span>
                          <i className="fa fa-chevron-right"></i>
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </div>
                    </Link>
                    {/*  */}

                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white mt-3">
                        <h5>Web Development</h5>{" "}
                        <span>
                          <i className="fa fa-chevron-right"></i>
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </div>
                    </Link>
                    {/*  */}

                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white mt-3">
                        <h5>Javascript Development</h5>{" "}
                        <span>
                          <i className="fa fa-chevron-right"></i>
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </div>
                    </Link>

                    {/*  */}

                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white mt-3">
                        <h5>Python Development</h5>{" "}
                        <span>
                          <i className="fa fa-chevron-right"></i>
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="col-*-* top-container p-5 mt-5">
                    <h3 className="text-white text-center mb-5">Resume</h3>
                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white">
                        <h5>Get Resume.pdf</h5>{" "}
                        <span>
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </div>
                    </Link>
                    {/*  */}

                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white mt-3">
                        <h5>Get Resume.doc</h5>{" "}
                        <span>
                          <i className="fa fa-chevron-right"></i>
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </div>
                    </Link>
                    {/*  */}

                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white mt-3">
                        <h5>Get Resume.ppt</h5>{" "}
                        <span>
                          <i className="fa fa-chevron-right"></i>
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </div>
                    </Link>
                  </div>
                </center>
              </div>
            </div>

            <div className="col-sm container-right pl-5">
              <div className="row container-inner-- w-100">
                <div className="col-*-* container-img w-100 mb-5">
                  <img
                    src={serviceOne}
                    alt="services-one"
                    className="w-100 h-100"
                  />
                </div>

                <div className="col-*-* container-bottom mt-5">
                  <Pagesheader
                    classNameSubtitle="text-muted"
                    classNameTitle="text-white"
                    title="Web Development can bring your dreams into reality"
                    subtitle="Web Development"
                  />

                  <div className="container-text">
                    <p className="mb-3 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ipsa fuga vel dolorum culpa quod nam, aliquid soluta
                      quasi inventore esse nobis facere? Pariatur minima neque
                      esse, ut ea inventore! Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Delectus quas, dicta et in
                      perferendis, quis iure inventore voluptas hic veniam nobis
                      autem nisi quam quae quidem porro incidunt cumque?
                      Tempora!
                    </p>
                    <p className="mb-3 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ipsa fuga vel dolorum culpa quod nam, aliquid soluta
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, voluptate.
                    </p>
                    <p className="mb-3 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ipsa fuga vel dolorum culpa quod nam, aliquid soluta
                      quasi inventore esse nobis face Lorem ipsum dolor, sit
                      amet consectetur adipisicing elit. Optio maiores, rerum
                      sed culpa ut repellendus veniam suscipit cum obcaecati
                      deserunt?
                    </p>
                  </div>

                  <Itemheader
                    className="text-white mt-5"
                    text="Why choose me?"
                  />
                  <div className="cotainer-text">
                    <p className="text-muted mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Distinctio, qui, repellendus porro veritatis dicta
                      excepturi animi eveniet sapiente ea ex delectus odit illo
                      voluptatem! Quisquam, cumque iusto. Hic, ab nihil!
                    </p>
                    <div className="container-middle mt-5">
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="text-white">Team Workd</h5>
                        </div>
                        <div className="col-sm">
                          <span className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam commodi adipisci assumenda blanditiis
                            aliquid. Iusto quos a, deserunt excepturi libero ut
                            blanditiis eligendi sint quisquam ad non cum amet
                            ratione?
                          </span>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row mt-4">
                        <div className="col-sm-3">
                          <h5 className="text-white">Team Workd</h5>
                        </div>
                        <div className="col-sm">
                          <span className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam commodi adipisci assumenda blanditiis
                            aliquid. Iusto quos a, deserunt excepturi libero ut
                            blanditiis eligendi sint quisquam ad non cum amet
                            ratione?
                          </span>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row mt-4">
                        <div className="col-sm-3">
                          <h5 className="text-white">Team Workd</h5>
                        </div>
                        <div className="col-sm">
                          <span className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam commodi adipisci assumenda blanditiis
                            aliquid. Iusto quos a, deserunt excepturi libero ut
                            blanditiis eligendi sint quisquam ad non cum amet
                            ratione?
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bottom-container mt-3">
                      <article>
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cupiditate sapiente nobis laboriosam, nisi quasi
                          totam maiores earum harum, impedit officia voluptatem
                          ullam voluptates, expedita obcaecati maxime incidunt
                          qui aliquid commodi?
                        </p>
                      </article>
                      <div className="row">
                        <div className="col-sm p-5 text-white">
                          <div className="holder text-center p-5">
                            <h5>Basic</h5>
                            <h1>$200</h1>
                            <p className="text-muted ml-5">/mo</p>
                            <p className="text-muted">01 Remote work</p>
                            <p className="text-muted">01 16 hours services</p>
                            <p className="text-muted">
                              02 base on html, css, javascript
                            </p>
                            <p className="text-muted">
                              03 up to 2 months contract
                            </p>

                            <Button
                              text="Get Started"
                              className="Btn button-services-getstarted"
                              type="button"
                            />
                          </div>
                        </div>
                        {/*  */}
                        <div className="col-sm p-5 text-white">
                          <div className="holder text-center p-5 w-100">
                            <h5>Standard</h5>
                            <h1>$470</h1>
                            <p className="text-muted ml-5">/mo</p>
                            <p className="text-muted">01 Full time service</p>
                            <p className="text-muted">02 24 Hours on work</p>
                            <p className="text-muted">
                              03 Work with high frameworks
                            </p>
                            <p className="text-muted">
                              04 up to 4 monthd contract
                            </p>

                            <Button
                              text="Get Started"
                              className="Btn button-services-getstarted"
                              type="button"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
