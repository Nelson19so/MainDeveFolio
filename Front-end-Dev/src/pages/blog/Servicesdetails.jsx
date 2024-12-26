import Footer from "../../layout/footer/Footer";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";
import Servicesdetaillayout from "../../layout/pages_Laout/Servicesdetaillayout";

export default function Servicesdetails() {
  return (
    <>
      <div className="container-service-page">
        <Breadcrumbs
          breadcrumbtitle="Services Detail"
          textOne="Service"
          textTwo="Service Detail"
        />

        <Servicesdetaillayout />
        <Footer />
      </div>
    </>
  );
}