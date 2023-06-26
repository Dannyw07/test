import React, { useEffect, useState } from "react";
import "./nav2.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import potrait from "../../components/Images/avatar.png";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import user from "../../components/Images/user.png";
import settings from "../../components/Images/settings.png";
import help from "../../components/Images/question.png";
import logout from "../../components/Images/log-out.png";

const NavbarV2 = () => {
  const [auth, setAuth] = useState(false);
  //   const navigate = useNavigate();
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => {
        // console.log(res);
        if (res.data.valid) {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          // navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="Home">
      <div className="homeContainer">
        {/* To put GolfBooking Logo for user to toggle */}
        <div className="homeLeftLink"></div>
        {/* A series of link for user to navigate */}
        <div className="homeMidLinks">
          <div className="navigationLinks">
            <Link to="/">Home</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/review">Review</Link>
          </div>
        </div>

        {/* To authenticate a user */}
        {auth ? (
          <div className="homeRightLink">
            <div className="menu-trigger" onClick={() => setOpen(!open)}>
              <img src={potrait} alt=""></img>
            </div>
            <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
              <h3>
                Welcome, {name}!
                <br />
                <span>Website Designer</span>
              </h3>
              <ul>
                <DropdownItem img={user} text={"My Profile"} />
                <DropdownItem img={settings} text={"Settings"} />
                <DropdownItem img={help} text={"Helps"} />
                {/* <DropdownItem
                  img={logout}
                  text={"Logout"}
                  onClick={handleLogout}
                /> */}
                <div className="testLogout">
                  <img src={logout} alt="" />
                  <button className="logoutButs" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <div className="authButton">
            {/* <button className="authLoginButs">Login</button> */}
            <Link to="/login" className="LoginLinkButts">
              <p>Login</p>
            </Link>
          </div>
        )}
      </div>
      {/* <h1 className="welcum">Welcome, {name}!</h1> */}
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt=""></img>
      <a>{props.text}</a>
    </li>
  );
}

export default NavbarV2;
