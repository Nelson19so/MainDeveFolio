import Button from "../../components/atoms/buttons/Button";
import Startloadscrn from "../../components/molecules/loadscreen/Startloadscrn";
import Newsletter from "../../components/molecules/modal/Newsletter";
import Navbarbody from "../../components/molecules/Nahbar-items/Navbarbody";
import Footer from "../../layout/footer/Footer";
import AboutLayout from "../../layout/pages_Laout/AboutLayout";
import Blogpostlayout from "../../layout/pages_Laout/Blogpostlayout";
import Client from "../../layout/pages_Laout/Client";
import Faq from "../../layout/pages_Laout/faq";
import Project from "../../layout/pages_Laout/Project";
import Servicecorousel from "../../layout/pages_Laout/Servicecorousel";
import Servicelayout from "../../layout/pages_Laout/Servicelayout";

function Home() {
  document.title = "Nelson Website dev Home page";
  return (
    <>
      <div className="container-items Home-page">
        <div className="backdrop-home pb-5">
          <Navbarbody />
          <div className="container">
            <div className="row">
              <div className="col-sm pt mt-2 left-container">
                <h2 className="text-white">Welcome to my Web Dev page</h2>
                <div className="ml-5 mt-3">
                  <span>
                    I am <code>Nelson</code> passionate {""}
                    <code>web dev dedicated</code> to helping businesses like
                    yours succeed onlne
                  </span>
                </div>

                <div className="container-btn-- mt-4">
                  <div className="button- w-100">
                    <Button text="Download Resume" showicon={true} />
                  </div>

                  <div className="w-100 mt-4 button-two ml-5">
                    <span>
                      <Button showiconTwo={true} />{" "}
                      <p className="text-white">Watch Video</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-sm right-container">
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AboutLayout pagesheader={true} />
        {/* <Servicelayout pageheader={true} /> */}
        <Servicecorousel pageheader={true} />
        <Client />
        <Project />
        <Blogpostlayout pagesheader={true} DisplayButton={true} />
        <Faq />
        <Footer />
        <Newsletter />
        <Startloadscrn />
      </div>
    </>
  );
}

export default Home;
