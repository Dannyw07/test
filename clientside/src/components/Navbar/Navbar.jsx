import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../Images/avatar.png";
import { motion } from "framer-motion";

//import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          {/* <ReorderIcon />*/}
          Open
        </button>
      </div>
      <div className="rightSide">
        <div className="links-2">
          {/* <FontAwesomeIcon icon={faBell} /> */}
          <div className="cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />
            <div
              className=" rounded-circle bg-danger  "
              style={{ width: "25px", height: "25px" }}
            >
              <p className="paragraphColor">1</p>
            </div>
          </div>

          {/* <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link> */}
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            alt="userProfile"
            className="userprof"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
