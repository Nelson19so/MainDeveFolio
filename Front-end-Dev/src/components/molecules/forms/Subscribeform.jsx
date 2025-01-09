import Button from "../../atoms/buttons/Button";
import Input from "../../atoms/input/Input";

export default function Subscribeform() {
  return (
    <>
      <Input
        type="email"
        placeholder="demo@example.com"
        className="email-subscribe rounded-pill"
      />
      <Button
        type="button"
        text="Subscribe Now"
        className="button-subscribe rounded-pill ml-3 btn"
      />
    </>
  );
}
