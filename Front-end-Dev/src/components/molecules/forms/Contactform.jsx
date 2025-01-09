import { useState } from "react";
import Button from "../../atoms/buttons/Button";
import Input from "../../atoms/input/Input";

export default function Contactform({ handleIschecked, ischecked }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="container-contact-form">
        <form action="" method="post">
          <div className="d-flex justify-content-between">
            <Input
              type="text"
              placeholder="User Name"
              className="contact-input mr-2"
              maxLength="50"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
            <Input
              type="phone"
              placeholder="Mobile No"
              className="contact-input ml-2"
              maxLength="15"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
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
            type="button"
            disabled={!ischecked}
          />
        </form>
      </div>
    </>
  );
}
