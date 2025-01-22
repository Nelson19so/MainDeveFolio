import Footer from "../../layout/footer/Footer";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";
import Contactlayout from "../../layout/pages_Laout/Contactlayout";

export default function Contact() {
  document.title = "Nelson website Dev contact page";
  return (
    <>
      <div className="container-contact-page">
        <Breadcrumbs
          textOne="Contact"
          textTwo="Contact me"
          breadcrumbtitle="Contact Me"
        />
        <Contactlayout />
        <Footer />
      </div>
    </>
  );
}
