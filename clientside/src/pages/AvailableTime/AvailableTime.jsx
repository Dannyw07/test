import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./AvailableTime.css";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../../components/Footer/Footer";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

// const data = [
//   { name: "8:00 AM", age: "Available", gender: "Male" },
//   { name: "9:00 AM", age: "Closed", gender: "" },
//   { name: "10:00 AM", age: "Unavailable", gender: "" },
//   { name: "11:00 AM", age: "Available", gender: "Male" },
// ];

const AvailableTime = () => {
  return (
    <div className="ATimeContainer">
      <Navbar />
      <h1>Available Timeslot</h1>
      <div className="breadcrumb m-3">
        {/* <div role="presentation" onClick={handleClick}> */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/booking">
            Booking
          </Link>
          <Link underline="hover" color="inherit" href="/availableTime">
            Available Time
          </Link>
        </Breadcrumbs>
        {/* </div> */}
      </div>

      {/* <div className="Time">
        <table>
          <tr>
            <th>Time</th>
            <th>Status</th>
            <th>Checkbox</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </table>
      </div> */}

      <div className="AtimeContent">
        <FontAwesomeIcon
          icon={faFire}
          style={{ color: "#f8f9fc", fontSize: "40px" }}
        />
        <h1>Hot Deals Today</h1>
      </div>
      <div className="availabletimeSlots col-md m-5 d-flex gap-5">
        {/* <div
          className="bg-secondary bg-gradient rounded "
          style={{ width: "250px", height: "175px" }}
        >
          <div className="slot-1">
            <div className=" justify-content-center ">
              <div className="hotdeals">
                <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
                <h2 className="time">08:00 AM</h2>
              </div>
              <div className="slotOneContent">
                <h3>1-2 Players</h3>
                <h3>11 Holes</h3>
              </div>
              <div className="AtimeStatus">
                <h3>Status:</h3>
                <h5 className="status2"> Available</h5>
              </div>
            </div>
          </div>

          <div className="slot-1">
            <div className=" justify-content-center ">
              <div className="hotdeals">
                <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
                <h2 className="time">08:00 AM</h2>
              </div>
              <div className="slotOneContent">
                <h3>1-2 Players</h3>
                <h3>11 Holes</h3>
              </div>
              <div className="AtimeStatus">
                <h3>Status:</h3>
                <h5 className="status2"> Available</h5>
              </div>
            </div>
          </div>
        </div> */}

        <div className="slot-1">
          <div className=" justify-content-center ">
            <div className="hotdeals">
              <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
              <h2 className="time">08:00 AM</h2>
            </div>
            <div className="slotOneContent">
              <h3>1-2 Players</h3>
              <h3>11 Holes</h3>
            </div>
            <div className="AtimeStatus">
              <h3>Status:</h3>
              <h5 className="status2"> Available</h5>
            </div>
          </div>
        </div>

        <div className="slot-1">
          <div className=" justify-content-center ">
            <div className="hotdeals">
              <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
              <h2 className="time">10:00 AM</h2>
            </div>
            <div className="slotOneContent">
              <h3>1-4 Players</h3>
              <h3>11 Holes</h3>
            </div>
            <div className="AtimeStatus">
              <h3>Status:</h3>
              <h5 className="status2"> Available</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvailableTime;
