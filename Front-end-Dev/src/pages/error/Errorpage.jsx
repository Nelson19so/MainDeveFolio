import Gobackbtn from "../../components/atoms/buttons/Gobackbtn";
import Footer from "../../layout/footer/Footer";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";

import pageError from "../../../images/404page-error.png";

function Errorpage() {
  return (
    <>
      <div className="container-404-page">
        <Breadcrumbs
          breadcrumbtitle="404"
          textOne="404"
          textTwo="Page Not Found"
        />
        <div className="container">
          <div className="container-pageNotFound pb-5 pt-5">
            <div className="row text-white">
              <div className="col-md-4 text-container-404 mb-3">
                <h1>404</h1>
                <h4>Page Not Found</h4>
                <p className="text-muted">
                  Looks like this page is still under construction or might be
                  unavailable at the moment, please return back to previous page
                  to continue.
                </p>
                <Gobackbtn
                  text="Return Back"
                  className="text-white btn-pageNotFound"
                  displayIcon={true}
                />
              </div>
              <div className="col-md text-container-404">
                <img src={pageError} alt="404-page-img" />
                <div className="back-drop-404" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Errorpage;
