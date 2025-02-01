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
                Here are most asked questions from my loved client. over here
                you will see a lot of questions my client asks the replies they
                get. don't forget to ask your questions when ever you feel like,
                i will always answer.
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
                    what languages are Nelson's base and how many years of
                    experince?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    Nelson is a full-stack developer that uses technologies like
                    HTML5, CSS3, and JavaScripts for front-end development.
                    Nelson also uses frameworks like React, Bootstrap, tailwind,
                    scss for fast and easy UI development. and for back-end,
                    Nelson uses technologies like{" "}
                    <code>
                      python and frameworks like DJANGO, DJANGO-REST-FRAMEWORK
                      and then finally NODE.JS and EXPRESS.
                    </code>
                  </p>
                </div>
              </div>

              <div className="container-items-faq p-3 mt-3">
                <h5>
                  <span className="text-warning mr-3">02</span>
                  <span className="text-muted">
                    How Long does it take for Nelson to finish up a full
                    project?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    In contex, finishing a full project can be depending,
                    meaning it depends on the type of project, frameworks
                    required. for example, building a project that requires high
                    level frameworks like React or Django-rest-framework can
                    also be depending, whether i will be working with team.
                    working with team is faster in development but working a
                    lone with low level frameworks can be faster in development.
                  </p>
                </div>
              </div>

              <div className="container-items-faq p-3 mt-3">
                <h5>
                  <span className="text-warning mr-3">03</span>
                  <span className="text-muted">
                    Does Nelson have a team to he works with, or he works a
                    lone?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    As it is now, i don't have any team i am working with, i
                    only work with companies team and follows rules that abide
                    the development. working with team depends on if the project
                    me to work alone and as a developer, i might meet the tough
                    side then i will requires other help, then i can request or
                    call for a help.
                  </p>
                </div>
              </div>

              <div className="container-items-faq p-3 mt-3">
                <h5>
                  <span className="text-warning mr-3">04</span>
                  <span className="text-muted">
                    Does Nelson work without being payed, or payed before
                    working?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    As a serios developer, i value my time and effor soo i don't
                    request for a full payment before before working, rather i
                    collect half payment before tackling a project, as this help
                    me and my client more serios to pursue what we wan't to
                    achieve.
                  </p>
                </div>
              </div>

              <div className="container-items-faq p-3 mt-3">
                <h5>
                  <span className="text-warning mr-3">05</span>
                  <span className="text-muted">
                    How experinced is Nelson at this technology industry, how
                    good is he?
                  </span>
                </h5>

                <div className="container-items pl-4 pr-3">
                  <p className="text-muted mt-4">
                    I have spent up to 2+ years of experince in the industry,
                    making me more knowledge with a lot of project that helped
                    me get more experince. i have a lot of project built, not
                    just project but high project that enables high flow of my
                    knowledge to increase.
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
