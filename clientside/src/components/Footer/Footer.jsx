import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer mt-5 ">
      <div className="bg-white  d-flex">
        <div className="footer-area-1 col-md-3 col-sm-6 ">
          <section className="widget text-2">
            <div className="widget-inner ">
              <h3 className="widget-title">About Kinabalu Golf</h3>
              <div className="widget-content">
                <div className="m-5 text-start">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vitae ornare massa, at consequat ipsum. Sed ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="footer-area-2 col-md-3 col-sm-6 ">
          <section className="widget text-2">
            <div className="widget-inner ">
              <h3 className="widget-title">Contact Info</h3>
              <div className="widget-content">
                <div className="m-5 text-start">
                  <div className="email d-flex align-items-center ">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h5 className="px-2">kgc@gmail.com</h5>
                  </div>
                  <div className="contactNo d-flex align-items-center">
                    <FontAwesomeIcon icon={faPhone} />
                    <h5 className="px-2">1-800-222-4545</h5>
                  </div>
                  <div className="location d-flex align-items-center">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <h5 className="px-2">
                      Jalan Aru,88807, Kota Kinabalu(Sabah)
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="footer-area-3 col-md-3 col-sm-6 ">
          <section className="widget text-2">
            <div className="widget-inner ">
              <h3 className="widget-title">Hours of Operation</h3>
              <div className="widget-content">
                <div className="m-5 text-start  ">
                  <ul className="list-unstyled">
                    <li>Mon-Wed: 6:00am – 8:00pm</li>
                    <li>Thurs-Fri: 6:30am – 7:30pm</li>
                    <li>Sat: 7:00am – 9:00pm</li>
                    <li>Sun: 8:00am – 8:00pm</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="footer-area-4 col-md-3 col-sm-6 ">
          <section className="widget text-2">
            <div className="widget-inner ">
              <h3 className="widget-title">Recent Posts</h3>
              <div className="widget-content">
                <div className="m-5 text-start">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vitae ornare massa, at consequat ipsum. Sed ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
