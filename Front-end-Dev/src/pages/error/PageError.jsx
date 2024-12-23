import Gobackbtn from "../../components/atoms/buttons/Gobackbtn";

function PageError() {
  return (
    <>
      <center>
        <div className="mt-5">
          <h1>404</h1>
          <h4>Bad request</h4>
          <Gobackbtn />
        </div>
      </center>
    </>
  );
}

export default PageError;
