export default function Client() {
  return (
    <>
      <div className="container-client">
        <div className="container pt-5 pb-5">
          <div className="row client-man">
            <div className="col-md client-inner p-3">
              <div className="row cliend-inner-main">
                <div className="col-sm-1 font-container">
                  <center>
                    <i className="fa fa-gear text-muted font mb-2"></i>
                  </center>
                </div>
                <div className="col-sm-9 container-text-client">
                  <h1>12</h1>
                  <p className="text-muted">Project Completed</p>
                </div>
              </div>
            </div>

            <div className="col-md client-inner p-3">
              <div className="row cliend-inner-main">
                <div className="col-sm-1 font-container">
                  <center>
                    <i className="fa fa-user text-muted font mb-2"></i>
                  </center>
                </div>
                <div className="col-sm-9 container-text-client">
                  <h1>7</h1>
                  <p className="text-muted">Happy client</p>
                </div>
              </div>
            </div>
            <div className="col-md client-inner p-3">
              <div className="row cliend-inner-main">
                <div className="col-sm-1 font-container">
                  <center>
                    <i className="fa fa-calendar-day text-muted font mt-2"></i>
                  </center>
                </div>
                <div className="col-sm-9 container-text-client">
                  <h1>2+</h1>
                  <p className="text-muted">Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
