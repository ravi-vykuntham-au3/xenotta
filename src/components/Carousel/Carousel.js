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
    dotData: true,
    margin: 100,
  };

  return (
    <div className="herocarousel">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="img1">
          <div className="overlay-1"></div>
          <div className="overlay-content-1">
            We are currently building a distributed network of 30 mission
            critical Edge Co-Location Datacenters across Ireland and the UK
          </div>
          <div className="getstarted"></div>
        </div>

        <div className="img2">
          <div className="overlay-2"></div>
          <div className="overlay-content-2">
            We are currently building a distributed network of 30 mission
            critical Edge Co-Location Datacenters across Ireland and the UK
          </div>
          <div className="getstarted"></div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carousel;
