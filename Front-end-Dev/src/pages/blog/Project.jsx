import Footer from "../../layout/footer/Footer";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";
import Projectlayout from "../../layout/pages_Laout/Projectlayout";

export default function Project() {
  document.title = "Nelson website Dev Project page";
  return (
    <>
      <div className="container-project">
        <Breadcrumbs
          breadcrumbtitle="Project"
          textOne="Pages"
          textTwo="Project"
        />
        <Projectlayout displayheader={false} />
        <Footer />
      </div>
    </>
  );
}
