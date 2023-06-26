import React, { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import { Typography, Grid, Button, TextField } from "@mui/material";
// import validate from "validate.js";
// import emailjs from "emailjs-com";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebFont from "webfontloader";
import axios from "axios";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  validateEmail,
  validateFullName,
  validateMessage,
} from "../../components/Validation/validation";
import InlineError from "../../components/inlineError";
import FooterV2 from "../../components/Footerv2/FooterV2";
import Navbarv2 from "../../components/Navbarv2/Navbarv2";

const Contact = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Chilanka"],
      },
    });
  }, []);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Error Input Handling//
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    //**********VALIDATION**************/
    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });
  }, [fullName, email, message]);

  console.log(fullNameError);

  const [input, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(input);
  };
  return (
    <div className="Contents">
      <Navbarv2 />
      <div className="Contactcontent">
        <div className="container">
          <div className="Contactcontainer">
            <div className="firstDiv">
              <div className="fDTitle">
                <h1>Contact Us</h1>
              </div>

              <div className="fDcontent">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                  quaerat autem corrupti asperiores accusantium et fuga! Facere
                  except uri, quo eos, nobis doloremque dolor labore expedita
                  illum iusto, aut repellat fuga!
                </p>
              </div>
              <div className="fDInfo">
                <div className="fDlocation">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Jalan Aru,88807, Kota Kinabalu(Sabah)</p>
                </div>
                <div className="fDphone">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>1-800-222-4545</p>
                </div>
                <div className="fDemail">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>kgc@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="secondDiv" style={{ fontFamily: "Roboto" }}>
              <form onSubmit={handleSubmit}>
                <div className="userNameInput">
                  <h4>Name</h4>
                  <input
                    type="text"
                    // id="name"
                    className="form-control"
                    name="name"
                    // value={fullName}
                    // onChange={(e) => setFullName(e.target.value)}
                    onChange={handleChange}
                  />

                  {fullNameError && <InlineError error={fullNameError} />}
                </div>
                <div className="userEmailInput">
                  <h4>Email</h4>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    name="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={handleChange}
                  />
                  {emailError && <InlineError error={emailError} />}
                </div>
                <div className="userTextInput">
                  <h4>Message</h4>
                  <textarea
                    className="form-control"
                    name="message"
                    // value={message}
                    onChange={handleChange}
                    // onChange={(e) => setMessage(e.target.value)}
                  />
                  {messageError && <InlineError error={messageError} />}
                </div>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterV2 />
    </div>
  );
};

export default Contact;
