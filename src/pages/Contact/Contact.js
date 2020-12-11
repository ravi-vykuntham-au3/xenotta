import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-main">
        <div className="contact-form"></div>
        <div className="contact-img"></div>
      </div>
      <div className="contact-footer">
        <div className="contact-address">
          <span className="contact-address-icon"></span>
          <span className="contact-text">
            O’Brien Road, Carlow, Ireland. R93T1X2
          </span>
        </div>
        <div className="contact-mail">
          <span className="contact-mail-icon"></span>
          <span className="contact-text">info@xenotta.ie</span>
        </div>
        <div className="contact-number">
          <span className="contact-number-icon"></span>
          <span className="contact-text">Tel: +353 87 2362175</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
