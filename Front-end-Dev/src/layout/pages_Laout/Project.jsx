import Blog1 from "../../../images/Drop-1.jpg";
import Pagesheader from "../header/Pagesheader";

export default function Project() {
  return (
    <>
      <div className="container-project-main pt-5 pb-5">
        <div className="container container-project-inner">
          <Pagesheader
            classNameSubtitle="text-muted text-center"
            classNameTitle="text-white text-center"
            title="My Complete Project"
            subtitle="My Project"
          />

          <div className="row">
            <div className="col-sm container-items-main">
              <div className="container p-0">
                <div className="container-img pb-0">
                  <img src={Blog1} alt="" />
                </div>
              </div>
              <h5 className="text-white mt-3">
                Invest - Investment website template
              </h5>
              <p className="text-muted">Charity / Fund Rising / None Profit</p>
            </div>

            <div className="col-sm container-items-main">
              <div className="container p-0">
                <div className="container-img pb-0">
                  <img src={Blog1} alt="" />
                </div>
              </div>
              <h5 className="text-white mt-3">
                Invest - Investment website template
              </h5>
              <p className="text-muted">Charity /Fund Rising / None Profit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
