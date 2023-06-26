import React, { useState } from "react";
import "./regV2.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import validation from "../../components/SignUpValidation";
import NavbarV2 from "../../components/Navbarv2/Navbarv2";
import FooterV2 from "../../components/Footerv2/FooterV2";

const RegisterV2 = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  //to see the object in web console log
  console.log(values);
  // This handleSubmit arrow function is called when a user press the signUp button

  const handleSubmit = async (event) => {
    // This event.preventDefault function is declared to prevent the
    //  page from submitting the empty form when select the button
    event.preventDefault();
    // axios
    //   .post("http://localhost:8081/register", values)
    //   .then((res) => {
    //     //If the registration is successful, user will be direct to login page else throw error alert
    //     if (res.data.Status === "Success!") {
    //       navigate("/login");
    //     } else {
    //       alert("Error");
    //     }
    //     console.log(res);
    //   })
    //   .then((err) => console.log(err));
    setErrors(validation(values));
    if (error.name === "" && error.email === "" && error.password === "") {
      axios
        .post("http://localhost:8081/register", values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  const [error, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  return (
    <div className="RegPage">
      <NavbarV2 />
      <div className="registerVersionTwo">
        <div className="regContainer">
          <div className="regTitle">
            <h3>Register Now</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="regInputs">
              {/* To register userName */}
              <div className="regInput">
                <h6>Name</h6>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  className="regInputClass"
                  // onChange={(e) => setValues({ ...values, name: e.target.value })}
                  onChange={handleInput}
                />
                {error.name && (
                  <span className="ErrorMessage" style={{ color: "red" }}>
                    {error.name}
                  </span>
                )}
              </div>
              {/* To register user email */}
              <div className="regInput">
                <h6>Email</h6>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  className="regInputClass"
                  // onChange={(e) =>
                  //   setValues({ ...values, email: e.target.value })
                  // }
                  onChange={handleInput}
                />
                {error.email && (
                  <span className="ErrorMessage" style={{ color: "red" }}>
                    {error.email}
                  </span>
                )}
              </div>
              {/* To register user password */}
              <div className="regInput">
                <h6>Password</h6>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="regInputClass"
                  // onChange={(e) =>
                  //   setValues({ ...values, password: e.target.value })
                  // }
                  onChange={handleInput}
                />
                {error.password && (
                  <span className="ErrorMessage" style={{ color: "red" }}>
                    {error.password}
                  </span>
                )}
              </div>
            </div>
            <div className="regButts">
              <button type="submit" className="registerButton">
                Sign Up
              </button>
            </div>
          </form>

          <div className="haveAnAcc">
            Already have an account?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              Log in Now
            </Link>
          </div>
        </div>
      </div>
      <FooterV2 />
    </div>
  );
};

export default RegisterV2;
