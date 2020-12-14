import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import "./Carousel.css";

function Carousel() {
  const options = {
    items: 1,
    // nav: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 5000,
    slideBy: 1,
    dots: true,
    autoplayHoverPause: true,
    dotsEach: true,
    dotsSpeed: false,
    navSpeed: false,
    dotData: true,
    margin: 100,
  };

  return (
    <div className="herocarousel">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="img1">
          <div className="overlayy-1"></div>

          <div className="overlayy-content-1">
            Ireland’s largest Modular Datacenter Provider delivering over 90
            MWatt capacity across Europe
          </div>
          {/* <div className="getstarted"></div> */}
        </div>

        <div className="img2">
          <div className="overlayy-2"></div>
          {/* <div className="overlayy-22"></div> */}
          <div className="overlayy-content-2">
            We are currently building a distributed network of 30 mission
            critical &nbsp;
            <span className="overlayy-content-2-dark">
              Edge Co-Location Datacenters
            </span>
            &nbsp; across Ireland and the UK
          </div>
          {/* <div className="getstarted"></div> */}
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carousel;
