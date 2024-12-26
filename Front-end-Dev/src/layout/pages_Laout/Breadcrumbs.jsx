import Navbarbody from "../../components/molecules/Nahbar-items/Navbarbody";
import Pagesheader from "../header/Pagesheader";

export default function Breadcrumbs({ textOne, textTwo, breadcrumbtitle }) {
  return (
    <>
      <div className="container-breadCrumbs">
        <div className="bradcrumbs-back-drop">
          <Navbarbody />
          <Pagesheader
            title={breadcrumbtitle}
            classNameTitle="text-center text-white"
          />
          <center>
            <div className="container-breadcrumbs-item">
              <span className="text-muted">
                <p>
                  <span className="mr-1">{textOne}</span> ||{""}
                  <span className="ml-1">{textTwo}</span>
                </p>
              </span>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
