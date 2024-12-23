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
                  <strong className="mr-1">{textOne}</strong> ||{""}
                  <strong className="ml-2">{textTwo}</strong>
                </p>
              </span>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
