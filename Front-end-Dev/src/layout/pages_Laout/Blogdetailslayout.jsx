import blogMain from "../../../images/blogdetails.jpg";
import Pagesheader from "../header/Pagesheader";
import { Link } from "react-router-dom";

export default function Blogdetailslayout() {
  return (
    <>
      <div className="container-layout-blogdetails pt-5 pb-5">
        <div className="container">
          <div className="container-img-blogDetails mb-5">
            <img src={blogMain} alt="blog-main" />
          </div>
          <div className="container--- row">
            <div className="container-details col-md">
              <article>
                <div>
                  <Pagesheader
                    classNameSubtitle="text-muted mt-5"
                    subtitle="Nelson Web dev Site"
                    title="Welcome to Nelson's website Dev Blog."
                    classNameTitle="text-white"
                  />

                  <p className="mt-5 text-muted">
                    Welcome to my Website Development blog website, on this
                    blog, i will be sharing details about this blog. My name is
                    Nelson, i'm a full-stack Developer, a front-end dev and
                    back-end dev, looking to work for my client's and deliver
                    astonishing works. how in deliver my works is what my
                    client's loves, as of the recent testimonials.
                  </p>

                  <p className="mt-5 text-muted">
                    On this blog, i'll be sharing Front-End Dev and Back-End Dev
                    plus launching optimization and others. My goal is to make
                    it easy for my client to reach out to me and also use this
                    blog to showcase my client my awesome works in the services
                    page, were i have my projects posted/rendered there. for
                    client to see and explore, as it's important to show
                    evidence to stand out.
                  </p>

                  <p className="mt-5 text-muted">
                    If you have any any question or you want yo reach out to me,
                    please do not hesitate ro reach out to me ASAP as i'm always
                    ready to work, answer any questions. i am always happy to
                    respond to my client as my concern is they happiness and
                    satisfaction. do not forget to come to me privatly by
                    reaching out to "+234 803 613 1721" or{" "}
                    <Link to="emailto: nelsonsomto19@gmail.com">Email me.</Link>{" "}
                    i will always be there waiting for you.
                  </p>
                </div>

                <div>
                  <Pagesheader
                    classNameTitle="text-white"
                    title="How to complete a project?"
                  />
                  <p className="text-muted mb-5">
                    There several ways to complete a project depending on the
                    requirement's and need of the project. But as it is, you can
                    still apply few solution which i have over here and about to
                    share with you.
                  </p>
                </div>

                <div className="container-2">
                  <div className="row">
                    <div className="container-main col-md-2 mb-3">
                      <div className="rounded rounded-pill">
                        <i className="fa fa-fire text-white"></i>
                      </div>
                    </div>
                    {/*  */}
                    <div className="container-text col-md">
                      <h4 className="text-white">
                        Ideal Generating & planning
                      </h4>
                      <p className="text-muted">
                        Having an ideal or planning on what you want to create
                        or develope is the first step of starting and completing
                        a project. having and ideal and planning makes dev
                        faster and easy as it makes no sense cooking without
                        knowing what you are cooking, that's why ideal
                        generating and planning is the first step to take before
                        starting a project as having an ideal makes it easy to
                        finish up a project because we know where our
                        Development will start and end
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="container-main col-md-2 mb-3">
                      <div className="rounded rounded-pill">
                        <i className="fa fa-bug text-white"></i>
                      </div>
                    </div>
                    {/*  */}
                    <div className="container-text col-md">
                      <h4 className="text-white">Debbuging</h4>
                      <p className="text-muted">
                        Debbuging is the mid level to tak when handling a
                        project, whether large, medium and small project. as
                        this helps fish out all errors and their source to help
                        the web app work correctly and prevent any issues when
                        using this website application. Debbuging is essential
                        in a web app before taking an further action, whether
                        small, medium or large project
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="container-main col-md-2 center mb-3">
                      <div className="rounded rounded-pill">
                        <i className="fa fa-rocket text-white"></i>
                      </div>
                    </div>
                    {/*  */}
                    <div className="container-text col-md">
                      <h4 className="text-white">Testing & Launching</h4>
                      <p className="text-muted">
                        Launching and testing is the final step to take in a
                        project as it shows when a project is finished with the
                        dev. buying domain and the others comes in handly before
                        launching. Testing helps a lot to test and know whether
                        the web application works correctly or still needs
                        further attention for the dev or design, as this
                        finalise a standard project.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Pagesheader
                    classNameTitle="text-white"
                    title="Project result summary"
                  />
                  <p className="text-muted mt-3">
                    As a result of the informations provided above, taking this
                    action will help make your website faster as removing bugs
                    can fasten your website and ideal generating and planning a
                    project comes first, because knowing what your want can help
                    give us knowledge on how to bring it to live. as a result of
                    testing and launching, this helps project accessible online
                    and make it easy for client to use, as this is usually the
                    last step to take when embacking in a project that needs
                    users to have access to use the web site.
                  </p>
                  <p className="mt-4 text-muted">
                    Using this steps in a project can be efficient for a website
                    application that is takend serios in the development. taking
                    necessary step needed to make a standard project can be very
                    depending on requirement and need but they're major steps
                    takend above other steps as a result of these steps stated
                    here, the website will be perfectly going well with well
                    planned architectural structure.
                  </p>
                </div>
              </article>
            </div>
            {/*  */}
            {/* <div className="container-2 col-md-4"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
