import { Parallax } from "react-parallax";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Family from "../Images/EdinburghCastle.webp";
import "./ContactMe.css";

function ContactMe() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState(false);

  const handleNameChange = (e) => {
    let input = e.target.value;
    setName(input);
  };

  const handleEmailChange = (e) => {
    let input = e.target.value;
    setEmail(input);
  };

  const handleMessageChange = (e) => {
    let input = e.target.value;
    setMessage(input);
  };

  const handleHoneyChange = () => {
    if (honey === false) {
      setHoney(true);
    } else {
      setHoney(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (honey === true) {
      window.location.href = "https://www.google.com/";
    } else {
      emailjs
        .sendForm("service_ho70mof", "template_1nu86e8", form.current, {
          publicKey: "LfDXlCYhak4kpb8nH",
        })
        .then(
          () => {
            alert("Message sent!");
            setEmail("");
            setName("");
            setMessage("");
          },
          (error) => {
            alert("Message failed. Please try again later.");
          }
        );
    }
  };

  return (
    <Parallax
      contentClassName="contactme"
      blur={0}
      bgImage={Family}
      bgImageAlt="author and spouse"
      strength={500}
      bgClassName="contactPic"
    >
      <div className="contact-form">
        <h4 className="formh4">Get in touch!</h4>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="input-div">
            <label htmlFor="name" className="for-accessibility">
              Name:
            </label>
            <input
              className="requestinput"
              type="text"
              name="from_name"
              id="name"
              placeholder="Name"
              onChange={handleNameChange}
              value={name}
              required
            />
            <label htmlFor="email" className="for-accessibility">
              Email:
            </label>
            <input
              className="requestinput"
              type="email"
              name="user_email"
              id="email"
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
              required
            />
            <label htmlFor="message" className="for-accessibility">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Message"
              onChange={handleMessageChange}
              value={message}
              className="requestinput"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <label htmlFor="_honey" className="honey">
            Click Me
          </label>
          <input
            className="honey"
            type="checkbox"
            name="_honey"
            id="_honey"
            value={honey}
            onChange={handleHoneyChange}
          />
          <button className="requestButton" type="submit">
            Send
          </button>
        </form>
      </div>
    </Parallax>
  );
}

export default ContactMe;
