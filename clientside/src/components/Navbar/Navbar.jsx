import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";

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
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          {/* <ReorderIcon />*/}
          Open
        </button>
      </div>
      <div className="rightSide">
        <div className="links-2"></div>
      </div>
    </div>
  );
}

export default Navbar;
