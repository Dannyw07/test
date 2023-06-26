import React, { useEffect, useState } from "react";
import "./loginV2.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "../../components/LoginValidation";
import Navbarv2 from "../../components/Navbarv2/Navbarv2";
import FooterV2 from "../../components/Footerv2/FooterV2";

const LoginV2 = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  //to see the object in web console log
  console.log(values);
  // This handleSubmit arrow function is called when a user press the signUp button

  const handleSubmit = (event) => {
    // This event.preventDefault function is declared to prevent the
    //  page from submitting the empty form when select the button
    event.preventDefault();
    // axios
    //   .post("http://localhost:8081/login", values)
    //   .then((res) => {
    //     //If the registration is successful, user will be direct to login page else throw error alert
    //     if (res.data.Status === "Success") {
    //       navigate("/");
    //     } else {
    //       alert("Error");
    //     }
    //     console.log(res);
    //   })
    //   .then((err) => console.log(err));

    setErrors(validation(values));
    if (error.email === "" && error.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data.Login) {
            navigate("/");
          } else {
            alert("No record existed");
          }
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

  useEffect(() => {
    axios
      .get("http://localhost:8081", { values })
      .then((res) => {
        // console.log(res);
        if (res.data.valid) {
          navigate("/");
        } else {
          // navigate("/login");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="loGin">
      <Navbarv2 />
      <div className="loginVersionTwo">
        <div className="loginContainer">
          <div className="regTitle">
            <h3>Login Now</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="regInputs">
              {/* To login user email */}
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
              {/* To login user password */}
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
                Sign In
              </button>
            </div>
          </form>
          <div className="createAcc">
            Don't have an account?
            <Link style={{ textDecoration: "none" }} to="/register">
              Create Account
            </Link>
          </div>
        </div>
      </div>
      <FooterV2 />
    </div>
  );
};

export default LoginV2;
