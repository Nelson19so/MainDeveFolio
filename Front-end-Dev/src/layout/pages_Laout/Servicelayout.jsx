import Pagesheader from "../header/Pagesheader";

export default function Servicelayout({ pageheader }) {
  return (
    <>
      <div className="container-service-layout-- pt-5 pb-5">
        <div className="container service-container-inner-">
          {pageheader && (
            <Pagesheader
              classNameSubtitle="text-muted text-center"
              classNameTitle="text-white text-center"
              subtitle="Services"
              title="Services i Provide for my client"
            />
          )}
          <div className="row">
            <div className="col-lg container--">
              <div className="container p-5 shadow-lg">
                <i className="fa fa-terminal text-white header-text mb-3"></i>
                <h3 className="text-white mb-3 mt-3">Development</h3>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">HTML/CSS Design</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Javascript</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Python</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">React</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Django</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg container--">
              <div className="container p-5 shadow-lg">
                <i className="fas fa-brain text-white header-text mb-3"></i>
                <h3 className="text-white mb-3 mt-3">Soft Skills</h3>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Leadership</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Problem Solving</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">TeamWork & collaboration</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Trust & Respect</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Communication</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg container--">
              <div className="container p-5 shadow-lg">
                <i className="fa fa-rocket text-white header-text mb-3"></i>
                <h3 className="text-white mb-3 mt-3">
                  Web Performance Optimization
                </h3>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Speed and Efficient</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Optimizing techniques</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Resource Management</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Monitoring and Analysis</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="row mt-2">
            <div className="col-lg container--">
              <div className="container p-5 shadow-lg">
                <i className="fa fa-database text-white header-text mb-3"></i>
                <h3 className="text-white mb-3 mt-3">Database</h3>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">SqLite3</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">MongoDB</p>
                </div>
              </div>
            </div>
            <div className="col-lg container--">
              <div className="container p-5 shadow-lg">
                <i className="fa fa-bug text-white header-text mb-3"></i>
                <h3 className="text-white mb-3 mt-3">Testing and Debugging</h3>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Unit Testing</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">End to End testing</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Debugging techniques</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Error handling and loggin</p>
                </div>
              </div>
            </div>
            <div className="col-lg container--">
              <div className="container p-5 shadow-lg">
                <i className="fa fa-wrench text-white header-text mb-3"></i>
                <h3 className="text-white mb-3 mt-3">Tools and software</h3>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Git / Github</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">IDES</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Visual Studio Code</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">React</p>
                </div>
                <div className="container-items">
                  <span className="text-muted mr-4">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  <p className="text-muted">Django</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
