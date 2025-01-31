import { use, useState } from "react";
import Blog1 from "../../../images/Blogdetails-1.jpg";
import Button from "../../components/atoms/buttons/Button";
import Pagesheader from "../header/Pagesheader";
import { Link } from "react-router-dom";

export default function Projectlayout({ displayheader, displayitems }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  fetch("http://127.0.0.1:8000/app/project/")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => {
      setError(err.message);
    });
  return (
    <>
      <div className="container-project-main pt-5 pb-5">
        <div className="container container-project-inner">
          {displayheader && (
            <Pagesheader
              classNameSubtitle="text-muted text-center"
              classNameTitle="text-white text-center"
              title="My Complete Project"
              subtitle="My Project"
            />
          )}

          <div className="row-">
            <div className="container-items-main mb-5 main-items mr-4">
              <div className="container p-0">
                <div className="container-img pb-0">
                  <img src={Blog1} alt="" />
                </div>
              </div>
              <h5 className="text-white mt-3">
                Invest - Investment website template
              </h5>
              <p className="text-muted">Charity / Fund Rising / None Profit</p>
              <Link>
                <Button text="Visit Website" className="btn-visit-web" />
              </Link>
            </div>

            <div className="container-items-main main-items">
              <div className="container p-0">
                <div className="container-img pb-0">
                  <img src={Blog1} alt="" />
                </div>
              </div>
              <h5 className="text-white mt-3">
                Invest - Investment website template
              </h5>
              <p className="text-muted">Charity /Fund Rising / None Profit</p>
              <Link>
                <Button text="Visit Website" className="btn-visit-web" />
              </Link>
            </div>
          </div>

          {displayitems && (
            <div className="row- mt-5">
              {data.length ? (
                <>
                  {data.map((project) => (
                    <div
                      className="container-items-main main-items mr-4 mb-5"
                      key={project.id}
                    >
                      <div className="container p-0">
                        <div className="container-img pb-0">
                          <img src={Blog1} alt="" />
                        </div>
                      </div>
                      <h5 className="text-white mt-3">
                        {project.projetct_name}
                      </h5>
                      <p className="text-muted">{project.article}</p>
                      <Link to={project.link}>
                        <Button
                          text="Visit Website"
                          className="btn-visit-web"
                        />
                      </Link>
                    </div>
                  ))}
                </>
              ) : (
                <div>
                  <h4 className="text-warning text-center mt-5">
                    Some data were not found
                  </h4>
                </div>
              )}

              {error && <>{data.error}</>}

              <div className="col-md container-items-main"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
