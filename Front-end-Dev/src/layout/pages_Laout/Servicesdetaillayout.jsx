import { Link } from "react-router-dom";
import Button from "../../components/atoms/buttons/Button";
import serviceOne from "../../../images/ServiceDetails.jpg";
import Itemheader from "../header/Itemheader,";
import Pagesheader from "../header/Pagesheader";

export default function Servicesdetaillayout() {
  return (
    <>
      <div className="container-service-layout pt-5 pb-5">
        <div className="container container--">
          <div className="row container-two-box">
            <div className="col-lg-4 container-left mb-5">
              <div className="row w-100">
                <center>
                  <div className="col-*-* top-container p-5 container-top-items">
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

                  <div className="col-*-* top-container p-5 mt-5 container-top-items">
                    <h3 className="text-white text-center">
                      Resume
                      <i className="fa fa-download text-muted ml-3"></i>
                    </h3>
                    <div className="mb-3">
                      <span className="text-muted">
                        Download different types of Resume file
                      </span>
                    </div>

                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white">
                        <h5>Get Resume.pdf</h5>{" "}
                        <h5>
                          <i className="fa fa-file-pdf"></i>
                        </h5>
                      </div>
                    </Link>
                    {/*  */}

                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white mt-3">
                        <h5>Get Resume.doc</h5> {/* <span> */}
                        <h5>
                          <i className="fa fa-file-word"></i>
                        </h5>
                        {/* </span> */}
                      </div>
                    </Link>
                    {/*  */}

                    <Link>
                      <div className="container-text p-4 d-flex justify-content-between text-white mt-3">
                        <h5>Get Resume.ppt</h5>{" "}
                        <h5>
                          <i className="fa fa-file-powerpoint"></i>
                        </h5>
                      </div>
                    </Link>
                  </div>
                </center>
              </div>
            </div>

            <div className="col-lg container-right pl-5">
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
                      Website Development is where our dream come's true, from
                      bringing out our own technology ideals to live to bringing
                      out peoples or our client ideals to live, as of 2025 this
                      website Development is topping because everyone wants
                      wesite that displays details about a particular something,
                      this is where top businesses come to advertise their
                      product making website Development topping in the industry
                      of technology.
                    </p>

                    <p className="mb-3 text-muted">
                      As web Development grows, human also grows to bring out
                      new ideas to make new technology, but making website is
                      where i stand fully, making website and website
                      applications is what i was made to do, as it gives me more
                      joy to bring dreams to reality.
                    </p>

                    <p className="mb-3 text-muted">
                      Bringing your dreams to live is where i love
                      participating, working with teams and learning from
                      experts is what i love as it helps me develope my skills
                      and acquire new knowledge to help me for high and more
                      complex project. my work is to joing team bring out what
                      the whole world will love and get inspired.
                    </p>
                  </div>

                  <Itemheader
                    className="text-white mt-5"
                    text="Why choose me?"
                  />
                  <div className="container-text">
                    <p className="text-muted mt-3">
                      Choosing me to work for you is a create ideal and a good
                      choice so far as i and my skills matches matches the
                      project requirements. I am a good smart dev with soft
                      skills of team work, obeying the rules to complete the
                      project. I am smart enough and have the sight to see what
                      my client are trying to pursue and not just having the
                      sight, but sharing with team members and bringing it to
                      live. Here is a brief reasons to hire me.
                    </p>
                    <div className="container-middle mt-5">
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="text-white">
                            Team Work & collaboration
                          </h5>
                        </div>
                        <div className="col-sm">
                          <span className="text-muted">
                            <p>
                              I am a good developer that loves team work. Team
                              work has been what i always want to see in a
                              project, i participate with team members, sharing
                              ideas together and obeying and listening to other
                              peoples opinion. As this leads to a peacfull and
                              successfull completion of a project.
                            </p>
                          </span>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row mt-4">
                        <div className="col-sm-3">
                          <h5 className="text-white">Problem Solving Skills</h5>
                        </div>
                        <div className="col-sm">
                          <span className="text-muted">
                            As a developer, problem solving is the major skills
                            to have, being a critical thinker helps develope a
                            website or web app. in the world of today, all
                            proffession needs problem solving and i have the
                            quality skills to handle problem in situations that
                            requires them, as this helps finish up a website
                            application
                          </span>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row mt-4">
                        <div className="col-sm-3">
                          <h5 className="text-white">
                            Communication & Understanding
                          </h5>
                        </div>
                        <div className="col-sm">
                          <span className="text-muted">
                            In Development, communiation is and effective skills
                            to acquire, being able to understand and know what
                            your client is trying to say. as a developer i am, i
                            have confident listening to my client and asking the
                            questions on where that is supposed as this is a
                            very important part in the Development, knowing,
                            hearing and understanding what your client wants.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bottom-container mt-3">
                      <article>
                        <p className="text-muted">
                          As a honest developer i am, i made sure that display
                          my real acquired skills, as not to please my client,
                          but to show them a proof that my services are needed
                          in the Development section, my priority is to develope
                          a proficient web apllication.
                        </p>
                      </article>
                      <div className="row">
                        <div className="col-sm p-5 text-white">
                          <div className="holder text-center p-5">
                            <h5>Basic</h5>
                            <h1>$300.00</h1>
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
                            <h1>$1200.00</h1>
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
