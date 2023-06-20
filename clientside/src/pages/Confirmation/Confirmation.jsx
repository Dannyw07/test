import React, { useState, useEffect } from "react";
import "./confirm.css";
import Navbar from "../../components/Navbar/Navbar";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Logo from "../../components/Images/kinabaluGClogo.png";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountDown from "../../components/CountDown";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateFirstName,
  validateFullName,
  validateLastName,
  validateMessage,
} from "../../components/Validation/validation";
import InlineError from "../../components/inlineError";

const Confirmation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Error Input Handling//
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    //**********VALIDATION**************/
    validateFirstName({ firstName, setFirstNameError });
    validateLastName({ lastName, setLastNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });
  }, [firstName, lastName, email, message]);

  const navigate = useNavigate();
  return (
    <div className="confirmation">
      <Navbar />

      <div className="personalInfo">
        <div className="timer">
          <CountDown seconds={180} />
          {/* <p>You have 3 minutes and 30 seconds to complete your booking</p> */}
        </div>

        <div className="pInfo">
          <div className="pInfoTitle">
            <h1>Personal Information</h1>
            <h5>Your Details</h5>
          </div>

          <div className="userpDetails">
            <div className="userFName">
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                value={firstName}
                className="usersFN"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            {firstNameError && <InlineError error={firstNameError} />}
            <div className="userFName">
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                value={lastName}
                className="usersLN"
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && <InlineError error={lastNameError} />}
            </div>

            <div className="userFName">
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={email}
                className="usersFN"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <InlineError error={emailError} />}
            </div>

            <div className="userFName">
              <p>Mobile</p>
              <input
                type="text"
                name="lastName"
                value={message}
                className="usersFN"
                onChange={(e) => setMessage(e.target.value)}
              />
              {messageError && <InlineError error={messageError} />}
            </div>
            <div className="userMessageDetails">
              <p>Please provide any details for special requirements</p>
              <textarea className="usersMessage" name="message"></textarea>
            </div>
          </div>
        </div>

        <div className="bookingDetails">
          <div className="bdetails">
            <div className="bookingDetailsTitle">
              <hr
                className="hrConfirm"
                style={{
                  width: "889px",
                  background: "black",
                  height: "2px",
                  border: "none",
                  // marginLeft: "0px",
                  // marginRight: "0px",
                }}
              />
              <h1>BOOKING DETAILS</h1>
            </div>

            <div className="bookingTable">
              <p>this is booking table</p>
            </div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I have read and I accept the Privacy Policy and Visitor Terms and Conditions"
              />
            </FormGroup>
          </div>
        </div>

        <div className="confirmationButton">
          <div className="cButtons">
            <div className="cButton">
              <div className="cancelButton">
                <button className="redButton" onClick={() => navigate(-1)}>
                  Cancel
                </button>
              </div>
              <div className="proceedButton">
                <button className="blueButton">Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gCinfos">
        <div className="gcImages">
          <img src={Logo} alt="The Kinabalu GolfClub logo" />
        </div>
        <div className="webLink">
          {/* <p>www.kgcsabah.org</p> */}
          <a href="https://www.kgcsabah.org/">www.kgcsabah.org</a>
          <button className="emLink">
            <FontAwesomeIcon icon={faEnvelope} className="envelope" />
            &nbsp; EMAIL US
          </button>
        </div>

        <div className="gcAbout">
          <div className="gcText">
            <p>
              The club currently has a 11 holes golf course spreading over a
              predominantly flat and gentle land of about 40 acres. The Course
              rating is 68.5 and slope rating of 135. The course contains 6 par
              4s, 4 par 3s and 1 par 5 which are lined with corridor-type
              fairways combined with fast and sloping greens which are guarded
              by numerous bunkers and some subtle water hazards.
              <br />
              <br />
              Visitors are allowed to play during the weekdays provided they pay
              the prevailing Green and caddy fees and have a valid USGA Handicap
              Index of 24 & below for Men and 30 & below for ladies. A golfers’
              insurance is mandatory for all golfers.
              <br />
              <br />
              The golf course is served by a Golfer’s Lounge where Golfers and
              non-golfers gather together for relaxation and refreshments. A
              pro-shop outlet can be found in the Golfer’s Lounge.
            </p>
          </div>
        </div>
        <div className="gcImages">
          <img src={Logo} alt="The Kinabalu GolfClub logo" />
        </div>
        <div className="webLink">
          {/* <p>www.kgcsabah.org</p> */}
          {/* <a href="https://www.kgcsabah.org/">www.kgcsabah.org</a> */}
          <button className="emLinks">
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp; GET DIRECTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
