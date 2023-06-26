import React from "react";
import "./footTwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const FooterV2 = () => {
  return (
    <div className="footTwos">
      <div className="footerContainer">
        <div className="footerContent">
          <div className="footerIndividual">
            <div className="footerAbout">
              <div className="footerAboutContainer">
                <h6>About Kinabalu Golf Club</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae ornare massa, at consequat ipsum. Sed ullamcorper.
                </p>
              </div>
            </div>
            <div className="footerAbout2">
              <div className="footerAboutInfo">
                <h6>Contact Info</h6>
                <div className="footerIcons">
                  <div className="footerEnvelope">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="px-2">kgc@gmail.com</p>
                  </div>
                  <div className="footerPhone">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>1-800-222-4545</p>
                  </div>
                  <div className="footerLocation">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Jalan Aru,88807,Kota Kinabalu(Sabah)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerAbout3">
              <div className="footerHOO">
                <h6>Hours of Operation</h6>

                <div className="MonWed">
                  <p className="MonW">Mon-Wed:</p>
                  <p className="MonTime">6:00am - 8:00pm</p>
                </div>

                <div className="ThursFri">
                  <p className="Thurs">Thurs-Fri:</p>
                  <p className="Fri">6:30am - 7:30pm</p>
                </div>

                <div className="Sat">
                  <p className="sat">Sat:</p>
                  <p className="saTime">7:00am - 9:00pm</p>
                </div>
              </div>
            </div>
            <div className="footerAbout4">
              <div className="footerPages">
                <h6>Pages</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterV2;
