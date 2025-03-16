import { useEffect } from "react";

export default function Startloadscrn() {
  useEffect(() => {
    $(".container-load-screen").delay(700).fadeOut(700);
    $(".spinner-border").delay(800).fadeOut(600);
  }, []);

  return (
    <>
      <div className="container-load-screen">
        <center>
          <div className="spinner-border"></div>
        </center>
      </div>
    </>
  );
}
