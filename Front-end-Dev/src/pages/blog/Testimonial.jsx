import Footer from "../../layout/footer/Footer";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";
import Testimoniallayout from "../../layout/pages_Laout/Testimoniallayout";

function Testimonial() {
  document.title = "Nelson website Dev testimonial page";
  return (
    <>
      <div className="container-testimonial">
        <Breadcrumbs
          textOne="Home"
          textTwo="Testimonial"
          breadcrumbtitle="Testimonial"
        />
        <Testimoniallayout showcarousel={false} showpagesheader={false} />
        <Footer />
      </div>
    </>
  );
}

export default Testimonial;
