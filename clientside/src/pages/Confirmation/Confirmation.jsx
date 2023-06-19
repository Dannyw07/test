import React from "react";
import "./confirm.css";
import Navbar from "../../components/Navbar/Navbar";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <Navbar />

      <div className="personalInfo">
        <div className="timer">
          <p>You have 3 minutes and 30 seconds to complete your booking</p>
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
                value=""
                className="usersFN"
              />
            </div>
            <div className="userFName">
              <p>Last Name</p>
              <input type="text" name="lastName" value="" className="usersFN" />
            </div>

            <div className="userFName">
              <p>Email</p>
              <input type="email" name="email" value="" className="usersFN" />
            </div>

            <div className="userFName">
              <p>Mobile</p>
              <input type="text" name="lastName" value="" className="usersFN" />
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
                <button>Cancel</button>
              </div>
              <div className="cancelButton">
                <button>Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
