import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";
import Serviceslayout from "../../layout/pages_Laout/Serviceslayout";

export default function Services() {
  return (
    <>
      <div className="container-service-page">
        <Breadcrumbs
          breadcrumbtitle="Services i Provide"
          textOne="Services"
          textTwo="My Services"
        />

        <Serviceslayout />
      </div>
    </>
  );
}
