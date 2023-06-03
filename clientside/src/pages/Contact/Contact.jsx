import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Typography, Grid, Button, TextField } from "@mui/material";
import validate from "validate.js";
import emailjs from "emailjs-com";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: { maximum: 128 },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: { maximum: 300 },
  },
  // message: {
  //   presense: { allowEmpty: false, message: "is required" },
  //   length: { maximum: 400 },
  // },
};

const Contact = () => {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
    // console.log(${process.env.SECRET_KEY})
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className="Contents">
      <Navbar />
      <div className="content">
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

            <div className="secondDiv">
              <div className="userNameInput">
                <h4>Name</h4>
                <input type="text" id="fname" name="fname" />
              </div>
              <div className="userEmailInput">
                <h4>Email</h4>
                <input type="text" id="email" name="email" />
              </div>
              <div className="userTextInput">
                <h4>Message</h4>
                <textarea />
              </div>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
