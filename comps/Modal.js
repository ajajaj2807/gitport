import React from "react";
import Button from "./Button";

export default function Modal(props) {
  const [sent, setSent] = React.useState(0);
  const [greetName, setName] = React.useState(null);

  const sendMessage = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const data = {
      name,
      email,
      message
    }; //Do whatever you want with me!

    setSent(!sent);
    setName(data.name);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-overlay"></div>
      <div className="content">
        <div className="modal-close" onClick={props.close}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        {sent ? (
          <></>
        ) : (
          <div>
            <h1>Contact Me</h1>
            <p>Please do not try to spam my inbox 😠</p>
          </div>
        )}
        {sent ? (
          <div className="msg-sent-box">
            <h2>
              🎉
              <br />
              Thanks {greetName},<br /> Your Message was sent Successfully!
            </h2>
            <p>I'll try to reply as soon as I can.</p>
          </div>
        ) : (
          <form onSubmit={e => sendMessage(e)} className="modal-form-container">
            <input
              required={true}
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
            />
            <input
              required={true}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <textarea
              required={true}
              name="message"
              id="message"
              placeholder="Type your message here"
            />
            <Button className="subs-button">Send Message</Button>
          </form>
        )}
      </div>
    </div>
  );
}
