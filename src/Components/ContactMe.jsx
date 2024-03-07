import { Parallax } from "react-parallax";
import Family from "../Images/EdinburghCastle.webp";
import "./ContactMe.css";

const ContactMe = () => (
  <Parallax
    contentClassName="contactme"
    blur={0}
    bgImage={Family}
    bgImageAlt="author and spouse"
    strength={500}
    bgClassName="contactPic"
  >
    <div className="requestsignedcopy">
      <h4 className="formh4">Purchase a signed copy!</h4>
      <form action="https://formsubmit.co/mills360@gmail.com" method="POST">
        <input
          className="requestinput"
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
        <input
          className="requestinput"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="requestinput"
          type="book"
          name="message"
          placeholder="Book(s) Requested"
          required
        />
        <input className="honey" type="text" name="_honey" />
        <button className="requestButton" type="submit">
          Send
        </button>
      </form>
    </div>
  </Parallax>
);

export default ContactMe;
