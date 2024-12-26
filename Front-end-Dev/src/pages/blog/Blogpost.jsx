import Footer from "../../layout/footer/Footer";
import Blogpostlayout from "../../layout/pages_Laout/Blogpostlayout";
import Breadcrumbs from "../../layout/pages_Laout/Breadcrumbs";

export default function Blogpost() {
  return (
    <>
      <div className="container-blogpost-main">
        <Breadcrumbs
          breadcrumbtitle="Blog List"
          textOne="Blog"
          textTwo="Blog List"
          pagesheader={false}
        />
        <Blogpostlayout />
        <Footer />
      </div>
    </>
  );
}
