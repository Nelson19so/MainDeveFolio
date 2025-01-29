import { useState } from "react";
import { Link } from "react-router-dom";
import Contactform from "../../components/molecules/forms/Contactform";
import Pagesheader from "../header/Pagesheader";

export default function Contactlayout() {
  const [ischecked, setIschecked] = useState(false);
  const [alert, setAlert] = useState(false);

  // Handle copy details
  const handlecopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("copied", text, "to clipboard");
    });
    setAlert(true);
    window.alert("item copied to clipboard successfully");
  };

  const handleIschecked = () => {
    setIschecked(!ischecked);
  };
  return (
    <>
      <div className="container-layout pt-5 pb-5">
        <div className="container">
          <div className="row grid">
            <div className="col-lg -grid-inner mb-5">
              <div className="container p-5 shadow-lg">
                <i className="fa fa-handshake text-white header-text mb-3"></i>
                <h3 className="text-white mb-3 mt-3">Contact me</h3>
                <div className="container-items mb-4 pl-3 pt-3 pb-3 d-flex justify-content-between">
                  <div className="info">
                    <p className="text-white">Phone</p>
                    <span className="text-muted">+234 8036131721</span>
                  </div>
                  <span className="mr-4">
                    <Link
                      to="#"
                      className="text-muted"
                      title="Copy phone number"
                      onClick={() => handlecopy("nelsonsomto19@gmail.com")}
                    >
                      <i className="fa fa-copy"></i>
                    </Link>
                  </span>
                </div>

                <div className="container-items mb-4 pl-3 pt-3 pb-3 d-flex justify-content-between">
                  <div className="info">
                    <p className="text-white">Email</p>
                    <span className="text-muted">nelsonsomto19@gmail.com</span>
                  </div>
                  <span className="text-muted mr-4">
                    <Link
                      to="#"
                      className="text-muted"
                      title="copy email address"
                      onClick={() => handlecopy("+234 8036 1317 21")}
                    >
                      <i className="fa fa-copy"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <div className="container p-5 shadow-lg mt-5">
                <i className="fa fa-share text-white header-text mb-3"></i>
                <h3 className="text-white mb-3 mt-3">Follow me</h3>
                <div className="container-items- mb-3">
                  <div className="mt-4 follow- d-flex justify-content-between">
                    <Link className="border text-white">
                      <i className="fa fa-instagram"></i>
                    </Link>

                    <Link className="border text-white">
                      <i className="fa fa-linkedin"></i>
                    </Link>

                    <Link className="border text-white">
                      <i className="fa fa-x-twitter"></i>
                    </Link>
                  </div>
                </div>
                <span className="text-muted">
                  |____________________________|
                </span>

                <div className="container-items-">
                  <div className="mt-4 follow- d-flex justify-content-between">
                    <Link className="border text-white">
                      <i className="fa fa-telegram"></i>
                    </Link>

                    <Link className="border text-white">
                      <i className="fa fa-facebook"></i>
                    </Link>

                    <Link className="border text-white">
                      <i className="fa fa-whatsapp"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="container-form container">
                <Pagesheader
                  subtitle="Get in touch"
                  classNameSubtitle="text-muted"
                  title="Want a contract with me? contact me below."
                  classNameTitle="text-white"
                />
                <p className="text-muted mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  facilis veritatis, eveniet ad et quod eum odit laboriosam
                  dolores id suscipit repellat consequuntur rerum ipsa amet
                  numquam voluptatem assumenda. Ducimus. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Eum accusantium sapiente
                  voluptatibus tenetur? Sapiente quaerat at, cum ipsum deleniti
                  similique necessitatibus numquam, cupiditate, fuga eaque
                  assumenda beatae eum perferendis porro.
                </p>

                {/* Renders the contact form */}
                <Contactform
                  handleIschecked={handleIschecked}
                  ischecked={ischecked}
                />
                {/* --Rendering ends-- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
