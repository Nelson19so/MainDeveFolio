import AsideService from "../../layout/AsideService";
import Footer from "../../layout/footer/Footer";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";
import Servicelayout from "../../layout/pages_Laout/Servicelayout";

export default function Service() {
  return (
    <>
      <div>
        <Breadcrumbs
          textOne="Service"
          textTwo="Service List"
          breadcrumbtitle="Services"
          pageheader={false}
        />
        <Servicelayout />
        <AsideService />
        <Footer />
      </div>
    </>
  );
}
