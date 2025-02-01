import Button from "../../components/atoms/buttons/Button";
import Startloadscrn from "../../components/molecules/loadscreen/Startloadscrn";
import Newsletter from "../../components/molecules/modal/Newsletter";
import Navbarbody from "../../components/molecules/Nahbar-items/Navbarbody";
import Footer from "../../layout/footer/Footer";
import AboutLayout from "../../layout/pages_Laout/AboutLayout";
import Blogpostlayout from "../../layout/pages_Laout/Blogpostlayout";
import Client from "../../layout/pages_Laout/Client";
import Faq from "../../layout/pages_Laout/faq";
import Projectlayout from "../../layout/pages_Laout/Projectlayout";
import Servicecorousel from "../../layout/pages_Laout/Servicecorousel";
import resume from "../../assets/others/Resume.pdf";

function Home() {
  document.title = "Nelson Website dev Home page";

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(resume);
    link.download = "resume.pdf";
    link.click();
  };
  return (
    <>
      <div className="container-items Home-page">
        <div className="backdrop-home pb-5">
          <Navbarbody />
          <div className="container">
            <div className="row">
              <div className="col-sm pt mt-2 left-container">
                <h1 className="text-white">Hello! i'm</h1>
                <h2 className="text-white">Nelson Benzo</h2>
                <div className="ml- mt-3">
                  <span>
                    I am <code>Nelson</code>, a passionate {""}
                    <code>web dev dedicated</code> to helping businesses like
                    yours succeed and grow online
                  </span>
                </div>

                <div className="container-btn-- mt-5 mb-5">
                  <div className="button- w-100">
                    <a href={resume}>
                      <Button
                        text="Download Resume"
                        showicon={true}
                        download="resume.pdf"
                      />
                    </a>
                  </div>
                  <div className="w-100 mt-5 button-two ml-">
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
        <Servicecorousel pageheader={true} />
        <Client />
        <Projectlayout displayheader={true} displayitems={false} />
        <Blogpostlayout
          pagesheader={true}
          DisplayButton={true}
          displayblogs={false}
        />
        <Faq />
        <Footer />
        <Newsletter />
        <Startloadscrn />
      </div>
    </>
  );
}

export default Home;
