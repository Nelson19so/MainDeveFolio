import { useEffect, useState } from "react";
import Closebtn from "../../atoms/buttons/Closebtn";

export default function Newsletter() {
  const [newsmodal, setNewsmodal] = useState(false);

  // setInterval(() => {
  //   setNewsmodal(false);
  // }, 5000);

  return (
    <>
      {newsmodal && (
        <div className="back-drop News-letter">
          <div>
            <Closebtn
              onClick={closeModal}
              title="close"
              className="closeBtn btn btn-close btn-outline"
            />
          </div>
          <div className="modal--">
            <div className="container-fluid">
              <span>Subscribe to my NewsLetter</span>
            </div>
            <div className="container-fluid"></div>
          </div>
        </div>
      )}
    </>
  );
}
