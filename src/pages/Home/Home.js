import React from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home-main">
      <Carousel />
      <div className="going-live-main">
        <div className="going-live-img"></div>
        <div className="going-live-desc">
          <div className="going-live-h1">
            We are going <span className="going-live-h1-dark"> Live </span> in
            March 2021!
          </div>
          <div className="going-live-h2">
            a <span className="going-live-h2-dark"> 2MW </span> Tier III Modular
            Datacenter with
          </div>
          <ul className="going-live-list">
            <li className="going-live-list-item">280 racks at 7 kW/rack</li>
            <li className="going-live-list-item">High bandwidth</li>
            <li className="going-live-list-item">Low latency</li>
            <li className="going-live-list-item">
              Redundant connections to major ISPs
            </li>
            <li className="going-live-list-item">100% renewable energy</li>
            <li className="going-live-list-item">FREE cooling Next Gen PUE</li>
          </ul>
        </div>
      </div>
      <div className="solutions-main">
        <div className="solutions-desc">
          <div className="solutions-heading-background"> </div>
          <div className="solutions-heading">Our Solutions</div>
          <div className="solutions-text">
            At Xennota, we ensure every project we deliver is hassle-free,
            organized and energy efficient as possible. From strategy,
            development and design, execution and supp ort, all of our services
            are delivered by our in-house data center experts. We provid e
            colocation services to protect your services, including datacenter
            redundancy a nd giving freedom to access and scale your critical IT
            infrastructure when required
          </div>
          <div className="solutions-list">
            <ul>
              <li>
                Our Datacenters incorporate energy efficient free cooling
                options and Intelligent Next generation power
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usage strategies to
                reduce OPEX
              </li>
              <li>
                Modular approach allows rapid deployment and ensures cost
                efficiency
              </li>
              <li>Opening up datacenter in places previously unavailable</li>
              <li>Opening up datacenter in places previously unavailable</li>
            </ul>
          </div>
        </div>
        <div className="solutions-img"></div>
      </div>
      <div className="home-cards-deck">
        <div className="home-card-1">
          <div className="home-card-img-1" />
          <div className="home-card-heading">Co-Location</div>
          <div className="home-card-paragraph">
            Suites, single, half and quarter racks with own locking doors are
            available. Full racks can have swipe card access. Dedicated 100
            square metre cages
          </div>
          <p className="home-card-p">
            <Link to="/" className="home-card-link">
              learn more...
            </Link>
          </p>
        </div>
        <div className="home-card-2">
          <div className="home-card-img-2" />
          <div className="home-card-heading">Power</div>
          <div className="home-card-paragraph">
            All facilities are supported by onsite failover generators as N+1
            with at least 48 hours of fuel stored on site. Dataplex also utilise
            static UPS system
          </div>
          <p className="home-card-p">
            <Link to="/" className="home-card-link">
              learn more...
            </Link>
          </p>
        </div>
        <div className="home-card-3">
          <div className="home-card-img-3" />
          <div className="home-card-heading">Cooling</div>
          <div className="home-card-paragraph">
            Xenotta utilise latest Indirect Free Air cooling to achiveve leading
            PUE values while maintaining an entirely controlled environment
          </div>
          <p className="home-card-p">
            <Link to="/" className="home-card-link">
              learn more...
            </Link>
          </p>
        </div>
      </div>
      <div className="about-main">
        <div className="about-desc">
          <div className="about-heading-background"></div>
          <div className="about-heading">About Us</div>
          <div className="about-text">
            Established in 2017, Xennota started as a provider for Modular
            datacenter hosting solutio ns. In 2020 Xenotta started a joint
            venture with ESB to built datacenter all across Ireland for various
            use cases like Co-location, Edge Computing, private cloud, secure
            cloud and disaster recovery markets located on strategic sites with
            a planned global roll-out. Xeno tta's data center are uniquely
            positioned to give our customers a choice of selections th at
            includes micro all-in-one modules from 10kW of IT load to large
            configurations of 3MW + custom configured for our customers in one
            of our select locations. We engage most modern safety techniques
            available in the industry adding more security to each of our plants
          </div>
        </div>
        <div className="about-img"></div>
      </div>
    </div>
  );
}

export default Home;
