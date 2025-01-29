import { useState } from "react";
import Button from "../../atoms/buttons/Button";
import Input from "../../atoms/input/Input";

export default function Contactform({ handleIschecked, ischecked }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("post request");

    if (!username) {
      setError("Please fill up username field");
    } else if (!phone) {
      setError("Please fill up phone field");
    } else if (!email) {
      setError("Please fill up email field");
    } else if (!description) {
      setError("Please write a description");
    } else {
      try {
        const response = await fetch("http://127.0.0.1:8000/app/contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            mobile_no: phone,
            email: email,
            description: description,
          }),
        });

        const data = await response.json();

        console.log(data);

        if (response.ok) {
          setSuccess(data["message"]);
          console.log(data["message"]);
          setUsername("");
          setEmail("");
          setPhone("");
          setDescription("");
        } else {
          setError(data["error"]);
          console.log(data["error"]);
        }
      } catch (error) {
        setError("somthing went wrong, please try again.");
      }
    }
  };

  return (
    <>
      {error && (
        <div className="w-100 text-danger p-3 mb-2 error text-center">
          {error}
        </div>
      )}

      {success && (
        <div className="w-100 text-success p-3 mb-2 success text-center">
          {success}
        </div>
      )}

      <div className="container-contact-form">
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md mb-3">
              <Input
                type="text"
                placeholder="Username"
                className="contact-input pt-2 pb-2"
                maxLength="50"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
            </div>

            <div className="col-md">
              <Input
                type="phone"
                placeholder="Mobile No"
                className="contact-input pt-2 pb-2"
                maxLength="20"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          </div>
          <Input
            type="email"
            placeholder="User Email"
            className="contact-input mt-3"
            maxLength="20"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <textarea
            name="description"
            id="text-area"
            placeholder="Description here"
            className="contact-input-desc mt-3"
            maxLength="900"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <label className="mt-3">
            <Input
              type="checkbox"
              className="checkbox"
              onChange={handleIschecked}
              checked={ischecked}
            />
            <span className="text-white ml-2">Done</span>
          </label>

          <Button
            className={
              ischecked
                ? "button-contact mt-3 w-100 btn-outline-light p-3 btn"
                : "button-contact-disabled btn-disabled btn btn-outline-light p-3 w-100"
            }
            text="Submit Form"
            disabled={!ischecked}
          />
        </form>
      </div>
    </>
  );
}
