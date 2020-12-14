import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-main">
        <div className="contact-form">
          <form onSubmit="">
            <div className="contact-heading-background"></div>
            <div className="contact-heading">Contact Us</div>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
            />{" "}
            <br />
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Email"
            />{" "}
            <br />
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Mobile"
            />{" "}
            <br />
            <textarea
              className="inputTextArea"
              type="textArea"
              name="name"
              placeholder="Message"
            />
            <br />
            <input className="form-submit" type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-img"></div>
      </div>
      <div className="contact-footer">
        <div className="contact-address">
          <div className="contact-address-icon"></div>
          <div className="contact-text">
            O’Brien Road, Carlow, Ireland. R93T1X2
          </div>
        </div>
        <div className="contact-mail">
          <div className="contact-mail-icon"></div>
          <div className="contact-text">info@xenotta.ie</div>
        </div>
        <div className="contact-number">
          <div className="contact-number-icon"></div>
          <div className="contact-text">Tel: +353 87 2362175</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
