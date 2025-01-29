import Footer from "../../layout/footer/Footer";
import AboutLayout from "../../layout/pages_Laout/AboutLayout";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";
import Client from "../../layout/pages_Laout/Client";
import Testimoniallayout from "../../layout/pages_Laout/Testimoniallayout";

export default function About() {
  document.title = "Nelson website Dev About page";
  return (
    <>
      <div className="container-about">
        <Breadcrumbs
          textOne="About"
          textTwo="About page"
          breadcrumbtitle="About Me"
        />
        <AboutLayout />
        <Testimoniallayout
          showcarousel={true}
          showpagesheader={true}
          closePptst={false}
        />
        <Client />
        <Footer />
      </div>
    </>
  );
}
