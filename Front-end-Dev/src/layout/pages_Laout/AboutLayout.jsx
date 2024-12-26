import Pagesheader from "../header/Pagesheader";
import Itemheader from "../header/Itemheader,";

// Images
import AboutOne from "../../../images/About/About-1.jpg";
import AboutTwo from "../../../images/About/About-2.jpg";

export default function AboutLayout({ pagesheader }) {
  return (
    <>
      <div className="container-about-layout">
        <div className="container pt-5 pb-5">
          {pagesheader && (
            <Pagesheader
              classNameSubtitle="text-center text-muted"
              classNameTitle="text-center text-white"
              subtitle="About page"
              title="About me and my awesome work"
            />
          )}

          <div className="row container-service-grid">
            <div className="col-lg-5 container-inner">
              <div className="row imgage-grid">
                <div className="container">
                  <div className="col-*-* w-100 img--">
                    <img src={AboutOne} alt="About-one" />
                  </div>
                  <div className="col-*-* w-100 img-- mt-4">
                    <img src={AboutTwo} alt="About-2" />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg right-container-about">
              <div className="container p-1 pt-5 h-100">
                <Itemheader
                  text="Who is Nelson?"
                  textTwo="About Me"
                  className="text-white"
                />
                <div className="container-- mt-4">
                  <span className="text-muted">
                    My Name is <code>Nelson, a Web developer</code> seeking to
                    freelance for comapnies looking for junior developers to
                    help them innovate/maintain and develope a web application
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-muted">
                    On this blog, I'll be sharing my thoughts, experiences, and
                    knowledge on web development, from the basics to advanced
                    topics.
                  </span>
                </div>

                <div className="container mt-4">
                  <div className="row container--2 h-100">
                    <div className="col-md p-0 h-100 -container- pr-3">
                      <div className="col-*-* top--">
                        <i className="fa fa-laptop-code text-white"></i>
                      </div>
                      <div className="col-*-* mt-3">
                        <span className="text-muted">
                          <Itemheader text="About One" className="text-white" />
                          Hi, I'm Nelson, a web developer with a passion for
                          creating dynamic and user-friendly websites.{" "}
                          <kbd>
                            {" "}
                            With 2 years of experience in the field,
                          </kbd>{" "}
                          I've developed a passion for creating innovative and
                          effective websites that meet the needs of businesses
                          and users alike.
                        </span>
                      </div>
                    </div>
                    {/*  */}
                    <div className="col-md p-0 h-100 -container- -about--2 pr-3">
                      <div className="col-*-* top--">
                        <i className="fa fa-laptop-code text-white"></i>
                      </div>
                      <div className="col-*-* mt-3">
                        <span className="text-muted">
                          <Itemheader text="About Two" className="text-white" />
                          Welcome to my web development blog, a resource for web
                          developers, designers, and entrepreneurs looking to
                          stay up-to-date on the latest trends, technologies,
                          and best practices in web development.
                        </span>
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
