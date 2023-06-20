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
                <h5>About Kinabalu Golf Club</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae ornare massa, at consequat ipsum. Sed ullamcorper.
                </p>
              </div>
            </div>
            <div className="footerAbout2">
              <div className="footerAboutInfo">
                <h5>Contact Info</h5>

                <FontAwesomeIcon icon={faEnvelope} />
                <h5 className="px-2">kgc@gmail.com</h5>
              </div>
            </div>
            <div className="footerAbout3"></div>
            <div className="footerAbout4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterV2;
