import Footer from "../../layout/footer/Footer";
import Blogdetailslayout from "../../layout/pages_Laout/Blogdetailslayout";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";

export default function Blogdetails() {
  return (
    <>
      <div className="container-blogdetails">
        <Breadcrumbs
          textOne="Blog"
          textTwo="Blogdetails"
          breadcrumbtitle="Blog Details"
        />
        <Blogdetailslayout />
        <Footer />
      </div>
    </>
  );
}
