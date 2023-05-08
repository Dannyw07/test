import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
