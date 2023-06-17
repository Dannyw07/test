import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Typography, Grid, Button, TextField } from "@mui/material";
import validate from "validate.js";
import emailjs from "emailjs-com";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebFont from "webfontloader";

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

// const schema = {
//   name: {
//     presence: { allowEmpty: false, message: "is required" },
//     length: { maximum: 128 },
//   },
//   email: {
//     presence: { allowEmpty: false, message: "is required" },
//     email: true,
//     length: { maximum: 300 },
//   },
//   message: {
//     presense: { allowEmpty: false, message: "is required" },
//     length: { maximum: 400 },
//   },
// };

const Contact = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Chilanka"],
      },
    });
  }, []);

  // const [formState, setFormState] = useState({
  //   isValid: false,
  //   values: {},
  //   touched: {},
  //   errors: {},
  // });

  // useEffect(() => {
  //   const errors = validate(formState.values, schema);
  //   setFormState((formState) => ({
  //     ...formState,
  //     isValid: errors ? false : true,
  //     errors: errors || {},
  //   }));
  // }, [formState.values]);

  // const handleChange = (e) => {
  //   e.persist();

  //   setFormState((formState) => ({
  //     ...formState,
  //     values: {
  //       ...formState.values,
  //       [e.target.name]:
  //         e.target.type === "checkbox" ? e.target.checked : e.target.value,
  //     },
  //     touched: {
  //       ...formState.touched,
  //       [e.target.name]: true,
  //     },
  //   }));
  //   // console.log(${process.env.SECRET_KEY})
  // };

  // const hasError = (field) =>
  //   formState.touched[field] && formState.errors[field] ? true : false;

  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [formError, setFormError] = useState({});
  // const [issubmit, setIssubmit] = useState(false);

  // const handleValidation = (e) => {
  //   const { name, value } = e.target;
  //   setFormValue({ ...formValue, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormError(validationform(formValue));
  //   setIssubmit(true);
  // };
  // const validationform = (value) => {
  //   const errors = {};
  //   const emailPattern =
  //     "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

  //   if (!value.name) {
  //     errors.name = "Please Enter Name";
  //   }

  //   if (!value.email) {
  //     errors.email = "Please Enter Email";
  //   } else if (!emailPattern.test(value.email)) {
  //     errors.email = "Enter Valid Email";
  //   }
  //   if (!value.message) {
  //     errors.message = "Please Enter Message";
  //   }

  //   return errors;
  // };

  // useEffect(() => {
  //   if (Object.keys(formError).length === 0 && issubmit) {
  //     console.log(formValue);
  //   }
  // }, [formError, formValue, issubmit]);

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
  return (
    <div className="Contents">
      <Navbar />
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
              <form>
                <div className="userNameInput">
                  <h4>Name</h4>
                  <input
                    type="text"
                    // id="name"
                    className="form-control"
                    name="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {/* <span className="text-danger">{formError.name}</span> */}
                  {fullNameError && <InlineError error={fullNameError} />}
                </div>
                <div className="userEmailInput">
                  <h4>Email</h4>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <InlineError error={emailError} />}
                  {/* <span className="text-danger">{formError.email}</span> */}
                </div>
                <div className="userTextInput">
                  <h4>Message</h4>
                  <textarea
                    className="form-control"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {messageError && <InlineError error={messageError} />}
                  {/* <span className="text-danger">{formError.message}</span> */}
                </div>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
