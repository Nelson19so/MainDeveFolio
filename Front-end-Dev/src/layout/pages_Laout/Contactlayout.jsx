import { useState } from "react";
import Contactform from "../../components/molecules/forms/Contactform";

export default function Contactlayout() {
  const [ischecked, setIschecked] = useState(false);

  const handleIschecked = () => {
    setIschecked(!ischecked);
  };
  return (
    <>
      <div className="container-layout pt-5 pb-5">
        <div className="container">
          <div className="container-form container">
            {/* Renders the contact form */}
            <Contactform
              handleIschecked={handleIschecked}
              ischecked={ischecked}
            />
            {/* --Rendering ends-- */}
          </div>
        </div>
      </div>
    </>
  );
}
