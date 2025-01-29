import { useState } from "react";
import Pagesheader from "../../../layout/header/Pagesheader";
import Button from "../../atoms/buttons/Button";
import Input from "../../atoms/input/Input";

export default function Testimonialform() {
  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [profile, setProfile] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/app/testimonial/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, work, profile, testimonial }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        setSuccess(data["message"]);
        console.log(data["success"]);
        setError(null);
      } else {
        setError(data["error"]);
        console.log(data["error"]);
        setSuccess("");
      }
    } catch (error) {
      setError("Looks like somthing is wrong somewhere.");
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container-testimonial-form">
        <Pagesheader
          classNameSubtitle="text-muted"
          subtitle="Tell us what you think about me, your opinion matters a lot"
          classNameTitle="text-white"
          title="Write your own testimonial"
        />
        <p className="text-muted mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          in enim explicabo odit suscipit ut perferendis quam aspernatur autem
          labore dolores error porro velit praesentium, amet cupiditate quasi,
          numquam inventore.
        </p>

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

        <form action="" onSubmit={handleSubmit}>
          <div className="input-control">
            <label htmlFor="name" className="text-muted">
              Your name?
            </label>
            <Input
              id="name"
              type="text"
              placeholder="name"
              className="testimonial-input pt-3 pb-3"
              maxLength="50"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>

          <div className="input-control mt-3">
            <label htmlFor="select" className="text-muted">
              Are you into tech industry?
            </label>
            <select
              name="Select"
              id="select"
              className="testimonial-input text-white"
              value={work}
              onChange={(event) => setWork(event.target.value)}
            >
              <option className="text-muted" value="Not into tech">
                Not into tech
              </option>
              <option className="text-muted" value="Graphics Design">
                Graphics designer
              </option>
              <option className="text-muted" value="Video Editor">
                Video Editor
              </option>
              <option className="text-muted" value="UI/UX">
                UI/UX Designer
              </option>
              <option className="text-muted" value="Web Developer">
                Web Developer
              </option>
              <option className="text-muted" value="Web designer">
                Web designer
              </option>
              <option className="text-muted" value="Back-end Dev">
                Back-end Dev
              </option>
              <option className="text-muted" value="Front-end Dev">
                Front-end Dev
              </option>
              <option className="text-muted" value="Game developer">
                Game developer
              </option>
              <option className="text-muted" value="Cyber security">
                Cyber security
              </option>
              <option className="text-muted" value="Cyber security">
                Data Analytics
              </option>
              <option className="text-muted" value="Cyber security">
                Machine learning
              </option>
              <option className="text-muted" value="Cyber security">
                Developer
              </option>
            </select>
          </div>

          <div className="input-control mt-3">
            <label htmlFor="profile" className="text-muted">
              Select your profile img
            </label>
            <Input
              id="profile"
              type="file"
              placeholder="Chose your profile"
              className="testimonial-input"
              maxLength="20"
              value={profile}
              onChange={(event) => setProfile(event.target.value)}
            />
          </div>

          <div className="input-control mt-3">
            <label htmlFor="text-area" className="text-muted">
              Tell us what you think about my work in summary
            </label>
            <textarea
              name="description"
              id="text-area"
              placeholder="Description here"
              className="testimonial-input-desc"
              maxLength="900"
              value={testimonial}
              onChange={(event) => setTestimonial(event.target.value)}
            />
          </div>

          <Button
            className="button-testimonial mt-3 w-100 btn-outline-light p-3 btn"
            text="Submit Form"
          />
        </form>
      </div>
    </>
  );
}
