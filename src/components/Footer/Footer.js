import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-left-bottom"></div>
      <div className="footer-right-bottom"></div>
      <div className="label">
        <div className="t1">
          Request a free consultation to discuss your Datacenter needs
        </div>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="wrapper">
        <div className="footer-main">
          <div id="footer">
            <div className="footer-logo"></div>
            {/* <div className="social">
              <div className="facebook"></div>
              <div className="linkedin"></div>
            </div> */}
            <div className="solution-list">
              <div className="head">Solutions</div>
              <ul>
                <li className="solutions-item">
                  <Link to="/" style={{color: "#000"}}>
                    Co-Location
                  </Link>
                </li>
                <li className="solutions-item">
                  <Link to="/" style={{color: "#000"}}>
                    Power
                  </Link>
                </li>
                <li className="solutions-item">
                  <Link to="/" style={{color: "#000"}}>
                    Cooling
                  </Link>
                </li>
              </ul>
            </div>
            <div className="colocation-list">
              <div className="head">Co-Locations</div>
              <ul>
                <li className="colocation-item">
                  <Link to="/" style={{color: "#000"}}>
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact-list">
              <div className="head">Contact Us</div>
              <ul>
                <li className="contact-item">
                  <Link to="/" style={{color: "#000"}}>
                    info@xenotta.ie
                  </Link>
                </li>
                <li className="contact-item">
                  <Link to="/" style={{color: "#000"}}>
                    Tel: +353 87 2362175
                  </Link>
                </li>
              </ul>
            </div>
            <div className="globe-illustration"></div>
          </div>
          <hr />
          <div className="sub-footer">
            <div className="copyright">© 2020. Xenotta Limited.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
